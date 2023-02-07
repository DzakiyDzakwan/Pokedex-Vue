<template>
  <teleport to="body">
    <div
      :class="`modal-container overflow-hidden ${
        modal.isOpen ? 'flex' : 'hidden'
      }`"
    >
      <Transition name="showIn">
        <div
          class="modal shadow-lg bg-white w-1/3 h-[50vh] rounded-xl p-4"
          v-show="modal.isOpen"
        >
          <div class="card-header flex items-center justify-end">
            <mdicon
              name="close"
              class="cursor-pointer"
              @click="$emit('closeModal')"
            />
          </div>
          <div class="card-content">
            <div class="text-center">
              <h4 class="text-subheading-medium">
                #000{{ modal.dataModal.id }}
              </h4>
              <h2 class="text-heading-large">{{ modal.dataModal.name }}</h2>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </teleport>
</template>

<script>
import { useModalStore } from "@/stores/modal";
export default {
  name: "ModalComponent",
  emits: ["closeModal"],
  setup() {
    const modal = useModalStore();
    return {
      modal,
    };
  },
};
</script>

<style scoped>
.showIn-enter-active {
  animation: popup 0.35s;
}

.showIn-leave-active {
  animation: reverse popup 0.35s;
}

@keyframes popup {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>
