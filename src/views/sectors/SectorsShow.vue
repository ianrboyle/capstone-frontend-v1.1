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

                <!-- Table with stripped rows -->
                <table class="table datatable table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Industry</th>
                      <th scope="col">% of {{ sector.sector }}</th>
                      <th scope="col">Industry Value</th>
                      <th scope="col">% of Account</th>
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
                      <td>${{ ((industry.industry_percent * sector.sector_value) / 100).toFixed(2) }}</td>

                      <td>{{ ((industry.industry_percent * sector.sector_value) / accountValue).toFixed(2) }}%</td>
                    </tr>
                  </tbody>
                  <!-- <p>
                  <router-link v-bind:to="`/sectors/${sector.id}/edit`">
                    <button type="button" class="btn btn-outline-success">Edit Sector</button>
                  </router-link>
                </p> -->
                </table>
                <p><button class="btn btn-outline-danger" v-on:click="destroySector()">Delete Sector</button></p>
                <!-- End Table with stripped rows -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Industry % of Sector</h5>

              <!-- Pie Chart -->
              <div id="pieChart" style="max-height: 500px">
                <pie-chart></pie-chart>
              </div>

              <!-- End Pie CHart -->
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style></style>

<script defer>
import axios from "axios";
import PieChart from "@/components/SectorsShowPie";
export default {
  components: {
    PieChart,
  },
  data: function () {
    return {
      sector: {},
      stocks: [],
      industries: [],
      accountValue: 0,
    };
  },
  created: function () {
    axios.get("http://localhost:3000/sectors/" + this.$route.params.id).then((response) => {
      this.sector = response.data;
      this.stocks = response.data.stocks;
      this.industries = response.data.industry_percent_of_sector;
      this.accountValue = this.stocks[0].current_account_value;
      console.log("Success", response.data, this.accountValue);
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
