<template>
  <p class="text-center text-muted">
    <component :is="this.icon + '-icon'" rootClass="icon" /> {{ text }}
  </p>
</template>

<script>
// eslint-disable-next-line no-console
export default {
  name: "Hobby",
  props: {
    icon: String,
    text: String
  }
};
</script>

<!--<style scoped></style>-->
