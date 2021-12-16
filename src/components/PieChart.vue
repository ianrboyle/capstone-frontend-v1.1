<script>
import { Pie } from "vue-chartjs";
import axios from "axios";
export default {
  extends: Pie,
  data() {
    return {
      sectorsData: [],
      chartData: {
        labels: [],
        datasets: [
          {
            borderWidth: 1,
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            data: [],
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  async mounted() {
    await this.renderChart(this.chartData, this.options);
    await axios.get("http://localhost:3000/sectors").then((response) => {
      console.log(response.data);
      this.sectorsData = response.data;
      this.sectorsData.forEach((sector) => {
        this.chartData.labels.push(sector.sector);
        this.chartData.datasets[0].data.push(sector.sector_percent_of_account);
        console.log(typeof sector.sector_percent_of_account);
      });
      console.log(typeof this.chartData.datasets[0].data[0]);
    });
  },
};
</script>
