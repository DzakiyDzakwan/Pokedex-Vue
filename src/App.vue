<template>
  <NavbarComponent />
  <div class="container pt-8 pb-4">
    <div class="grid grid-cols-12 gap-4 w-fit mx-auto">
      <template v-for="item in pokemon.pokemons" :key="item.id">
        <AsyncCard :pokemon="item" @openModal="modal.openModal(item)" />
      </template>
    </div>
  </div>
  <div class="container pt-4 pb-8">
    <ButtonComponent
      label="Load More"
      addClass="mx-auto"
      @click="pokemon.getPokemon(pokemon.nextUrl)"
    />
  </div>
  <Modal @closeModal="modal.closeModal" />
</template>

<script>
import { usePokemonStore } from "@/stores/pokemon.js";
import { useModalStore } from "@/stores/modal.js";
import NavbarComponent from "@/components/NavbarComponent";
import CardLoadingComponent from "@/components/CardLoadingComponent";
import ButtonComponent from "@/components/ButtonComponent";
import { defineAsyncComponent } from "vue-demi";

const AsyncCard = defineAsyncComponent({
  loader: () => import("@/components/CardComponent"),
  loadingComponent: CardLoadingComponent,
  errorComponent: "<template>Error</template>",
  delay: 2000,
  timeout: 5000,
  suspensible: false,
});

const Modal = defineAsyncComponent({
  loader: () => import("@/components/ModalComponent"),
  loadingComponent: "",
  delay: 2000,
  timeout: 5000,
});

export default {
  name: "App",
  components: {
    NavbarComponent,
    AsyncCard,
    ButtonComponent,
    Modal,
  },
  setup() {
    const modal = useModalStore();
    const pokemon = usePokemonStore();
    return {
      pokemon,
      modal,
    };
  },
  methods: {
    testModal() {
      console.log("modal");
    },
  },
  async mounted() {
    try {
      await this.pokemon.getPokemon(
        "https://pokeapi.co/api/v2/pokemon?limit=8"
      );
    } catch (error) {
      console.log(error);
    }
    console.log("mounted");
  },
};
</script>

<style></style>
