<template>
  <div class="home">
    <PokemonList :pokemons="$store.state.shownPokemons" />
    <Tabla />
  </div>
</template>

<script>
  // @ is an alias to /src

  import PokemonList from "@/components/PokemonList";
  import Tabla from "@/components/Tabla";

  export default {
    name: "Home",
    components: {
      PokemonList,
      Tabla,
    },
  };
</script>
<style></style>
