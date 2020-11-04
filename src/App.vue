<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
  import Navbar from "./components/common/nav"
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style scoped>
  #app{
    background-color: black;
  }
</style>
