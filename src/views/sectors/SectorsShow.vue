<template>
  <div class="sectors-show">
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>{{ sector.sector }}</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="/sectors">Sectors</a></li>
            <li class="breadcrumb-item active">{{ sector.sector }}</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Title -->

      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Sector Info</h5>
                <p>
                  <router-link v-bind:to="`/sectors/${sector.id}/edit`">
                    <button type="button" class="btn btn-outline-success">Edit Sector</button>
                  </router-link>
                </p>
                <p><button class="btn btn-outline-danger" v-on:click="destroySector()">Delete</button></p>
                <!-- Table with stripped rows -->
                <table class="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Industry</th>
                      <th scope="col">Industry % of Sector</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="industry in industries" :key="industry.id">
                      <td scope="row">
                        <router-link v-bind:to="`/industries/${industry.industry_id}`">
                          <button type="button" class="btn btn-outline-primary">{{ industry.industry }}</button>
                        </router-link>
                      </td>
                      <td>{{ industry.industry_percent }}%</td>
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
    <!-- <div v-for="industry in industries" :key="industry.id">
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
    </div> -->
  </div>
</template>
<style></style>

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
