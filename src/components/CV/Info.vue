<template>
  <div class="row">
    <div class="col-1">
      <component :is="this.icon + '-icon'" rootClass="icon" />
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
