import { derived, readable, writable, type Readable } from "svelte/store";
import { utcToZonedTime } from "date-fns-tz";

export const zones = [
  "Europe/Paris",
  "Asia/Tokyo",
  "Asia/Kolkata",
  "Asia/Shanghai",
  "America/New_York",
];

const zone = readable(zones[0]);

// export const time = readable(new Date(), function start(set) {
export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

export const zonedDate = derived<[Readable<Date>, Readable<string>], Date>(
  [time, zone],
  ([$time, $zone]) => {
    const zonedDate = utcToZonedTime($time, $zone);
    return zonedDate;
  }
);
