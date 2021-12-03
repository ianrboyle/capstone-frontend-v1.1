<template>
  <div class="sectors-show">
    Sector: {{ sector.sector }} | Percent of Account: {{ sector.sector_percent_of_account }}% | Stocks:
    <div v-for="stock in stocks" :key="stock.id">{{ stock.symbol }}</div>

    <div>
      <router-link v-bind:to="`/sectors/${sector.id}/edit`">
        <button type="button">Edit</button>
      </router-link>
      |
      <router-link v-bind:to="`/sectors`">
        <button type="button" class="btn btn-outline-success">My sectors</button>
      </router-link>
      |
      <button class="btn btn-outline-danger" v-on:click="destroySector()">Delete</button>
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
      sector: {},
      stocks: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/sectors/" + this.$route.params.id).then((response) => {
      this.sector = response.data;
      this.stocks = response.data.stocks;
      console.log("Success", response.data, this.stocks);
    });
  },
  methods: {
    destroySector: function () {
      axios.delete("http://localhost:3000/sectors/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.$router.push("/sectors");
      });
    },
  },
};
</script>
