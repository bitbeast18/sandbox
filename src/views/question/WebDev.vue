<template>
  <v-card flat class="centerElem fill-height">
    <v-card-title> Question {{ idx }}</v-card-title>
    <v-card-text>
      <v-divider></v-divider>

      <v-subheader class="pa-1"> Statement </v-subheader>
      <pre> {{ statement }} </pre>

      <v-divider></v-divider>

      <v-subheader class="pa-1"> Assets path </v-subheader>

      <pre> CSS File Path : <br/> {{cssPath}} </pre> <br/>
      <pre> JS File Path : <br/> {{jsPath}} </pre> <br/>

      <v-divider></v-divider>

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
    },
    cssPath(){
      return 'file://' + this.$store.state.curQuestion.files[1].addr;
    },
    jsPath(){
      return 'file://' + this.$store.state.curQuestion.files[2].addr;
    }
  }
};
</script>
