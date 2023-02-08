<template>
  <teleport to="body">
    <div
      :class="`modal-container overflow-hidden ${
        modal.isOpen ? 'flex' : 'hidden'
      }`"
    >
      <Transition name="showIn">
        <div class="modal" v-show="modal.isOpen">
          <div class="card-header flex items-center justify-end">
            <mdicon
              size="24"
              name="close"
              class="cursor-pointer"
              @click="$emit('closeModal')"
            />
          </div>
          <div class="card-content mt-6 mx-24">
            <div class="modal-title text-center">
              <h4 class="text-subheading-medium">
                #{{ modal.dataPokemon.id }}
              </h4>
              <h2 class="text-heading-large">{{ modal.dataPokemon.name }}</h2>
            </div>
            <div class="modal-image flex items-center justify-center">
              <img
                :src="modal.dataPokemon.sprites.front_default"
                :alt="modal.dataPokemon.name"
                class="w-[128px] h-[128px]"
              />
            </div>
            <div class="flex justify-center items-center py-2">
              <div
                class="bg-red-500 text-white py-1 px-2 rounded-lg text-subheading-medium"
              >
                Default
              </div>
              <div
                class="cursor-pointer py-1 px-2 rounded-lg text-subheading-medium"
              >
                Shiny
              </div>
            </div>

            <div class="py-2">
              <div class="flex gap-4 mb-1">
                <div class="text-center">
                  <h4 class="text-subheading-medium">Height</h4>
                  <p class="text-large">{{ modal.dataPokemon.height }}</p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-medium">Weight</h4>
                  <p class="text-large">{{ modal.dataPokemon.weight }}</p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-medium">Health</h4>
                  <p class="text-large"></p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-medium">Attack</h4>
                  <p class="text-large">7</p>
                </div>
              </div>
              <div class="flex gap-4 mt-1">
                <div class="text-center">
                  <h4 class="text-subheading-medium">Defense</h4>
                  <p class="text-large">7</p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-medium">Speed</h4>
                  <p class="text-large">7</p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-medium">SpAtk</h4>
                  <p class="text-large">7</p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-medium">Spdef</h4>
                  <p class="text-large">7</p>
                </div>
              </div>
            </div>

            <div class="hidden items-center justify-center gap-1 py-2">
              <div
                class="rounded-xl bg-green-500 py-1 px-6 text-subheading-medium text-white"
              >
                Grass
              </div>
              <div
                class="rounded-xl bg-purple-600 py-1 px-6 text-subheading-medium text-white"
              >
                Poison
              </div>
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
