<template>
  <div class="contact-info portfolio-info-card">
    <h2>Contact Info</h2>
    <div v-bind:key="info.id" v-for="info in infos" class="row">
      <info :icon="info.icon" :text="info.text"></info>
    </div>
  </div>
</template>

<script>
import Info from "./Info";
export default {
  name: "Contact",
  components: { Info },
  data: function() {
    return {
      infos: [{ id: 1, icon: "ios-calendar", text: "31/07/1996" }]
    };
  }
};
</script>

<style scoped></style>
