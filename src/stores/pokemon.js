import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemonStore = defineStore("pokemon", () => {
  const pokemons = ref([]);
  const filteredPokemon = ref(null);
  const loaded = ref(false);
  const error = ref(null);
  const nextUrl = ref("");

  async function fetchData(url) {
    if (!loaded.value) {
      try {
        const data = await fetch(url);
        const res = await data.json();
        return res;
      } catch (error) {
        return error;
      }
    }
  }

  async function getPokemon(url) {
    if (!loaded.value) {
      const source = await fetchData(url);
      source.results.forEach(async (i) => {
        const data = await fetchData(i.url);
        pokemons.value.push(data);
      });
      nextUrl.value = source.next;
    }
  }

  return {
    pokemons,
    filteredPokemon,
    loaded,
    error,
    nextUrl,
    fetchData,
    getPokemon,
  };
});
