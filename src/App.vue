<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
  };
</script>

<style>
#nprogress .peg {
  box-shadow: 0 0 10px #00000000, 0 0 5px #00000000 !important; 
}
#nprogress .bar{ 
  top: 56px;
  height: 3px;
  background: #296EF0 !important; 
}
</style>
