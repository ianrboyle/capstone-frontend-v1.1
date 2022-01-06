<template>
  <main id="main" class="main">
    <section>
      <div :key="currentUser.id">
        <h1>Profile</h1>
        <p>Name: {{ currentUser.name }}</p>
        <p>Email: {{ currentUser.email }}</p>
        <p>Password: Private</p>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      stocks: [],
      currentUser: {},
    };
  },
  async mounted() {
    await axios.get("https://fierce-taiga-06308.herokuapp.com/stocks").then((response) => {
      this.stocks = response.data;
      console.log(response.data);
      this.currentUser = this.stocks[0].user;
    });
  },
};
</script>
