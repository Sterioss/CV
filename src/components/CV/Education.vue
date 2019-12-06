<template>
  <div class="item">
    <div class="row">
      <div class="col-md-6">
        <h3>{{ name }}</h3>
        <h4 class="organization">{{ location }}</h4>
      </div>
      <div class="col-6">
        <span class="period">{{ interval.start }} - {{ interval.end }}</span>
      </div>
    </div>
    <p class="text-muted">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Education",
  props: {
    name: String,
    location: String,
    interval: Object,
    description: String
  }
};
</script>

<style scoped />
