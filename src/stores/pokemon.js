import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemonStore = defineStore("pokemon", () => {
  const message = ref("Pokedex Vue 3");
  const pokemons = ref([]);
  const filteredPokemon = ref(null);
  const isLoading = ref(false);
  const nextUrl = ref("");

  async function fetchData(url) {
    try {
      const data = await fetch(url);
      const res = await data.json();
      return res;
    } catch (error) {
      return error;
    }
  }

  async function getPokemon(url) {
    isLoading.value = true;
    const source = await fetchData(url);
    nextUrl.value = source.next;
    source.results.forEach(async (i) => {
      const data = await fetchData(i.url);
      pokemons.value.push(data);
    });
  }

  return {
    message,
    pokemons,
    filteredPokemon,
    isLoading,
    nextUrl,
    fetchData,
    getPokemon,
  };
});
