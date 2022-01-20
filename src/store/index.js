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
    SET_CURRENT_POKEMONS(state, payLoad) {
      state.currentPokemons.push(payLoad);
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
    async getPokemons({ state, commit }, url = state.API_URL) {
      try {
        let { data: response } = await axios.get(url);
        console.log(response);
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

    async getPokemon({ commit }, pokemonUrl) {
      let { data: pokemon } = await axios.get(pokemonUrl);
      pokemon = {
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        sprite: pokemon.sprites.front_default,
        id: pokemon.id,
      };
      commit("SET_CURRENT_POKEMONS", pokemon);
      console.log(pokemon);
    },

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

    // Arreglar Mañanaaaaaaaaaaaa
    // isRepeated({ state }, pokemon, list) {
    //   console.log(state.previousPage);
    //   return list.some((element) => element.id == pokemon.id);
    // },
  },
  modules: {},
});
