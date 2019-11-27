<template>
  <div>
    <div class="col-1">
      <component :is="iconLoader"></component>
    </div>
    <div class="col-9">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    icon: String,
    text: String
  },
  computed: {
    iconLoader() {
      return () => import("vue-ionicons/dist/${this.icon}");
    }
  }
};
</script>

<style scoped></style>
