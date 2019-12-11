<template>
  <main class="page lanidng-page">
    <Home />
    <SpecialSkills />
  </main>
</template>

<script>
const Home = () => import("./Main/Home");
const SpecialSkills = () => import("./Main/SpecialSkills");
export default {
  name: "Main",
  components: { SpecialSkills, Home }
};
</script>

<style scoped />
