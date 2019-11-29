<template>
  <div class="hobbies group">
    <div class="heading">
      <h2 class="text-center">Hobbies</h2>
      <Hobby
        v-for="hobby in hobbies"
        :key="hobby.id"
        :icon="hobby.icon"
        :text="hobby.text"
      />
    </div>
  </div>
</template>

<script>
import Hobby from "./Hobby";

export default {
  name: "Hobbies",
  components: { Hobby },
  data: function() {
    return {
      hobbies: [
        {
          id: 1,
          icon: "ios-musical-notes",
          text:
            "I do piano on my free-time. I've been practicing for over a year now"
        },
        {
          id: 2,
          icon: "ios-walk",
          text:
            "I used to go running 3 times a week for years, now I go to the gym."
        },
        {
          id: 3,
          icon: "ios-code",
          text:
            "I code for fun on platforms like Codingame.com. When I have time I pick up on projects of my own as well."
        }
      ]
    };
  }
};
</script>

<!--<style scoped></style>-->
