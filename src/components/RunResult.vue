<template>
  <v-card>
    <v-card-title>
      <p>Execution Result</p>
      <v-spacer></v-spacer>
      <v-btn @click="toggleDialog">close</v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row align="center" justify="start">
        <v-col class="shrink" v-for="(t, i) in testcases" :key="i">
          <v-chip color="t.color"> Testsase {{ i + 1 }} </v-chip>
        </v-col>
      </v-row>
      <v-textarea hide-details no-resize rows="8" background-color="black">
      </v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    testcases() {
      return [{ color: "error" }, { color: "success" }];
      // return this.$store.curQuestion.testcases;
    }
  },

  methods: {
    toggleDialog: function() {
      this.$store.commit("toggleRunDialogState");
    }
  }
};
</script>
