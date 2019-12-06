<template>
  <div>
    <h2>{{ name }}</h2>
    <Skill
      v-for="skill in skills"
      :key="skill.id"
      :name="skill.name"
      :percent="skill.percent"
    />
  </div>
</template>

<script>
import Skill from "./Skill";
export default {
  name: "SkillCategory",
  components: { Skill },
  props: {
    name: String,
    skills: Array
  }
};
</script>

<style scoped />
