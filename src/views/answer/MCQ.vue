<template>
  <v-container>
    <v-radio-group v-model="answer">
      <v-row v-for="(item, idx) in items" :key="idx">
        <v-col>
          <v-card
            ><v-card-title>
              <v-radio :label="item" :value="idx"></v-radio> </v-card-title
          ></v-card>
        </v-col>
      </v-row>
    </v-radio-group>
  </v-container>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.curQuestion.op;
    },
    statement() {
      return this.$store.state.curQuestion.problemStatement;
    },
    answer: {
      get() {
        return this.$store.state.curQuestion.answer.option;
      },
      set(newVal) {
        this.$store.commit("updateMCQ", newVal);
      }
    }
  }
};
</script>
