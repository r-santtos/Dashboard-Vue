<template>
  <div class="taxation">
    <h1>TaxationView</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TaxationView',
  });
</script>

<style lang="scss" scoped>
  .taxation {
    padding: 1rem;
    width: calc(100% - (2rem + 32px));
    display: flex;
  }
</style>