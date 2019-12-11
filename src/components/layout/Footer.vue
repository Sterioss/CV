<template>
  <div class="container">
    <div class="links">
      <a href="#about">About me</a>
      <a :href="'mailto:' + this.email">Contact me</a>
    </div>
    <div class="social-icons" v-for="social in socials" :key="social.id">
      <a :href="social.link"><IconLoader :icon="social.icon" class="icon"/></a>
    </div>
  </div>
</template>

<script>
const IconLoader = () => import("../Utils/IconLoader");
export default {
  name: "Footer",
  components: { IconLoader },
  data: function() {
    return {
      email: "thomas.tosch@uha.fr",
      socials: [
        {
          id: 1,
          icon: "logo-linkedin",
          link: "https://www.linkedin.com/in/thomas-tosch-88b610153/"
        }
      ]
    };
  }
};
</script>

<!--<style scoped></style>-->
