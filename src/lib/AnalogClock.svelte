<script lang="ts">
  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
</script>

<div
  class="clock-shadow flex justify-center bg-gray-800 min-h-[500px] rounded-b-3xl rounded-t-full"
>
  <div
    class="analog-clock clock-shadow relative flex justify-center items-center w-[450px] h-[450px] rounded-full
    before:content-[''] before:bg-gray-900 before:h-3 before:w-3 before:absolute before:border-solid before:border-white before:border-2 before:rounded-full"
  >
    {#each hours as h}
      <span
        class="absolute inset-5 text-center text-gray-500 bold text-2xl rotate-[{h *
          30}deg]"
        ><b class="inline-block rotate-[{360 - h * 30}deg]">{h}</b></span
      >
    {/each}
  </div>
</div>

<style>
  .clock-shadow {
    box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25),
      inset 5px 5px 10px rgba(0, 0, 0, 0.5),
      inset 5px 5px 20px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  }
</style>
