import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore({ id: "modal" }, () => {
  const isOpen = ref(false);

  const dataPokemon = ref({});

  const statsPokemon = ref({});

  const openModal = (item) => {
    dataPokemon.value = item;
    isOpen.value = !isOpen.value;
  };

  const closeModal = () => {
    isOpen.value = !isOpen.value;
  };
  return {
    isOpen,
    closeModal,
    openModal,
    dataPokemon,
    statsPokemon,
  };
});
