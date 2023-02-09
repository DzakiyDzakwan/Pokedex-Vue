import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore({ id: "modal" }, () => {
  const isOpen = ref(false);

  const dataPokemon = ref({});
  const statsPokemon = ref({});
  const pokemonTypes = ref([]);
  const isShiny = ref(false);

  const openModal = (item) => {
    dataPokemon.value = item;
    isShiny.value = false;
    isOpen.value = !isOpen.value;
    dataPokemon.value.types.forEach((element) => {
      pokemonTypes.value.push(element.type.name);
    });
  };

  const closeModal = () => {
    isOpen.value = !isOpen.value;
  };
  return {
    closeModal,
    openModal,
    isOpen,
    dataPokemon,
    statsPokemon,
    pokemonTypes,
    isShiny,
  };
});
