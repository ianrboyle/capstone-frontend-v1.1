<template>
  <div>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>My Sectors</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/home">Home</a></li>
            <li class="breadcrumb-item"><a href="/stocks">Positions</a></li>
            <li class="breadcrumb-item active">Sectors</li>
          </ol>
        </nav>
      </div>
      <Sectors :sectors="sectors" />
    </main>
  </div>
</template>

<script>
import axios from "axios";
// import PieChart from ".../components/PieChart.vue";
import Sectors from "@/components/Sectors";
export default {
  data: function () {
    return {
      sectors: [],
    };
  },
  components: {
    Sectors,
  },
  created: function () {
    axios.get("http://localhost:3000/sectors").then((response) => {
      this.sectors = response.data;
      console.log("Success! Sectors data:", response.data);
    });
  },
};
</script>
