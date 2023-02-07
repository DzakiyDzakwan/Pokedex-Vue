import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore({ id: "modal" }, () => {
  const isOpen = ref(false);

  const dataModal = ref({});

  const openModal = (item) => {
    dataModal.value = item;
    isOpen.value = !isOpen.value;
  };

  const closeModal = () => {
    isOpen.value = !isOpen.value;
  };
  return {
    isOpen,
    closeModal,
    openModal,
    dataModal,
  };
});
