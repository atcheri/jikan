<script lang="ts">
  import { time, zonedDate } from "../store/time";
  import AnalogClock from "./AnalogClock.svelte";

  const formatter = new Intl.DateTimeFormat("en", {
    hour12: false,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  $: hours = $zonedDate.getHours();
  $: minutes = $zonedDate.getMinutes();
  $: seconds = $zonedDate.getSeconds();
</script>

<div>
  Clock show time!
  <h1>The time is {formatter.format($time)}</h1>
  <div>{hours}</div>
  <div>{minutes}</div>
  <div>{seconds}</div>
  <div />
  <AnalogClock />
</div>

<style>
</style>
