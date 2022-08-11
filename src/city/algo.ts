// see https://github.com/honzaap/GithubCity/blob/main/algo.js

import { BUILDING_TYPES, BuildingType, BuildingTypes, RoadTypes } from "./constants";

export type BadTileType = Record<string, never>;
export type GrassTileType = {
  tile: 0;
};
export type RoadTileType = {
  tile: 1;
  type?: keyof RoadTypes;
  dir: number;
};
export type BuildingTileType = {
  tile: 2;
  type: keyof BuildingTypes;
  building: BuildingType;
  dir: number;
  value: number;
  mirror?: boolean;
  data: any;
};
export type NumberTileType = {
  tile: 3
  value: number
}

export type TileType =
  | BadTileType
  | GrassTileType
  | RoadTileType
  | BuildingTileType
  | NumberTileType;

export function getCity(newContribs: number[][], rawContribs: any[][]) {

  let rowLength = -1;
  let colLength = -1;

  let tileTypes: TileType[][] = [];
  let seenTiles: number[][] = [];

  let contribs: number[][] = [];

  // Look through contributions and assign tileType and seenTile to all positions
  function initializeTiles(newContribs: number[][]) {
    contribs = newContribs;
    tileTypes = [];
    seenTiles = [];
    colLength = contribs.length;
    rowLength = contribs[0].length;
    for (let i = 0; i < contribs.length; i++) {
      const seenRow = [];
      const typesRow = [];
      for (let j = 0; j < contribs[0].length; j++) {
        seenRow.push(0);
        typesRow.push(-1);
      }
      tileTypes.push(typesRow as unknown as TileType[]);
      seenTiles.push(seenRow);
    }
  }

  // Get contributions value for given coordinates
  function getValue(x: number, y: number) {
    return isInBounds(x, y) ? contribs[y][x] : -1;
  }

  function getRawData(x: number, y: number) {
    return isInBounds(x, y) ? rawContribs[y][x] : undefined;
  }

  // Get tile type for given coordinate
  function getType(x: number, y: number): TileType {
    return isInBounds(x, y) ? tileTypes[y][x] : {};
  }

  // Tell whether the tile at given coordinates was seen
  function getSeen(x: number, y: number) {
    return isInBounds(x, y) ? seenTiles[y][x] : -1;
  }

  /// Determine if given coordinates are within bounds
  function isInBounds(x: number, y: number) {
    return x >= 0 && x < rowLength && y >= 0 && y < colLength;
  }

  // Determine whether a 2x2 square is formed in any direction from given coordinates
  function is2x2Square(x: number, y: number) {
    for (const i of [-1, 1]) {
      for (const j of [-1, 1]) {
        if (
          getValue(x, y + i) === 0 &&
          getType(x, y + i).tile !== 0 &&
          getValue(x + j, y + i) === 0 &&
          getType(x + j, y + i).tile !== 0 &&
          getValue(x + j, y) === 0 &&
          getType(x + j, y).tile !== 0
        ) {
          return true;
        }
      }
    }
    return false;
  }

  type FindRoadResult = {
    x: number;
    y: number;
    type?: keyof RoadTypes;
    dir: number;
  };

  // Returns road type with its direction for given coordinates
  function findRoad(x: number, y: number): FindRoadResult {
    if (getValue(x, y) !== 0 || getType(x, y).tile === 0) {
      return { x, y } as FindRoadResult;
    }

    const goesUp = getValue(x, y - 1) === 0 && getType(x, y - 1).tile !== 0;
    const goesRight = getValue(x + 1, y) === 0 && getType(x + 1, y).tile !== 0;
    const goesDown = getValue(x, y + 1) === 0 && getType(x, y + 1).tile !== 0;
    const goesLeft = getValue(x - 1, y) === 0 && getType(x - 1, y).tile !== 0;

    let roadDir = 0;
    let roadType = <keyof RoadTypes>(
      Math.max(
        [goesUp, goesRight, goesDown, goesLeft].filter((r) => r).length - 2,
        0,
      )
    );

    if (roadType === 0) {
      // Straight road
      roadDir = 1;
      if (goesUp || goesDown) roadDir = 0;
    } else if (roadType === 1) {
      // 3 way road
      if (!goesUp) roadDir = 3;
      else if (!goesRight) roadDir = 0;
      else if (!goesDown) roadDir = 1;
      else if (!goesLeft) roadDir = 2;
    }
    if (
      roadType === 0 &&
      ((goesDown && (goesRight || goesLeft)) ||
        (goesUp && (goesRight || goesLeft)))
    ) {
      // 2 way turn
      roadType = 3;
      if (goesUp && goesLeft) roadDir = 0;
      else if (goesUp && goesRight) roadDir = 1;
      else if (goesDown && goesLeft) roadDir = 3;
      else if (goesDown && goesRight) roadDir = 2;
    }
    return { x, y, type: roadType, dir: roadDir };
  }

  type FindBuildingResult = {
    x: number;
    y: number;
    type: keyof BuildingTypes;
    building: BuildingType;
    dir: number;
    mirror: boolean;
  };

  // Returns the type, direction and model for the building on given coordinates
  function findBuilding(x: number, y: number, val: number): FindBuildingResult {
    const res: {
      x: number;
      y: number;
      type: number;
      building: unknown;
      dir: number;
      mirror?: boolean;
    } = { x, y, type: -1, building: {}, dir: -1 };
    const neighborCoords: any[] = [];
    seenTiles[y][x] = 1;

    //// disable neighborCoords
    // for (const i of [-1, 1]) {
    //   if (getValue(x, y + i) === val && getSeen(x, y + i) === 0) {
    //     neighborCoords.push({ x, y: y + i, dir: 1 + i });
    //   }
    //   if (getValue(x - i, y) === val && getSeen(x - i, y) === 0) {
    //     neighborCoords.push({ x: x - i, y, dir: 2 + i });
    //   }
    // }

    if (neighborCoords.length >= 1) {
      res.dir = 0;
      let found = false;
      // Search corner neighbour tiles
      for (const j of [1, -1]) {
        for (const i of [j * -1, j]) {
          if (
            getValue(x + j, y + i) !== val ||
            getSeen(x + j, y + i) === 1
          ) {
            res.dir++;
            continue;
          }
          // Search for L pattern leading to found corner tile
          for (let k = 2; k >= 1; k--) {
            const center = { x: x + j * (-1 + k), y: y + i * (2 - k) };
            if (
              getValue(center.x, center.y) === val &&
              getSeen(center.x, center.y) === 0
            ) {
              res.type = 2; // L type
              seenTiles[center.y][center.x] = 1;
              seenTiles[y + i][x + j] = 1;
              res.mirror = k === 2;
              found = true;
              break;
            }
          }
        }
        if (found) break;
        else res.dir++;
      }
      if (res.type === -1) {
        // Search for 1x2 pattern
        res.type = 1; // 1x2 type
        const coords = neighborCoords[0];
        seenTiles[coords.y][coords.x] = 1;
        res.dir = coords.dir;
      }
    } else {
      res.type = 0; // 1x1 type
      res.dir = Math.floor(Math.random() * 4);
    }

    // Pick a building model
    if (res.type !== -1) {
      let types = BUILDING_TYPES[res.type as keyof BuildingTypes];
      types = types.filter((t) => val >= t.min && val <= t.max);
      // let idx = Math.floor(Math.random() * types.length) // Select a random building model
      const idx = (x * y * val) % types.length; // Select a model based on location and height
      res.building = types[idx];
    }

    return res as unknown as FindBuildingResult;
  }

  // Start the algorithm - find and set all tile types
  function findTiles() {
    // Remove any 2x2 squares by replacing tiles with grass
    for (let y = 1; y < contribs.length; y += 2) {
      for (let x = 1; x < contribs[y].length; x++) {
        if (getValue(x, y) === 0 && is2x2Square(x, y)) {
          tileTypes[y][x] = { tile: 0 };
          x++;
        }
      }
    }

    for (let y = 0; y < contribs.length; y++) {
      for (let x = 0; x < contribs[y].length; x++) {
        // Find roads
        if (getValue(x, y) === 0 && getType(x, y).tile !== 0) {
          const road = findRoad(x, y);
          tileTypes[road.y][road.x] = {
            tile: 1,
            type: road.type,
            dir: road.dir,
          };
        }

        // Find grass
        if (
          getValue(x, y) === 0 &&
          getSeen(x, y) === 1 &&
          <unknown>getType(x, y) !== 1
        ) {
          tileTypes[y][x] = { tile: 0 };
        }

        // Find building
        if (getValue(x, y) > 0 && getSeen(x, y) === 0) {
          const building = findBuilding(x, y, Math.floor(getValue(x, y)));
          tileTypes[y][x] = {
            tile: 2,
            type: building.type,
            building: building.building,
            dir: building.dir,
            value: getValue(x, y),
            mirror: building.mirror,
            data: getRawData(x, y),
          };
        }
      }
    }
  }

  initializeTiles(newContribs);
  findTiles();

  return tileTypes;
}