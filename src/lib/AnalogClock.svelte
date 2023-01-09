<script lang="ts">
</script>

<div
  class="clock-shadow flex justify-center bg-gray-800 min-h-[500px] rounded-b-3xl rounded-t-full"
>
  <div
    class="analog-clock clock-shadow relative flex justify-center items-center w-[450px] h-[450px] rounded-full
    before:content-[''] before:bg-gray-900 before:h-3 before:w-3 before:absolute before:border-solid before:border-white before:border-2 before:rounded-full"
  />
</div>

<style>
  .clock-shadow {
    box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25),
      inset 5px 5px 10px rgba(0, 0, 0, 0.5),
      inset 5px 5px 20px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  }
</style>
