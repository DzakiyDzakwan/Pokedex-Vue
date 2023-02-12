<template>
  <div class="grid grid-cols-12 gap-4 w-fit mx-auto">
    <AsyncCard
      v-for="(pokemon, index) in pokemons"
      :key="index"
      :pokemon="pokemon"
      @openModal="$emit('openModal', pokemon)"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue-demi";
import { usePokemonStore } from "@/stores/pokemon.js";
import CardLoadingComponent from "@/components/CardLoadingComponent";
const AsyncCard = defineAsyncComponent({
  loader: () => import("@/components/CardComponent"),
  loadingComponent: CardLoadingComponent,
  delay: 2000,
  timeout: 5000,
  suspensible: false,
});

export default {
  components: { AsyncCard },
  emits: ["openModal"],
  async setup() {
    const { pokemons, getPokemon } = usePokemonStore();
    await getPokemon("https://pokeapi.co/api/v2/pokemon?limit=8");
    return {
      pokemons,
    };
  },
};
</script>

<style></style>
