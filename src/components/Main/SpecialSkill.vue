<template>
  <div class="col-md-4">
    <div class="card special-skill-item border-0">
      <div class="card-header bg-transparent border-0">
        <IconLoader :icon="icon" class="icon" />
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ name }}</h3>
        <p class="card-text" v-html="text">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const IconLoader = () => import("../Utils/IconLoader");

export default {
  name: "SpecialSkill",
  components: { IconLoader },
  props: {
    icon: String,
    name: String,
    text: String
  }
};
</script>

<style scoped />
