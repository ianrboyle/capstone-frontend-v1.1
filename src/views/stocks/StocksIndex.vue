<template>
  <div class="stocks-index">
    <h1>{{ message }}</h1>
    <button v-on:click="updateStockPrice()">Update Prices</button>
    <div v-for="stock in stocks" :key="stock.id">
      <router-link v-bind:to="`/stocks/${stock.id}`">
        <button>Info</button>
      </router-link>
      |
      <label>Symbol:</label>
      {{ stock.symbol }}
      |
      <label>Current Price:</label>
      ${{ stock.current_price }}
      |
      <label>Quantity:</label>
      {{ stock.quantity }}
      |
      <label>Cost Basis:</label>
      ${{ stock.cost_basis }}
      |
      <label>Current Total Value:</label>
      ${{ stock.current_total_value }}
      |
      <label>Percent of Account:</label>
      {{ stock.percent_of_account }}% |
      <label>Total Gain/Loss:</label>
      ${{ stock.total_gain_loss }}
      |
      <label>Sector:</label>
      {{ stock.sector.sector }}
      |
      <label>Industry:</label>
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
    updateStockPrice: function () {
      this.stocks.forEach((stock) => {
        axios.patch("http://localhost:3000/stocks/" + stock.symbol).then((response) => {
          console.log("Success! Stocks price updated:", response.data, stock);
        });
      });
    },
  },
};
</script>
