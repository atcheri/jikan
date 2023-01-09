<script lang="ts">
  import { zonedDate } from "../store/time";

  $: seconds = $zonedDate.getSeconds() * 6 + 360;
  $: minutes = $zonedDate.getMinutes() * 6;
  $: hours = $zonedDate.getHours() * 30 + $zonedDate.getMinutes() * 0.5;

  const circleStyle =
    "absolute flex justify-center items-start border-2 border-solid border-indigo-700 border-opacity-30 rounded-full";

  const nailStyle = "w-2 h-[50%] origin-bottom";
  const nailBeforeStyle =
    "circle-shadow before:content-[''] before:absolute before:-top-[8.5px] before:w-[15px] before:h-[15px] before:rounded-full";
  const hourStyle = "absolute inset-5 text-center text-gray-500 bold text-2xl";
</script>

{#if hours && minutes && seconds}
  <div
    class="clock-shadow animate-fadeIn relative flex justify-center items-center w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full
    before:content-[''] before:z-50 before:bg-gray-900 before:h-3 before:w-3 before:absolute before:border-solid before:border-white before:border-2 before:rounded-full"
  >
    <div class="w-[200px] h-[200px] md:w-[300px] md:h-[300px] {circleStyle}">
      <i
        class="z-10 bg-red-600 w-1 {nailStyle} before:bg-red-600 before:-left-1 {nailBeforeStyle}"
        style="--clr:rgb(220 38 38); transform: rotateZ({seconds}deg);"
      />
    </div>
    <div class="w-[160px] h-[160px] md:w-[240px] md:h-[240px] {circleStyle}">
      <i
        class="z-20 bg-indigo-600 w-2 {nailStyle} before:bg-indigo-600 before:-left-1 {nailBeforeStyle}"
        style="--clr:rgb(79 70 229); transform: rotateZ({minutes}deg)"
      />
    </div>
    <div
      class="z-10 w-[120px] h-[120px] md:w-[180px] md:h-[180px] {circleStyle}"
    >
      <i
        class="z-30 bg-lime-600 w-3 {nailStyle} before:bg-lime-600 before:-left-[1px] {nailBeforeStyle}"
        style="--clr:rgb(101 163 13); transform: rotateZ({hours}deg)"
      />
    </div>
    <span class="{hourStyle} rotate-[30deg]"
      ><b class="inline-block rotate-[330deg]">1</b></span
    >
    <span class="{hourStyle} rotate-[60deg]"
      ><b class="inline-block rotate-[300deg]">2</b></span
    >
    <span class="{hourStyle} rotate-[90deg]"
      ><b class="inline-block rotate-[270deg]">3</b></span
    >
    <span class="{hourStyle} rotate-[120deg]"
      ><b class="inline-block rotate-[240deg]">4</b></span
    >
    <span class="{hourStyle} rotate-[150deg]"
      ><b class="inline-block rotate-[210deg]">5</b></span
    >
    <span class="{hourStyle} rotate-[180deg]"
      ><b class="inline-block rotate-[180deg]">6</b></span
    >
    <span class="{hourStyle} rotate-[210deg]"
      ><b class="inline-block rotate-[150deg]">7</b></span
    >
    <span class="{hourStyle} rotate-[240deg]"
      ><b class="inline-block rotate-[120deg]">8</b></span
    >
    <span class="{hourStyle} rotate-[270deg]"
      ><b class="inline-block rotate-[90deg]">9</b></span
    >
    <span class="{hourStyle} rotate-[300deg]"
      ><b class="inline-block rotate-[60deg]">10</b></span
    >
    <span class="{hourStyle} rotate-[330deg]"
      ><b class="inline-block rotate-[30deg]">11</b></span
    >
    <span class="{hourStyle} rotate-[360deg]"
      ><b class="inline-block">12</b></span
    >
  </div>
{/if}

<style>
  .clock-shadow {
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.05),
      20px 20px 20px rgba(0, 0, 0, 0.3),
      inset -8px -8px 15px rgba(255, 255, 255, 0.05),
      inset 20px 20px 20px rgba(0, 0, 0, 0.3);
    animation: nukunuku 4s ease-in-out;
  }
  .circle-shadow {
    box-shadow: 0 0 20px var(--clr), 0 0 60px var(--clr);
  }

  @keyframes nukunuku {
    0% {
      box-shadow: -8px -8px 15px rgba(255, 255, 255, 0),
        20px 20px 20px rgba(0, 0, 0, 0),
        inset -8px -8px 15px rgba(255, 255, 255, 0),
        inset 20px 20px 20px rgba(0, 0, 0, 0);
    }
    100% {
      box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.05),
        20px 20px 20px rgba(0, 0, 0, 0.3),
        inset -8px -8px 15px rgba(255, 255, 255, 0.05),
        inset 20px 20px 20px rgba(0, 0, 0, 0.3);
    }
  }
</style>
