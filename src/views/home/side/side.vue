<template>
  <flex class="container">
    <flex class="banner">
      <h2 class="banner-title">
        <span>
          Total <a
            href="https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#pullrequestevent"
            target="_blank">Pull Request Events</a> created by developers {{ (new Date()).getUTCFullYear() }}
        </span>
        <total-card :state="state" :number="number" />
      </h2>
    </flex>
    <flex class="number-cards" info :direction="size.down('xs') ? 'column' : 'row'" gap="4px">
      <number-card title="Developers" :value="summary.year.dev" color-start="3" color-stop="7" />
      <number-card title="Opened PRs" :value="summary.year.open" color-start="1" color-stop="6" />
      <number-card title="Merged PRs" :value="summary.year.merge" color-start="7" color-stop="5" />
    </flex>
    <template v-if="size.height >= 450">
      <divider />
      <events-player />
      <divider />
    </template>
    <template v-else>
      <flex-spacer />
    </template>
    <flex info direction="row" justify="center">
      <a class="more-info" href="https://ossinsight.io/blog/why-we-choose-tidb-to-support-ossinsight">🤖️ how to make it</a>
      <flex-spacer />
      <span style="color: var(--text-secondary); font-size: 12px" v-if="size.up('sm')">Powered by</span>
      &nbsp;
      &nbsp;
      <a href="https://en.pingcap.com/tidb-cloud?utm_source=ossinsight&utm_medium=referral" target="_blank">
        <img src="/logos/tidbcloud.png" alt="TiDB Cloud" height="16" />
      </a>
      &nbsp;
      &nbsp;
      <a href="https://pulsar.apache.org" target="_blank">
        <img src="/logos/pulsar.png" alt="Pulsar" height="16" />
      </a>
    </flex>
  </flex>
</template>
<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from "vue";
import { prEventsPollStore, process } from "@/store/poll";
import { useActive } from "@/components/hooks/lifecycle";
import { ConnectionState, RawSamplingFirstMessage } from "@/api/poll";
import NumberCard from "@/views/home/side/number-card.vue";
import TotalCard from "@/views/home/side/total-card.vue";
import Flex from "@/components/ui/flex.vue";
import FlexSpacer from "@/components/ui/flex-spacer.vue";
import EventsPlayer from "@/components/events-player.vue";
import Divider from "@/components/ui/divider.vue";
import { useSize } from "@/store";
import { map } from "rxjs";

const usePrEvents = prEventsPollStore('pullRequestEvents');

const getEventCount = (firstEventMessage?: RawSamplingFirstMessage) => {
  if (!firstEventMessage) {
    return 0;
  }
  return Object.values(firstEventMessage.eventMap).reduce((a, b) => a + parseInt(b), 0);
};

const active = useActive();
const prEvents = usePrEvents();
const events = ref(getEventCount(prEvents.stream.lastFirstMessage));
const total = ref(0);
const state = ref(ConnectionState.CONNECTING);

const size = useSize()

const summary = reactive({
  year: {
    dev: 0,
    merge: 0,
    open: 0,
  },
});

prEvents.stream.onStateChange(newState => state.value = newState);

function mergeCount(map: Record<string, string>) {
  return Object.values(map).reduce((p, c) => p + parseInt(c), 0);
}

watchEffect((onCleanup) => {
  if (active.value) {
    const subscription = prEvents.stream.pipe(map(process)).subscribe((ev) => {
      total.value++;
      if (ev.isDevYear) {
        summary.year.dev++;
      }
      switch (ev.prEventType) {
        case 'merged':
          summary.year.merge++;
          break;
        case 'opened':
          summary.year.open++;
          break;
      }
    });
    subscription.add(prEvents.firstMessage.subscribe(fm => {
      events.value = getEventCount(fm);
      total.value = 0;
      summary.year = {
        dev: parseInt(fm.devMap.total),
        merge: mergeCount(fm.mergeMap),
        open: mergeCount(fm.openMap),
      };
    }));
    onCleanup(() => subscription.unsubscribe());
  }
});

const number = computed(() => events.value + total.value);
</script>
<style scoped lang="less">
.container {
  height: 100%;
  height: -webkit-fill-available;
  box-sizing: border-box;
  margin: 0 16px;
}

.banner {
  width: 100%;
  min-height: 94px;
  box-sizing: border-box;
  position: relative;
  margin: 16px 16px 0;

  a {
    color: unset !important;
    pointer-events: auto;
  }

  &:before {
    display: block;
    content: ' ';
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(95.09deg, #34A352 1.97%, #0085FF 94.72%);
    opacity: 0.15;
    border-radius: 6px;
    pointer-events: none;
  }

  &-title {
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    padding:8px;
  }
}
.more-info {
  color: var(--text-light) !important;
  text-decoration: none;
  font-size: 12px;
}
</style>