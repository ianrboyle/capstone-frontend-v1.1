<template>
  <div class="stocks-index">
    <h1>{{ message }}</h1>

    <div v-for="stock in stocks" :key="stock.id">
      {{ stock.symbol }}
      |
      <router-link v-bind:to="`/stocks/${stock.id}`">
        <button type="button" class="btn btn-outline-primary">Info</button>
      </router-link>

      ${{ stock.current_price }}
      {{ stock.quantity }}
      ${{ stock.cost_basis }} ${{ stock.current_total_value }} {{ stock.percent_of_account }}% ${{
        stock.total_gain_loss
      }}
      {{ stock.sector.sector }}
      {{ stock.industry.industry }}
    </div>
  </div>
</template>
<style>
.col-sm {
  background-color: lightgreen;
  border-style: solid;
}
.headers {
  font-weight: bold;
}
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Your Stocks:",
      stocks: [],
    };
  },
  created: function () {
    this.indexStocks();
  },
  methods: {
    indexStocks: function () {
      axios.get("http://localhost:3000/stocks").then((response) => {
        this.stocks = response.data;
        console.log("Success! Stocks data:", response.data);
      });
    },
  },
};
</script>
