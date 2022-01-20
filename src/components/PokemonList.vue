<template lang="">
  <div class="display">
    <PokemonName
      v-for="(pokemon, index) in $store.state.shownPokemons"
      :key="index"
      :pokemon="pokemon"
    />
  </div>
  <button @click="test">Test</button>
  <button @click="previous">previous</button>
  <button @click="next">next</button>
</template>

<script>
  import { onMounted } from "vue";
  import { useStore } from "vuex";
  import PokemonName from "@/components/PokemonName";

  export default {
    components: {
      PokemonName,
    },
    setup() {
      const store = useStore();

      const previous = () => {
        store.dispatch("previousPage");
      };
      const next = () => {
        store.dispatch("nextPage");
      };

      onMounted(async () => {
        console.log("montado");
        await store.dispatch("getPokemons");
      });
      return { previous, next };
    },
  };
</script>

<style scoped>
  .display {
    justify-content: center;
    padding: 30px;
    margin: 80px auto;
    border: 1px solid black;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 0.7fr));
    gap: 2rem;
  }
</style>
