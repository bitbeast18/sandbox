<template>
  <v-card light>
    <v-card-title class="ma-0 pa-0">
      <span class="ml-2">Browser Render</span>
      <v-spacer></v-spacer>
      <v-btn small class="mr-5 my-2" @click="toggleDialog">close</v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <iframe
      id="webpageshow"
      height="100%"
      width="100%"
      frameborder="2"
    ></iframe>
  </v-card>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      let doc = document.getElementById("webpageshow").contentDocument;

      let style = doc.createElement("style");
      let script = doc.createElement("script");

      doc.body.innerHTML = this.$store.state.curQuestion.files[0].model.getValue();

      style.innerHTML = this.$store.state.curQuestion.files[1].model.getValue();

      script.innerHTML = this.$store.state.curQuestion.files[2].model.getValue();

      doc.body.appendChild(style);
      doc.body.appendChild(script);
    });
  },

  methods: {
    toggleDialog: function() {
      this.$store.commit("toggleWebDialogState");
    }
  }
};
</script>

<style>
#webpageshow {
  height: calc(100vh - 50px);
}
</style>
