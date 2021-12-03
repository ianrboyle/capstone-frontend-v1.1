<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/stocks">My Stocks</router-link>
      |
      <router-link to="/stocks/new">Add a Stock!</router-link>
      |
      <router-link to="/sectors">My Sectors</router-link>
      |
      <router-link to="/sectors/new">Add a Sector!</router-link>
      |
      <router-link to="/industries/new">Add an Industry!</router-link>
      |
      <router-link to="/industries">My Industries!</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
