<template>
  <div class="row">
    <div class="col-1">
      <IconLoader :icon="icon" class="icon" />
    </div>
    <div class="col-9">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
import IconLoader from "../../Utils/IconLoader";
export default {
  name: "Info",
  components: { IconLoader },
  props: {
    icon: String,
    text: String
  }
};
</script>

<style scoped>
span {
  font-weight: 300;
}

.icon {
  height: 1.3em;
  width: 20px;
  fill: #6091ef;
  position: relative;
  bottom: 4px;
}
</style>
