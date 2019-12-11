<template>
  <p class="text-center text-muted">
    <IconLoader :icon="icon" class="icon" /> {{ text }}
  </p>
</template>

<script>
// eslint-disable-next-line no-console
import IconLoader from "../../Utils/IconLoader";
export default {
  name: "Hobby",
  components: { IconLoader },
  props: {
    icon: String,
    text: String
  }
};
</script>

<!--<style scoped></style>-->
