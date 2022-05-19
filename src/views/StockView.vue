<template>
  <div class="stock">
    <h1>Stock Exchange</h1>
    <section class="container-grid cards">
      <div
        v-for="(stocks, index) in stocks" :key="index"
        class="container card"
      >
        <div class="container-row title">
          <span>Variation</span>
          <span>{{
            new Intl.NumberFormat('pt-BR', { style: 'percent', currency: 'URD', maximumFractionDigits: 4 }).format(stocks.variation)
          }}</span>
        </div>

        <div class="container">
          <span>{{new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL' }).format(stocks.points)}}
          </span>
        </div>

        <div class="container-row subtitle">
          <span>{{stocks.name}}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'StockView',
    data() {
      return {
        stocks: {
          type: Array,
          default: () => [],
        },
      };
    },
    mounted() {
      fetch('https://api.hgbrasil.com/finance?key=2562ce77')
        .then(response => response.json())
        .then(data => {
          this.stocks = data.results.stocks;
          console.log(this.stocks);
        })
        .catch(error => {
          console.log(error);
        }
      );
    },
  });
</script>

<style lang="scss" scoped>
  .stock {
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