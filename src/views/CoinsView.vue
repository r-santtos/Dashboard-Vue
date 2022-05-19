<template>
  <div class="coins">
    <h1>Coins</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CoinsView',
  });
</script>

<style lang="scss" scoped>
  .coins {
    padding: 1rem;
    width: calc(100% - (2rem + 32px));
    display: flex;
  }
</style>