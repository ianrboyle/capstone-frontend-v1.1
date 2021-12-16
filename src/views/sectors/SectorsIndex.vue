<template>
  <div class="sectors-index">
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>My Sectors</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="/stocks">Positions</a></li>
            <li class="breadcrumb-item active">Sectors</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Title -->

      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Sectors</h5>
                <p></p>
                <!-- Table with stripped rows -->
                <table class="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Sector</th>
                      <th scope="col">% of Account</th>
                      <th scope="col">Current Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="sector in sectors" :key="sector.id">
                      <td scope="row">
                        <router-link v-bind:to="`/sectors/${sector.id}`">
                          <button type="button" class="btn btn-outline-primary">{{ sector.sector }}</button>
                        </router-link>
                      </td>
                      <td>{{ sector.sector_percent_of_account }}%</td>
                      <td>${{ sector.sector_value }}</td>
                    </tr>
                  </tbody>
                </table>
                <!-- End Table with stripped rows -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style></style>
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
