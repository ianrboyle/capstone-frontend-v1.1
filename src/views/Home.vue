<template>
  <div class="home">
    <main id="main" class="main">
      <section class="section dashboard">
        <div class="row">
          <!-- Left side columns -->
          <div class="col-lg-8">
            <div class="row">
              <!-- Sales Card -->
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card sales-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Current Account Value
                      <span>| {{ historicals[historicals.length - 1].date }}</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-currency-dollar"></i>
                      </div>
                      <div class="ps-3">
                        <h6>${{ historicals[historicals.length - 1].portfolio_value }}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Sales Card -->

              <!-- Revenue Card -->
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card revenue-card">
                  <!-- <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div> -->

                  <div class="card-body">
                    <h5 class="card-title">
                      % Gain/Loss
                      <span>| 24hr</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-percent"></i>
                      </div>
                      <div class="ps-3">
                        <div v-if="historicals[historicals.length - 1].day_gain_loss_percent > 0">
                          <h6>${{ historicals[historicals.length - 1].day_gain_loss }}</h6>
                          <span class="text-success small pt-1 fw-bold">
                            {{ historicals[historicals.length - 1].day_gain_loss_percent }}%
                          </span>
                          <span class="text-muted small pt-2 ps-1">increase</span>
                        </div>
                        <div v-if="historicals[historicals.length - 1].day_gain_loss_percent < 0">
                          <h6>${{ historicals[historicals.length - 1].day_gain_loss }}</h6>
                          <span class="text-danger small pt-1 fw-bold">
                            {{ historicals[historicals.length - 1].day_gain_loss_percent }}%
                          </span>
                          <span class="text-muted small pt-2 ps-1">decrease</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Revenue Card -->

              <!-- Customers Card -->
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card revenue-card">
                  <!-- <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div> -->

                  <div class="card-body">
                    <h5 class="card-title">
                      % Gain/Loss
                      <span>| 1mo</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-percent"></i>
                      </div>
                      <div class="ps-3">
                        <div v-if="historicals[historicals.length - 1].month_gain_loss_percent > 0">
                          <h6>${{ historicals[historicals.length - 1].month_gain_loss }}</h6>
                          <span class="text-success small pt-1 fw-bold">
                            {{ historicals[historicals.length - 1].month_gain_loss_percent }}%
                          </span>
                          <span class="text-muted small pt-2 ps-1">increase</span>
                        </div>
                        <div v-if="historicals[historicals.length - 1].month_gain_loss_percent < 0">
                          <h6>${{ historicals[historicals.length - 1].month_gain_loss }}</h6>
                          <span class="text-danger small pt-1 fw-bold">
                            {{ historicals[historicals.length - 1].month_gain_loss_percent }}%
                          </span>
                          <span class="text-muted small pt-2 ps-1">decrease</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Customers Card -->

              <!-- Reports -->
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Portfolio Performance
                      <span>/Month</span>
                      <div>
                        <line-chart></line-chart>
                      </div>
                    </h5>
                  </div>
                </div>
              </div>
              <!-- End Reports -->
            </div>
          </div>
          <!-- End Left side columns -->

          <!-- Right side columns -->
          <div class="col-lg-4">
            <!-- Recent Activity -->
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div class="card-body">
                <h5 class="card-title">
                  Recent Activity
                  <span>| Today</span>
                </h5>

                <div class="activity">
                  <div class="activity-item d-flex">
                    <div class="activite-label">32 min</div>
                    <i class="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                    <div class="activity-content">
                      Quia quae rerum
                      <a href="#" class="fw-bold text-dark">explicabo officiis</a>
                      beatae
                    </div>
                  </div>
                  <!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">56 min</div>
                    <i class="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                    <div class="activity-content">Voluptatem blanditiis blanditiis eveniet</div>
                  </div>
                  <!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">2 hrs</div>
                    <i class="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                    <div class="activity-content">Voluptates corrupti molestias voluptatem</div>
                  </div>
                  <!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">1 day</div>
                    <i class="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                    <div class="activity-content">
                      Tempore autem saepe
                      <a href="#" class="fw-bold text-dark">occaecati voluptatem</a>
                      tempore
                    </div>
                  </div>
                  <!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">2 days</div>
                    <i class="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                    <div class="activity-content">Est sit eum reiciendis exercitationem</div>
                  </div>
                  <!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">4 weeks</div>
                    <i class="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                    <div class="activity-content">Dicta dolorem harum nulla eius. Ut quidem quidem sit quas</div>
                  </div>
                  <!-- End activity item-->
                </div>
              </div>
            </div>
            <!-- End Recent Activity -->

            <!-- Budget Report -->
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div class="card-body pb-0">
                <h5 class="card-title">
                  Budget Report
                  <span>| This Month</span>
                </h5>

                <div id="budgetChart" style="min-height: 400px" class="echart"></div>
              </div>
            </div>
            <!-- End Budget Report -->

            <!-- Website Traffic -->
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div class="card-body pb-0">
                <h5 class="card-title">
                  Website Traffic
                  <span>| Today</span>
                </h5>

                <div id="trafficChart" style="min-height: 400px" class="echart"></div>
              </div>
            </div>
            <!-- End Website Traffic -->
          </div>
          <!-- End Right side columns -->
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import LineChart from "@/components/HomePageChart.vue";

export default {
  components: {
    LineChart,
  },
  data: function () {
    return {
      historicals: [],
    };
  },
  created: function () {
    this.indexHistoricals();
  },
  methods: {
    indexHistoricals: function () {
      axios.get("http://localhost:3000/historicals").then((response) => {
        this.historicals = response.data;
        console.log("Success! Stocks data:", response.data);
      });
    },
  },
};
</script>
