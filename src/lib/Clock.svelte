<script lang="ts">
  import { time } from "../store/time";

  const formatter = new Intl.DateTimeFormat("en", {
    hour12: false,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
</script>

<div>
  Clock show time!
  <h1>The time is {formatter.format($time)}</h1>
</div>

<style>
</style>
