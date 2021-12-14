<template>
  <div class="industries-show">
    Industry: {{ industry.industry }} | Percent of Account: {{ industry.industry_percent_of_account }}% |
    <div v-for="stock in stocks" :key="stock.id">
      {{ stock.symbol }} | Percent of Industry:
      {{ (((stock.quantity * stock.current_price) / industry.industry_value) * 100).toFixed(2) }}%
    </div>
    <div>
      <router-link v-bind:to="`/industries/${industry.id}/edit`">
        <button type="button">Edit</button>
      </router-link>
      |
      <router-link v-bind:to="`/industries`">
        <button type="button" class="btn btn-outline-success">My Industries</button>
      </router-link>
      |
      <button class="btn btn-outline-danger" v-on:click="destroyIndustry()">Delete</button>
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
      industry: {},
      stocks: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/industries/" + this.$route.params.id).then((response) => {
      this.industry = response.data;
      this.stocks = response.data.stocks;
      console.log("Success", response.data, typeof this.stocks[0]["current_value"]);
    });
  },
  methods: {
    destroyIndustry: function () {
      axios.delete("http://localhost:3000/industries/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.$router.push("/industries");
      });
    },
  },
};
</script>
