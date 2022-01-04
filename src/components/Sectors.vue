<template>
  <div>
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
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Sector % of Account</h5>

            <!-- Pie Chart -->

            <!-- End Pie CHart -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import PieChart from ".../components/PieChart.vue";

// import PieChart from "@/components/SectorsIndexPie";
export default {
  props: { sectors: { type: Array } },

  data: function () {
    return {
      message: "Your Sectors:",
    };
  },
};
</script>
