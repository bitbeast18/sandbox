<template>
  <v-card>
    <v-card-title>
      <p>WebPage Render</p>
      <v-spacer></v-spacer>
      <v-btn @click="toggleDialog">close</v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <div id="webpageshow">
      <iframe
        height="100%"
        width="100%"
        frameborder="1"
        :srcdoc="index"
      ></iframe>
    </div>
  </v-card>
</template>

<script>
export default {
  mounted() {
    console.log("mounted...");
  },

  computed: {
    index() {
      return this.$store.state.curQuestion.files[0].model.getValue();
    }
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
  height: calc(100vh - 79px);
}
</style>
