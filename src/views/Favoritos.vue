<template>
  <div>
    <div class="display fav_display">
      <FavPokemon
        v-for="(pokemon, index) in $store.state.favPokemons"
        :key="index"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>
<script>
  import FavPokemon from "@/components/FavPokemon";

  export default {
    components: {
      FavPokemon,
    },
  };
</script>
<style>
  .fav_display {
    border: none;
  }
</style>
