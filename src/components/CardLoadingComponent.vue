<template>
  <div class="card col-span-6 md:col-span-3">
    <div class="card-header">
      <div class="flex gap-2 items-center">
        <h4 class="text-subheading-small md:text-subheading-medium">Loading</h4>
        <mdicon name="dots-circle" spin :size="18" />
      </div>
      <div class="flex gap-2 items-center">
        <h2 class="text-heading-small md:text-heading-medium">Loading</h2>
        <mdicon name="dots-circle" spin :size="22" />
      </div>
    </div>
    <div class="card-body relative">
      <div class="image-container items-center justify-center">
        <div class="image-card img-loading"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardComponent",
  props: ["pokemon"],
  components: {},
  setup() {
    return {};
  },
};
</script>

<style></style>
