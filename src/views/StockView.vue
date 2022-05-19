<template>
  <div class="stock">
    <h1>StockView </h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'StockView',
  });
</script>

<style lang="scss" scoped>
  .stock {
    padding: 1rem;
    width: calc(100% - (2rem + 32px));
    display: flex;
  }
</style>