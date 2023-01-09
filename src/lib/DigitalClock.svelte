<script lang="ts">
  import { zonedDate } from "../store/time";

  const formatNumber = (n: number): string => {
    return n < 10 ? `0${n}` : `${n}`;
  };

  $: seconds = formatNumber($zonedDate.getSeconds());
  $: minutes = formatNumber($zonedDate.getMinutes());
  $: hours = formatNumber(
    $zonedDate.getHours() > 12
      ? $zonedDate.getHours() - 12
      : $zonedDate.getHours()
  );
  $: period = $zonedDate.getHours() > 12 ? "PM" : "AM";
</script>

<div
  class="clock-shadow flex gap-2 justify-center items-center text-3xl p-6 w-[300px] md:w-[450px] rounded-lg"
>
  <span class="text-lime-600">{hours} :</span>
  <span class="text-indigo-600">{minutes} :</span>
  <span class="text-red-600">{seconds}</span>
  <span class="text-lg">{period}</span>
</div>

<style>
  .clock-shadow {
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.05),
      20px 20px 20px rgba(0, 0, 0, 0.3),
      inset -8px -8px 15px rgba(255, 255, 255, 0.05),
      inset 20px 20px 20px rgba(0, 0, 0, 0.3);
    animation: nukunuku 4s ease-in-out;
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
