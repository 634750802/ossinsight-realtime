import { animationFrames, mergeMap, Observable, Subscriber, Subscription } from "rxjs";
import { createDebugLogger } from "@/utils/debug";
import { onBeforeUnmount } from "vue";

const FPS = 60;
const FRAME_INTERVAL = 1000 / FPS;

class UnifiedAnimationFrameSource extends Observable<readonly [number, number, number]> {
  subscribers: Set<Subscriber<readonly [number, number, number]>> = new Set();
  subscription?: Subscription;

  constructor() {
    const debug = createDebugLogger('animation-frame-source');
    super(subscriber => {
      const shouldStart = this.subscribers.size === 0;
      this.subscribers.add(subscriber);

      if (shouldStart) {
        debug('start');
        let last = performance.now();
        let delta = 0;
        const frames = animationFrames().pipe(mergeMap(({ timestamp, elapsed }) => {
          const diff = timestamp - last;
          last = timestamp;
          delta += diff;
          if (delta >= FRAME_INTERVAL) {
            const res = [[timestamp, delta, elapsed] as const];
            delta %= FRAME_INTERVAL;
            return res;
          }
          return [];
        }));
        this.subscription = frames.subscribe((tick) => {
          this.subscribers.forEach(s => s.next(tick));
        });
      }

      subscriber.add(() => {
        this.subscribers.delete(subscriber);
        const shouldStop = this.subscribers.size === 0;
        if (shouldStop) {
          debug('stop');
          this.subscription?.unsubscribe();
          this.subscription = undefined;
        }
      });
    });
  }
}

const source = new UnifiedAnimationFrameSource();

export function useAnimationFrame(cb: (ts: DOMHighResTimeStamp, diff: DOMHighResTimeStamp, elapsed: DOMHighResTimeStamp) => void) {
  let subscription: Subscription | undefined;

  const start = () => {
    if (subscription) {
      return;
    }

    subscription = source.subscribe((item) => {
      cb.apply(undefined, item as any);
    });
  };

  const stop = () => {
    if (subscription) {
      subscription.unsubscribe();
      subscription = undefined;
    }
  };

  onBeforeUnmount(stop);

  return { start, stop };
}
