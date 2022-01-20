<template lang="">
  <div class="container favoritePokemons">
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprite" alt="" />
    <button class="option_btn eliminate_btn" @click="addFavorite(pokemon)">
      <i class="far fa-trash-alt"></i>
    </button>
  </div>
</template>
<script>
  import { useStore } from "vuex";

  export default {
    props: {
      pokemon: Object,
    },
    components: {},
    setup() {
      let store = useStore();
      let addFavorite = (pokemon) => {
        store.dispatch("addFavorite", pokemon);
      };
      return { addFavorite };
    },
  };
</script>
<style scoped>
  .border_none {
    border: none !important;
  }
  .container {
    border: solid 1px gray;
    border-radius: 10px;
    position: relative;
  }
  .container img {
    height: 150px;
  }
  .container h3 {
    position: absolute;
    font-weight: 300;
    background-color: white;
    margin: 1em;
    top: -1.7em;
  }
  .container button {
    position: absolute;
    top: 120px;
    right: 7px;
  }
</style>
