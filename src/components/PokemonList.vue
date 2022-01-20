<template lang="">
  <div class="display">
    <PokemonName
      v-for="(pokemon, index) in pokemons"
      :key="index"
      :pokemon="pokemon"
    />
  </div>
  <div class="pagination_btns">
    <Button
      class="p-button-secondary pagination_btn"
      style="margin-right: 4em"
      @click="previous"
      v-if="$store.state.previousPage"
      >Previous</Button
    >
    <Button
      class="p-button-secondary pagination_btn"
      @click="next"
      v-if="$store.state.nextPage"
      >Next</Button
    >
  </div>
</template>

<script>
  import { onMounted } from "vue";
  import { useStore } from "vuex";
  import Button from "primevue/button";
  import PokemonName from "@/components/PokemonName";

  export default {
    components: {
      PokemonName,
      Button,
    },
    props: {
      pokemons: Array,
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

<style>
  .display {
    justify-content: center;
    padding: 30px;
    margin: 80px auto;
    margin-bottom: 50px;
    border: 1px solid black;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 0.7fr));
    gap: 2rem;
  }
  .pagination_btn {
    font-weight: 500 !important;
  }
  .pagination_btns {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 4em;
  }

  @media (max-width: 380px) {
    .display {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      font-size: 20px;
    }
    .container {
      flex-direction: column;
    }
  }
</style>
