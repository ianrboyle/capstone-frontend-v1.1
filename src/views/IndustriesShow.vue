<template>
  <div class="industries-show">
    Industry: {{ industry.industry }} | Percent of Account: {{ industry.industry_percent_of_account }}% |
    {{ industry.sectors }} Sectors:
    <div v-for="sector in sectors" :key="sector.id">{{ sector.sector }}</div>

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
      sectors: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/industries/" + this.$route.params.id).then((response) => {
      this.industry = response.data;
      this.sectors = response.data.sectors;
      console.log("Success", response.data, this.sectors);
    });
  },
  methods: {
    destroyindustry: function () {
      axios.delete("http://localhost:3000/industries/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.$router.push("/industries");
      });
    },
  },
};
</script>
