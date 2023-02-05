<template>
  <div
    :class="`btn text-subheading-medium bg-red-500 hover:bg-red-600 hover:cursor-pointer hover:shadow-lg text-white ${addClass}`"
    @click="$emit('click')"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: ["label", "addClass"],
  emits: ["click"],
  setup() {
    return {};
  },
};
</script>

<style></style>
