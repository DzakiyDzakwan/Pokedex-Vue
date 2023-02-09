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
          <div class="card-content md:mt-6 mx-10 md:mx-24">
            <div class="modal-title text-center">
              <h4 class="text-subheading-small md:text-subheading-medium">
                #{{ modal.dataPokemon.id }}
              </h4>
              <h2 class="text-heading-medium md:text-heading-large">
                {{ modal.dataPokemon.name }}
              </h2>
            </div>
            <div class="flex items-center justify-center">
              <img
                :src="
                  modal.isShiny
                    ? modal.dataPokemon.sprites.front_shiny
                    : modal.dataPokemon.sprites.front_default
                "
                :alt="modal.dataPokemon.name"
                class="w-[96px] h-[96px] md:w-[128px] md:h-[128px]"
              />
            </div>
            <div class="flex justify-center items-center py-1 md:py-2">
              <div
                :class="`${isDefault} py-1 px-2 rounded-lg text-subheading-small md:text-subheading-medium`"
                @click="switchDefault"
              >
                Default
              </div>
              <div
                :class="`${isShiny} py-1 px-2 rounded-lg text-subheading-small md:text-subheading-medium`"
                @click="switchShiny"
              >
                Shiny
              </div>
            </div>

            <div class="py-1 md:py-2">
              <div class="flex gap-4 mb-1">
                <div class="text-center">
                  <h4 class="text-subheading-small md:text-subheading-medium">
                    Height
                  </h4>
                  <p class="text-medium md:text-large">
                    {{ modal.dataPokemon.height }}
                  </p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-small md:text-subheading-medium">
                    Weight
                  </h4>
                  <p class="text-medium md:text-large">
                    {{ modal.dataPokemon.weight }}
                  </p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-small md:text-subheading-medium">
                    Health
                  </h4>
                  <p class="text-medium md:text-large">
                    {{ modal.dataPokemon.stats[0].base_stat }}
                  </p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-small md:text-subheading-medium">
                    Attack
                  </h4>
                  <p class="text-medium md:text-large">
                    {{ modal.dataPokemon.stats[1].base_stat }}
                  </p>
                </div>
              </div>
              <div class="flex gap-4 mt-1">
                <div class="text-center">
                  <h4 class="text-subheading-small md:text-subheading-medium">
                    Defense
                  </h4>
                  <p class="text-medium md:text-large">
                    {{ modal.dataPokemon.stats[2].base_stat }}
                  </p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-small md:text-subheading-medium">
                    SpAtk
                  </h4>
                  <p class="text-medium md:text-large">
                    {{ modal.dataPokemon.stats[3].base_stat }}
                  </p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-small md:text-subheading-medium">
                    Spdef
                  </h4>
                  <p class="text-medium md:text-large">
                    {{ modal.dataPokemon.stats[4].base_stat }}
                  </p>
                </div>
                <div class="text-center">
                  <h4 class="text-subheading-small md:text-subheading-medium">
                    Speed
                  </h4>
                  <p class="text-medium md:text-large">
                    {{ modal.dataPokemon.stats[5].base_stat }}
                  </p>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center gap-1 py-2">
              <div
                v-for="(pokemon, index) in modal.dataPokemon.types"
                :key="index"
                class="rounded-xl py-1 px-6 text-subheading-small md:text-subheading-medium bg-slate-700 text-white"
              >
                {{
                  pokemon.type.name[0].toUpperCase() +
                  pokemon.type.name.slice(1)
                }}
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
  methods: {
    switchDefault() {
      if (this.modal.isShiny) this.modal.isShiny = !this.modal.isShiny;
      console.log("Default");
    },
    switchShiny() {
      if (!this.modal.isShiny) this.modal.isShiny = !this.modal.isShiny;
      console.log("Shiny");
    },
  },
  computed: {
    isShiny() {
      return this.modal.isShiny
        ? "bg-red-500 text-white"
        : "cursor-pointer hover:bg-black-200";
    },
    isDefault() {
      return this.modal.isShiny
        ? "cursor-pointer hover:bg-black-200"
        : "bg-red-500 text-white";
    },
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
