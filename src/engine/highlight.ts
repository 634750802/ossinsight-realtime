import { Object3D, Scene } from "three";
import { ObjectEvent } from "@/engine/events";

export function highlight(object: Object3D<ObjectEvent>) {
  object.dispatchEvent({
    type: 'focus',
    isCurrentBuilding: object.userData.isCurrentBuilding,
  });
}

export function unhighlight(scene: Scene) {
  scene.dispatchEvent({
    type: 'blur',
  });
}
