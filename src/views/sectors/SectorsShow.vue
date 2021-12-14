<template>
  <div class="sectors-show">
    <h3>Sector: {{ sector.sector }} | Percent of Account: {{ sector.sector_percent_of_account }}%</h3>
    <!-- <div v-for="stock in stocks" :key="stock.id">{{ stock.symbol }} | {{ stock.industry.industry }}</div> -->
    <div v-for="industry in industries" :key="industry.id">
      {{ industry.industry }} | {{ industry.industry_percent }} |
      <router-link v-bind:to="`/industries/${industry.industry_id}`">
        <button type="button">View Industry Info</button>
      </router-link>
    </div>

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
      industries: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/sectors/" + this.$route.params.id).then((response) => {
      this.sector = response.data;
      this.stocks = response.data.stocks;
      this.industries = response.data.industry_percent_of_sector;
      console.log("Success", response.data, this.stocks);
    });
    // could i get industries via axios?
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
