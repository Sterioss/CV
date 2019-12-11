<template>
  <component :is="iconLoad" />
</template>

<script>
export default {
  name: "IconLoader",
  props: {
    icon: String
  },
  computed: {
    iconLoad() {
      return () =>
        import(
          /* webpackChunkName: "icons" */
          /* webpackMode: "lazy-once" */
          `vue-ionicons/dist/` + this.icon + ".vue"
        );
    }
  }
};
</script>

<style scoped />
