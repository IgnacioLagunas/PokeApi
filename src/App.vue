<template>
  <Navbar />
  <router-view class="body" />
</template>
<script>
  import Navbar from "@/components/Navbar";

  export default {
    components: {
      Navbar,
    },
  };
</script>
<style>
  #app {
    font-family: "Raleway", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .body {
    width: 92%;
    margin: 0 auto;
  }
</style>
