<template>
  <section class="portfolio-block skills">
    <div class="container">
      <div class="heading"><h2>Special Skills</h2></div>
      <div class="row">
        <SpecialSkill
          v-for="specialSkill in specialSkills"
          :key="specialSkill.id"
          :name="specialSkill.name"
          :icon="specialSkill.icon"
          :text="specialSkill.text"
        />
      </div>
    </div>
  </section>
</template>

<script>
const SpecialSkill = () => import("./SpecialSkill");
export default {
  name: "SpecialSkills",
  components: { SpecialSkill },
  data: function() {
    return {
      specialSkills: [
        {
          id: 1,
          icon: "ios-star-outline",
          name: "Project Management",
          text:
            "Through my experience on school projects, I've been experiencing\n" +
            "                and leading SCRUM teams. Making me a good decisions maker and\n" +
            "                able to lead teams of 4-7 people.<br />Daily meetings, Spring\n" +
            "                plannings, reviews, retrospectives...<br />\n" +
            "                I'm also experienced in documenting the whole process."
        },
        {
          id: 2,
          icon: "ios-bulb",
          name: "Deployment and Integration",
          text:
            " I'm learning new technologies as they come : Docker and\n" +
            "                Kubernetes..<br />\n" +
            "                CI/CD with Travis or Gitlab..\n" +
            "                <br />\n" +
            "                I experienced those technologies in projects."
        },
        {
          id: 3,
          icon: "ios-cog",
          name: "Constantly learning",
          text:
            " So far I know PHP, Symfony, API-Platform very well as I did 4\n" +
            "                projects using those technologies.<br />\n" +
            "                I developed REST API with Angular / React fronts as well meaning\n" +
            "                I can do well in HTML/CSS/JS/TS/JSX environments.\n" +
            "                <br />I've done few Python projects as well. <br />I'm trying to\n" +
            "                keep up with current technologies."
        }
      ]
    };
  }
};
</script>

<style scoped></style>
