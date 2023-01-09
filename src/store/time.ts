import { derived, readable, writable } from "svelte/store";

// export const time = readable(new Date(), function start(set) {
export const time = writable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});
