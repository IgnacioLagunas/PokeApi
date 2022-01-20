<template lang="">
  <div class="container">
    <p>{{ pokemon.name }}</p>
    <Button
      class="info_btn"
      label="Info"
      @click="displayPokemon(pokemon.url)"
    ></Button>
  </div>
</template>
<script>
  import Button from "primevue/button";
  import { useStore } from "vuex";

  export default {
    props: {
      pokemon: Object,
    },
    components: {
      Button,
    },
    setup() {
      const store = useStore();
      let displayPokemon = (url) => {
        store.dispatch("getPokemon", url);
      };

      return { displayPokemon };
    },
  };
</script>
<style scoped>
  .container {
    margin: 0;
    padding: 0 2em;
    color: black;
    font-weight: 300;
    text-align: start;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container p {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .info_btn {
    color: white;
    padding: 0.5em 2em;
    font-weight: 400 !important;
  }
</style>
