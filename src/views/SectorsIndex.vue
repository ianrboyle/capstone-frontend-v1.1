<template>
  <div class="stocks-index">
    <h1>{{ message }}</h1>

    <div v-for="sector in sectors" :key="sector.id">
      <router-link v-bind:to="`/sectors/${sector.id}`">
        <button>Info</button>
      </router-link>
      |
      <label>Sector:</label>
      {{ sector.sector }}
      |
      <label>Percent of Account:</label>
      {{ sector.sector_percent_of_account }}%
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
      message: "Your Sectors:",
      sectors: [],
    };
  },
  created: function () {
    this.indexSectors();
  },
  methods: {
    indexSectors: function () {
      axios.get("http://localhost:3000/sectors").then((response) => {
        this.sectors = response.data;
        console.log("Success! Sectors data:", response.data);
      });
    },
  },
};
</script>
