<template>
  <div class="contact-info portfolio-info-card">
    <h2>Contact Info</h2>
    <info
      :icon="info.icon"
      v-bind:key="info.id"
      v-for="info in infos"
      :text="info.text"
    />
  </div>
</template>

<script>
import Info from "./Info";
export default {
  name: "Contact",
  components: { Info },
  data: function() {
    return {
      infos: [
        { id: 1, icon: "ios-calendar", text: "31/07/1996" },
        { id: 2, icon: "ios-person", text: "Thomas Tosch" },
        { id: 3, icon: "ios-phone-portrait", text: "+33 6 06 96 07 31" },
        { id: 4, icon: "ios-at", text: "thomas.tosch@outlook.fr" }
      ]
    };
  }
};
</script>

<!--<style scoped></style>-->
