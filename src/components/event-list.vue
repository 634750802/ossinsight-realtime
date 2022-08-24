<template>
  <list class="list" :el-ref="(el: HTMLElement) => containerRef = el">
    <transition-group name="list">
      <li v-for="(event, i) in realtimeEvents" :key="event.id" :ref="el => refEl(i, el)">
        <Event :event="event" />
      </li>
    </transition-group>
  </list>
</template>
<script lang="ts" setup>
import List from "./ui/list.vue";
import Event from "./ui/event.vue";
import { markRaw, reactive, ref, watch, watchEffect } from "vue";
import { useActive } from "./hooks/lifecycle";
import { FilteredEvent, PollStore, process, RawFilteredEvent } from "@/store/poll";
import { bufferTime, filter, map, Subject } from "rxjs";
import { languages } from "./ui/lang";
import { RawSamplingFirstMessage } from "@/api/poll";

const allPass = (_: FilteredEvent) => true;

const elements = reactive<(HTMLElement | undefined)[]>([]);
const containerRef = ref<HTMLElement>();
const realtimeEvents = reactive<FilteredEvent[]>([]);
const eventFilter = ref(allPass);
const active = useActive();

const subject = new Subject<FilteredEvent>();

const props = defineProps<{
  source: PollStore<RawFilteredEvent, RawSamplingFirstMessage>,
  language: string,
  repo: string,
}>();

const refEl = (i: number, el: any) => {
  elements[i] = el ? markRaw(el) : undefined;
};

subject.pipe(bufferTime(300)).subscribe(items => {
  realtimeEvents.unshift(...items);
});

watchEffect((onCleanup) => {
  if (active.value) {
    const subscription = props.source.stream
        .pipe(map(process))
        .pipe(filter(eventFilter.value))
        .subscribe(subject);
    onCleanup(() => subscription.unsubscribe());
  }
});

watch(elements, elements => {
  const container = containerRef.value;
  if (!container) {
    return;
  }
  const { bottom: parentBottom } = container.getBoundingClientRect();
  if (elements.length > 0) {
    let i = elements.length - 1;
    while (i >= 0) {
      const last = elements[i];
      if (!last) {
        return;
      }
      const { bottom } = last.getBoundingClientRect();
      if (bottom >= parentBottom + 32) {
        realtimeEvents.splice(i, 1);
        i--;
      } else {
        break;
      }
    }
  }
}, { immediate: false, flush: 'post' });


watch([() => props.language, () => props.repo], ([language, repo]) => {
  repo = repo.toLowerCase().trim();
  let filters: (typeof allPass)[] = [];
  if (language === 'Others') {
    filters.push(ev => {
      const lang = ev["payload.pull_request.base.repo.language"];
      for (let exists of languages) {
        if (lang === exists) {
          return false;
        }
      }
      return true;
    });
  } else if (language !== 'All') {
    filters.push(ev => ev["payload.pull_request.base.repo.language"] === language);
  }

  if (repo !== '') {
    filters.push(ev => ev["actor.login"].toLowerCase().indexOf(repo) !== -1 || ev['repo.name'].toLowerCase().indexOf(repo) !== -1);
  }

  if (filters.length === 0) {
    eventFilter.value = allPass;
  } else {
    eventFilter.value = (i: FilteredEvent) => {
      for (const filter of filters) {
        if (!filter(i)) {
          return false;
        }
      }
      return true;
    };
  }
});

watch(eventFilter, (filter) => {
  const filtered = realtimeEvents.filter(filter);
  if (filtered.length !== realtimeEvents.length) {
    realtimeEvents.splice(0, realtimeEvents.length, ...filtered);
  }
});

</script>
<style scoped>
.list {
  width: 100%;
  flex: 1;
  overflow: hidden;
  position: relative;
  margin: 16px;
}

.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.2s linear;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
</style>