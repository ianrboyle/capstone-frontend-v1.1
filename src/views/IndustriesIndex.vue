<template>
  <div class="industries-index">
    <h1>{{ message }}</h1>

    <div v-for="industry in industries" :key="industry.id">
      <router-link v-bind:to="`/industries/${industry.id}`">
        <button>Info</button>
      </router-link>
      |
      <label>Industry:</label>
      {{ industry.industry }}
      |
      <label>Percent of Account:</label>
      {{ industry.industry_percent_of_account }}%
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
      message: "Your Industries:",
      industries: [],
    };
  },
  created: function () {
    this.indexSectors();
  },
  methods: {
    indexSectors: function () {
      axios.get("http://localhost:3000/industries").then((response) => {
        this.industries = response.data;
        console.log("Success! Industries data:", response.data);
      });
    },
  },
};
</script>
