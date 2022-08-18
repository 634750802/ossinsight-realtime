import { acceptHMRUpdate, defineStore } from "pinia";
import { ConnectionSource, sampling, SamplingRequest } from "../api/poll";
import { markRaw } from "vue";


export type CreatePoller<P, T> = (params: P) => ConnectionSource<T>

function poll<TMap extends Record<K, T>, K extends string = string & keyof TMap, T = TMap[K], R extends Record<K, any> = any>(name: string, createPoller: CreatePoller<R[K], T>, options: R) {
  return function createUsePoll(type: K) {
    const param = options[type];
    const storeName = `poll/${name}/${type}`;

    const useStore = defineStore(storeName, {
      state: () => ({
        stream: markRaw(createPoller(param)),
      }),
      actions: {},
      getters: {},
    });

    if (import.meta.hot) {
      import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
    }

    return useStore;
  };
}

export type RawFilteredEvent = [number, string, number, string, string, string]

export interface FilteredEvent {
  'id': number;
  'payload.action': string;
  'payload.pull_request.number': number;
  'repo.name': string;
  'actor.login': string;
  'payload.pull_request.base.repo.language': string;
}

export function process(raw: RawFilteredEvent): FilteredEvent {
  return {
    'id': raw[0],
    'payload.action': raw[1],
    'payload.pull_request.number': raw[2],
    'repo.name': raw[3],
    'actor.login': raw[4],
    'payload.pull_request.base.repo.language': raw[5],
  };
}

export const prEventsPollStore = poll<{ 'pullRequestEvents': RawFilteredEvent }>('sampling', sampling, {
  pullRequestEvents: {
    samplingRate: 1,
    filter: ['id', 'payload.action', 'payload.pull_request.number', 'repo.name', 'actor.login', 'payload.pull_request.base.repo.language'],
    eventType: 'PullRequestEvent',
    returnType: 'list',
  } as SamplingRequest,
});