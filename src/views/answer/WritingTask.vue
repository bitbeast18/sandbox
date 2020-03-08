<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-subtitle>Write your answer below</v-card-subtitle>
          <v-card-text>
            <v-textarea
              outlined
              no-resize
              filled
              counter
              rows="20"
              class="tester"
              v-model="answer"
            ></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    answer: {
      get() {
        return this.$store.state.curQuestion.answer;
      },
      set(newVal) {
        this.$store.commit("updateWritingTask", newVal);
      }
    }
  }
};
</script>

<style></style>
