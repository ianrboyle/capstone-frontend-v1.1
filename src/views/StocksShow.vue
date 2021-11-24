<template>
  <div class="stocks-show">
    Symbol: {{ stock.symbol }} | Company Name: {{ stock.company_name }} | Cost Basis: {{ stock.cost_basis }} | Current
    Price: {{ stock.current_price }} | Quantity: {{ stock.quantity }}
    <label>Current Total Value:</label>
    ${{ stock.current_total_value }}
    |
    <label>Percent of Account:</label>
    {{ stock.percent_of_account }}% |
    <label>Total Gain/Loss:</label>
    ${{ stock.total_gain_loss }}
    |
    <label>Sector:</label>
    {{ sector.sector }}
    |
    <label>Industry:</label>
    {{ industry.industry }}

    <div>
      <router-link v-bind:to="`/stocks/${stock.id}/edit`">
        <button type="button" class="btn btn-outline-primary">Edit</button>
      </router-link>
      |
      <router-link v-bind:to="`/stocks`">
        <button type="button" class="btn btn-outline-success">My Stocks</button>
      </router-link>
      |
      <button class="btn btn-outline-danger" v-on:click="destroyStock()">Delete</button>
    </div>
  </div>
</template>
<style>
.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  color: black;
}
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      stock: {},
      sector: {},
      industry: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/stocks/" + this.$route.params.id).then((response) => {
      this.stock = response.data;
      this.sector = response.data.sector;
      this.industry = response.data.industry;
      console.log("Success", response.data, this.sector);
    });
  },
  methods: {
    destroyStock: function () {
      axios.delete("http://localhost:3000/stocks/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.$router.push("/stocks");
      });
    },
  },
};
</script>
