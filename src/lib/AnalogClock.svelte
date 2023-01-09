<script lang="ts">
  // https://www.youtube.com/watch?v=4l_QLj2xIO4
  import { zonedDate } from "../store/time";

  //   $: seconds = $zonedDate.getSeconds() * 6 + 360;
  //   $: minutes = $zonedDate.getMinutes() * 6;
  //   $: hours = $zonedDate.getHours() * 30 + $zonedDate.getMinutes() * 0.5;
  //   $: hours =
  //     ($zonedDate.getHours() > 12
  //       ? $zonedDate.getHours() - 12
  //       : $zonedDate.getHours()) *
  //       30 +
  //     ($zonedDate.getMinutes() / 12 + 180);

  let degree = 6;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let date: Date;

  setInterval(() => {
    date = new Date();
    seconds = date.getSeconds() * degree;
    minutes = date.getMinutes() * degree;
    hours = date.getHours() * 30 + date.getMinutes() * 0.5;
  }, 1000);

  const circleStyle =
    "absolute flex justify-center items-start border-2 border-solid border-slate-900 border-opacity-40 rounded-full";

  const nailStyle =
    "transition absolute duration-1000 w-2 h-[50%] origin-bottom after:scale-y-[0.5]";
  const nailBeforeStyle =
    "circle-shadow before:content-[''] before:absolute before:-top-[8.5px] before:-left-[3.5px] before:w-[15px] before:h-[15px] before:rounded-full";
  const hourStyle = "absolute inset-5 text-center text-gray-500 bold text-2xl";
</script>

<div
  class="clock-shadow flex justify-center bg-gray-800 min-h-[500px] rounded-b-3xl rounded-t-full"
>
  <div
    class="analog-clock clock-shadow relative flex justify-center items-center w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full
    before:content-[''] before:z-50 before:bg-gray-900 before:h-3 before:w-3 before:absolute before:border-solid before:border-white before:border-2 before:rounded-full"
  >
    <div
      class="z-30 w-[200px] h-[200px] md:w-[300px] md:h-[300px] {circleStyle}"
    >
      <i
        class="bg-red-600 w-1 {nailStyle} before:bg-red-600 {nailBeforeStyle}"
        style="--clr:rgb(220 38 38); transform: rotateZ({seconds}deg)"
      />
    </div>
    <div
      class="z-20 w-[160px] h-[160px] md:w-[240px] md:h-[240px] {circleStyle}"
    >
      <i
        class="bg-indigo-600 {nailStyle} before:bg-indigo-600 {nailBeforeStyle}"
        style="clr:rgb(79 70 229); transform: rotateZ({minutes}deg)"
      />
    </div>
    <div
      class="z-10 w-[120px] h-[120px] md:w-[180px] md:h-[180px] {circleStyle}"
    >
      <i
        class="bg-lime-600 {nailStyle} before:bg-lime-600 {nailBeforeStyle}"
        style="clr:rgb(101 163 13); transform: rotateZ({hours}deg)"
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
</div>

<style>
  .clock-shadow {
    box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25),
      inset 5px 5px 10px rgba(0, 0, 0, 0.5),
      inset 5px 5px 20px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  }
  .circle-shadow {
    box-shadow: 0 0 20px var(--clr), 0 0 60px var(--clr);
  }
</style>
