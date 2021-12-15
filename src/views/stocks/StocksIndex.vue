<template>
  <div class="stocks-index">
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>My Positions</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item">Tables</li>
            <li class="breadcrumb-item active">Data</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Title -->

      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Positions</h5>

                <!-- Table with stripped rows -->
                <table class="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Symbol</th>
                      <th scope="col">Current Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Cost Per Share</th>
                      <th scope="col">Current Value</th>
                      <th scope="col">Total Gain/Loss $</th>
                      <th scope="col">Total Gain/Loss %</th>
                      <th scope="col">% of Account</th>
                      <th scope="col">Sector</th>
                      <th scope="col">Industry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="stock in stocks" :key="stock.id">
                      <td scope="row">{{ stock.symbol }}</td>
                      <td>${{ stock.current_price }}</td>
                      <td>{{ stock.quantity }}</td>
                      <td>${{ stock.cost_basis }}</td>
                      <td>${{ stock.current_total_value }}</td>
                      <td>${{ stock.total_gain_loss }}</td>
                      <td>{{ stock.total_gain_loss_percent }}%</td>
                      <td>{{ stock.percent_of_account }}%</td>
                      <td>{{ stock.sector.sector }}</td>
                      <td>{{ stock.industry.industry }}</td>
                    </tr>

                    <!-- <tr>
                      <th scope="row">5</th>
                      <td>Raheem Lehner</td>
                      <td>Dynamic Division Officer</td>
                      <td>47</td>
                      <td>2011-04-19</td>
                    </tr> -->
                  </tbody>
                </table>
                <!-- End Table with stripped rows -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- End #main -->
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Your Stocks:",
      stocks: [],
    };
  },
  created: function () {
    this.indexStocks();
  },
  methods: {
    indexStocks: function () {
      axios.get("http://localhost:3000/stocks").then((response) => {
        this.stocks = response.data;
        console.log("Success! Stocks data:", response.data);
      });
    },
  },
};
</script>
