<template>
  <div class="row mt-5">
    <div class="col-md-12 col-xl-10 offset-xl-3 mx-auto">
      <div class="text-center skills portfolio-info-card mt-5">
        <h1>Skills</h1>
        <div class="row mb-3">
          <div class="col">
            <SkillCategory name="Front-end" :skills="skills['Front-end']" />
          </div>
          <div class="col">
            <SkillCategory name="Back-end" :skills="skills['Back-end']" />
          </div>
        </div>
        <SkillCategory :name="Software" :skills="skills.Software" />
        <SkillCategory :name="Others" :skills="skills.Others" />
      </div>
    </div>
  </div>
</template>

<script>
import SkillCategory from "./SkillCategory";
export default {
  name: "Skills",
  components: { SkillCategory },
  data: function() {
    return {
      skills: {
        "Front-end": [
          { id: 1, name: "HTML", percent: 85 },
          { id: 2, name: "JavaScript", percent: 75 },
          { id: 3, name: "Angular, React", percent: 65 }
        ],
        "Back-end": [
          { id: 1, name: "PHP", percent: 95 },
          { id: 2, name: "Symfony 4", percent: 85 },
          { id: 3, name: "Relational Database (MySql, Postresql)", percent: 85 }
        ],
        Software: [
          { id: 1, name: "Python", percent: 65 },
          { id: 2, name: "Java", percent: 45 }
        ],
        Others: [{ id: 1, name: "Leading Scrum projects", percent: 70 }]
      }
    };
  }
};
</script>

<style scoped />
