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
          <v-chip @click="setErrArea(i)" :color="t.status">
            Testcase {{ i + 1 }}
          </v-chip>
        </v-col>
      </v-row>
      <v-divider class="mt-5"></v-divider>
      <p class="mb-0 mt-2">
        Execution Status (Click on the testcase to view corresponding status)
      </p>
      <pre class="black textBox white--text">{{ errArea }}</pre>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    testcases() {
      return this.$store.state.curQuestion.testcases;
    },
    errArea() {
      return this.$store.state.runTestCaseDialogText;
    }
  },

  methods: {
    toggleDialog: function() {
      this.$store.commit("toggleRunDialogState");
    },

    setErrArea: function(idx) {
      this.$store.commit("setErrorArea", idx);
    }
  }
};
</script>

<style>
.textBox {
  overflow: scroll;
  height: 25vh;
  resize: none;
  padding: 5px;
  border: 1px solid grey;
  outline: none;
}
</style>
