import { useVisible, useVisibleInstant } from "./visible";
import { computed, onActivated, onBeforeUnmount, onDeactivated, onMounted, ref } from "vue";
import { useThrottleToggle } from "./throttle-toggle";
import { VISIBLE_THROTTLE } from "@/plugins/visible";

/**
 * From mounted to beforeUnmount.
 *
 * Default is false
 * */
export function useMounted() {
  const mounted = ref(false);
  onMounted(() => mounted.value = true);
  onBeforeUnmount(() => mounted.value = false);
  return mounted;
}

/**
 * From activated to deactivated (only when under &lt;keep-alive&gt;)
 *
 * Default is true
 *
 * @param throttle
 */
export function useActivated(throttle: number) {
  const { result: activated, toggle, throttleToggle } = useThrottleToggle(true, throttle);
  onActivated(() => {
    toggle(true);
  });
  onDeactivated(() => {
    throttleToggle(false);
  });
  return activated;
}

/**
 * Combines useVisible, useMounted and useActivated.
 */
export function useActive(throttle: number = VISIBLE_THROTTLE) {
  const visible = throttle > 0 ? useVisible() : useVisibleInstant();
  const mounted = useMounted();
  const activated = useActivated(throttle);

  return computed(() => visible.value && mounted.value && activated.value);
}
