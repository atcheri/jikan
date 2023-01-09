<script lang="ts">
  import AnalogClock from "./lib/AnalogClock.svelte";
  import DigitalClock from "./lib/DigitalClock.svelte";
</script>

<main
  class="flex flex-col gap-10 justify-center items-center bg-gray-900 h-screen w-screen text-slate-100"
>
  <AnalogClock />
  <DigitalClock />
</main>
