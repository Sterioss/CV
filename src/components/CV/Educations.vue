<template>
  <div class="education group">
    <div class="heading"><h2 class="text-center">Education</h2></div>
    <Education
      v-for="education in educations"
      :key="education.id"
      :name="education.name"
      :location="education.location"
      :interval="education.interval"
      :description="education.description"
    />
  </div>
</template>

<script>
import Education from "./parts/Education";
export default {
  name: "Educations",
  components: { Education },
  data: function() {
    return {
      educations: [
        {
          id: 1,
          name: "High School",
          location: "Lycée Lucien Herr, Altkirch 68130",
          interval: { start: "09/2012", end: "05/2015" },
          description:
            "\n" +
            "              BAC S - SI : Engineering Science with option ISN (Computer Science and\n" +
            "              Digital Science)\n" +
            "          "
        },
        {
          id: 2,
          name: "License Professionnelle Informatique",
          location: "UHA 4.0, Mulhouse 68200",
          interval: { start: "09/2018", end: "Today" },
          description:
            "\n" +
            "        Learning practical knowledge through enterprise projects. Learning\n" +
            "        theorical knowledge on need.\n" +
            "      "
        }
      ]
    };
  }
};
</script>

<style scoped></style>
