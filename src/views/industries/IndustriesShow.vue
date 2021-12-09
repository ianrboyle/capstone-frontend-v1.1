<template>
  <div class="industries-show">
    Industry: {{ industry.industry }} | Percent of Account: {{ industry.industry_percent_of_account }}% |
    {{ industry.sector_percent_of_industry }} | Sectors:

    <div v-for="sector in sectors" :key="sector.id">
      <h4>{{ sector.sector }}:</h4>
      <p>
        Percent of Industry:
        {{ (sector.sector_percent_of_account / industry.industry_percent_of_account).toFixed(3) * 100 }} %
      </p>
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
      sectors: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/industries/" + this.$route.params.id).then((response) => {
      this.industry = response.data;
      console.log("Success", response.data);
      this.getSectors();
    });
  },
  methods: {
    destroyIndustry: function () {
      axios.delete("http://localhost:3000/industries/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.$router.push("/industries");
      });
    },
    // gets sectors pertaining to this industry to use sector info from backend
    getSectors: function () {
      this.industry.sectors.forEach((sector) => {
        axios.get("http://localhost:3000/sectors/" + sector.id).then((response) => {
          this.sectors.push(response.data);
        });
        console.log("Sectors", this.sectors);
      });
    },
  },
};
</script>
