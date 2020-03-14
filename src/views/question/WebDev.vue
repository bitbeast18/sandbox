<template>
  <v-card flat class="centerElem fill-height">
    <v-card-title> Question {{ idx }}</v-card-title>
    <v-card-text>
      <v-divider></v-divider>

      <v-subheader class="pa-1"> Statement </v-subheader>
      <pre> {{ statement }} </pre>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    statement() {
      return this.$store.state.curQuestion.statement;
    },
    idx() {
      return this.$store.state.curQuestionIdx + 1;
    }
  }
};
</script>

<style>
pre {
  white-space: pre-line;
  word-break: keep-all;
}
</style>
