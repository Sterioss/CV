<template>
  <div>
    <h3>{{ name }}</h3>
    <div class="progress" data-bs-hover-animate="pulse" style="height: 10px;">
      <div
        class="progress-bar progress-bar-striped"
        :class="{ 'progress-bar-animated': isHovering }"
        :aria-valuenow="percent"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: percent + '%' }"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
      >
        <span class="sr-only">{{ percent }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    name: String,
    percent: Number
  },
  data: function() {
    return {
      isHovering: false
    };
  }
};
</script>

<style scoped />
