<template>
  <p class="text-muted">
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
