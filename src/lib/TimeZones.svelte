<script lang="ts">
  import { zone, zones } from "../store/time";

  const extractName = (z: string): string => {
    return z.split("/")[1].replace("_", "-");
  };

  const changeZone = (z: string) => {
    zone.set(z);
  };
</script>

<div class="flex flex-wrap justify-center gap-6">
  {#each zones as z}
    <button
      class="transition duration-200 button py-2 px-6 cursor-pointer"
      on:click={() => changeZone(z)}>{extractName(z)}</button
    >
  {/each}
</div>

<style>
  .button {
    box-shadow: -5px -5px 20px rgba(255, 255, 255, 0.05),
      10px 10px 20px rgba(0, 0, 0, 0.6);
  }
  .button:hover {
    box-shadow: -1px -1px 20px rgba(255, 255, 255, 0.01),
      10px 10px 20px rgba(0, 0, 0, 0.6);
  }
  .button:active {
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.05),
      20px 20px 20px rgba(0, 0, 0, 0.3),
      inset -8px -8px 15px rgba(255, 255, 255, 0.05),
      inset 20px 20px 20px rgba(0, 0, 0, 0.3);
  }
</style>
