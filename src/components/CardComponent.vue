<template>
  <div class="card col-span-6 md:col-span-3">
    <div class="card-header">
      <h4 class="text-subheading-small md:text-subheading-medium">
        #000{{ pokemon.id }}
      </h4>
      <h2 class="text-heading-small md:text-heading-medium">
        {{ pokemon.name }}
      </h2>
    </div>
    <div
      class="card-body relative"
      @mouseenter="hoverCard = !hoverCard"
      @mouseleave="hoverCard = !hoverCard"
    >
      <div
        :class="[
          { 'blur-sm': hoverCard },
          'image-container items-center justify-center',
        ]"
      >
        <img class="image-card" :src="pokemon.sprites.front_default" alt="" />
      </div>

      <Transition name="slidein" v-show="hoverCard">
        <div class="absolute top-0 right-0 w-full h-full flex items-center">
          <ButtonComponent label="See Detail" addClass="m-auto" />
        </div>
      </Transition>
    </div>
  </div>
</template>
<script>
import ButtonComponent from "@/components/ButtonComponent";
import { ref } from "vue-demi";
export default {
  name: "CardComponent",
  props: ["pokemon"],
  components: {
    ButtonComponent,
  },
  setup() {
    const hoverCard = ref(false);
    return {
      hoverCard,
    };
  },
};
</script>

<style scoped>
.slidein-enter-active {
  transition: all 0.2s ease-out;
}

.slidein-leave-active {
  transition: all 0.2s ease-in;
}

.slidein-enter-from,
.slidein-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
