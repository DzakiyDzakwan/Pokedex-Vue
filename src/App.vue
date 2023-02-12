<template>
  <NavbarComponent />
  <div class="container pt-8 pb-4">
    <Suspense>
      <template #default>
        <PokemonContainer @openModal="modal.openModal" />
      </template>
      <template #fallback>
        <h1 class="text-heading-large text-center">Loading.....</h1>
      </template>
    </Suspense>
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
import PokemonContainer from "@/components/PokemonContainer";
import ButtonComponent from "@/components/ButtonComponent";
import { defineAsyncComponent } from "vue-demi";

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
    PokemonContainer,
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
    console.log("mounted");
  },
};
</script>

<style></style>
