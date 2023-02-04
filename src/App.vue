<template>
  <NavbarComponent />
  <div class="container my-8">
    <div class="grid grid-cols-12 gap-4 w-fit mx-auto">
      <template v-for="item in pokemon.pokemons" :key="item.id">
        <AsyncCard :pokemon="item" />
        <!-- <CardLoadingComponent /> -->
      </template>
    </div>
  </div>
</template>

<script>
import { usePokemonStore } from "@/stores/pokemon.js";
import NavbarComponent from "@/components/NavbarComponent";
// import CardComponent from "@/components/CardComponent";
import CardLoadingComponent from "@/components/CardLoadingComponent";
import { defineAsyncComponent } from "vue-demi";

const AsyncCard = defineAsyncComponent({
  loader: () => import("@/components/CardComponent"),
  loadingComponent: CardLoadingComponent,
  errorComponent: "<template>Error</template>",
  delay: 2000,
  timeout: 5000,
  suspensible: false,
});

export default {
  name: "App",
  components: {
    NavbarComponent,
    AsyncCard,
  },
  setup() {
    const pokemon = usePokemonStore();
    return {
      pokemon,
    };
  },
  methods: {
    changeName() {
      this.pokemon.message = "Pokedex Application with Vue3";
    },
  },
  async mounted() {
    try {
      await this.pokemon.getPokemon(
        "https://pokeapi.co/api/v2/pokemon?limit=1000"
      );
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
