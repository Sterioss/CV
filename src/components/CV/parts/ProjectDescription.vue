<template>
  <p class="text-muted" v-html="description">
    {{ description }}
  </p>
</template>

<script>
export default {
  name: "ProjectDescription",
  props: {
    description: String
  }
};
</script>

<style scoped></style>
