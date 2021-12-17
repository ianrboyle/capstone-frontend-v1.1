<script>
import { Pie } from "vue-chartjs";
import axios from "axios";
export default {
  extends: Pie,
  data() {
    return {
      sector: {},
      industries: [],
      chartData: {
        labels: [],
        datasets: [
          {
            borderWidth: 1,
            borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)"],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
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
    await axios.get("http://localhost:3000/sectors/" + this.$route.params.id).then((response) => {
      this.industries = response.data.industry_percent_of_sector;
      this.sector = response.data;
      this.industries.forEach((industry) => {
        this.chartData.labels.push(industry.industry);
        this.chartData.datasets[0].data.push(industry.industry_percent);
      });
      console.log("Inds", typeof this.industries[0].industry_percent);
    });
  },
};
</script>
