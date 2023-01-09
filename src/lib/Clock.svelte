<script lang="ts">
  import { time } from "../store/time";
  import AnalogClock from "./AnalogClock.svelte";

  const formatter = new Intl.DateTimeFormat("en", {
    hour12: false,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
</script>

<div>
  <AnalogClock />
</div>

<style>
</style>
