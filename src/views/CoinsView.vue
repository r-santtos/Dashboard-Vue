<template>
  <div class="coins">
    <h1>Coins</h1>
    <section class="container-grid cards">
      <div class="container card">
        <div class="container-row title">
          <span>usd</span>
          <span>125656</span>
        </div>

        <div class="container">
          <span>USE 1356</span>
        </div>

        <div class="container subtitle">
          <span>titlo</span>
        </div>
      </div>
    </section>
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
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;

    .cards {
      width: 100%;
      flex-wrap: wrap;
    }

    @media (min-width: 768px) {
      width: calc(100% - (2rem + 64px));
      margin-left: 0rem;
    }
  }
  .card {
    width: 100%;
    min-height: 110px;
    align-items: flex-start;
    justify-content: space-between;
    padding: 12px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    margin-top: 16px;
    background-color: var(--dark);
    color: var(--light);
    border-left: solid 2px var(--primary);
    font-weight: 600;

    .title {
      width: 100%;
      color: #fff;
      opacity: 0.7;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    .subtitle {
      width: 100%;
      color: #fff;
      opacity: 0.7;
      text-transform: capitalize;
      align-items: flex-start;
      font-size: 0.8rem;
    }
  }
</style>