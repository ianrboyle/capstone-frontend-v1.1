<template>
  <div class="industries-show">
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>{{ industry.industry }}</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="/stocks">Positions</a></li>
            <li class="breadcrumb-item"><a href="/industries">Industries</a></li>
            <li class="breadcrumb-item active">{{ industry.industry }}</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Title -->

      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Industry Info</h5>
                <p>Current Allocation to {{ industry.industry }}: ${{ industry.industry_value }}</p>
                <!-- Table with stripped rows -->
                <table class="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Industry</th>
                      <th scope="col">Stock % of Industry</th>
                      <th scope="col">Current Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="stock in stocks" :key="stock.id">
                      <td scope="row">
                        {{ stock.symbol }}
                      </td>
                      <td>
                        {{ (((stock.quantity * stock.current_price) / industry.industry_value) * 100).toFixed(2) }}%
                      </td>
                      <td>${{ stock.current_total_value }}</td>
                    </tr>
                  </tbody>
                </table>
                <!-- End Table with stripped rows -->
                <!-- <p>
                  <router-link v-bind:to="`/industries/${industry.id}/edit`">
                    <button type="button" class="btn btn-outline-success">Edit Sector</button>
                  </router-link>
                </p> -->
                <p><button class="btn btn-outline-danger" v-on:click="destroyIndustry()">Delete</button></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
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
