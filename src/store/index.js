import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    shownPokemons: [],
    currentPokemons: [],
    favPokemons: [],
    API_URL: "https://pokeapi.co/api/v2/pokemon",
    nextPage: null,
    previousPage: null,
  },
  getters: {},
  mutations: {
    SET_POKEMONS(state, payLoad) {
      state.shownPokemons = payLoad;
    },
    ADD_CURRENT_POKEMON(state, payLoad) {
      state.currentPokemons.push(payLoad);
    },
    REMOVE_CURRENT_POKEMON(state, index) {
      state.currentPokemons.splice(index, 1);
    },
    ADD_FAVORITE(state, payLoad) {
      state.favPokemons.push(payLoad);
    },
    REMOVE_FAVORITE(state, index) {
      state.favPokemons.splice(index, 1);
    },
    SET_NEXT(state, payLoad) {
      state.nextPage = payLoad;
    },
    SET_PREVIOUS(state, payLoad) {
      state.previousPage = payLoad;
    },
  },
  actions: {
    // Función para obtener una lista de 20 pokémons, si no se le pasa argumento busca los primeros 20.
    // Al buscar los pokemons también guarda la proxima y la anterior página.

    async getPokemons({ state, commit }, url = state.API_URL) {
      try {
        let { data: response } = await axios.get(url);
        commit("SET_POKEMONS", response.results);
        commit("SET_NEXT", response.next);
        commit("SET_PREVIOUS", response.previous);
      } catch (e) {
        console.log(e);
      }
    },

    nextPage({ state, dispatch }) {
      dispatch("getPokemons", state.nextPage);
    },
    previousPage({ state, dispatch }) {
      dispatch("getPokemons", state.previousPage);
    },

    // Busca un solo pokémon y si está repetido en los pokemon de la tabla simplemente no lo guarda.

    async getPokemon({ commit, state }, pokemonUrl) {
      let { data: newPokemon } = await axios.get(pokemonUrl);
      newPokemon = {
        name: newPokemon.name,
        height: newPokemon.height,
        weight: newPokemon.weight,
        sprite: newPokemon.sprites.front_default,
        id: newPokemon.id,
      };
      let isRepeated = state.currentPokemons.some(
        (pokemon) => pokemon.id == newPokemon.id
      );
      if (!isRepeated) {
        commit("ADD_CURRENT_POKEMON", newPokemon);
      }
    },

    removePokemon({ commit, state }, pokemonToEliminate) {
      let indexOfPokemon = state.currentPokemons.findIndex(
        (pokemon) => pokemon.id == pokemonToEliminate.id
      );
      commit("REMOVE_CURRENT_POKEMON", indexOfPokemon);
    },

    // Esta función agrega un pokemon a favorito y si este ya está lo elimina.
    addFavorite({ commit, state }, newPokemon) {
      let indexOfRepeatedPokemon = state.favPokemons.findIndex(
        (pokemon) => pokemon.id == newPokemon.id
      );
      if (indexOfRepeatedPokemon >= 0) {
        commit("REMOVE_FAVORITE", indexOfRepeatedPokemon);
      } else {
        commit("ADD_FAVORITE", newPokemon);
      }
    },
  },
  modules: {},
});
