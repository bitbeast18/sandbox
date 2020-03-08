<template>
  <v-card light>
    <v-card-title class="ma-0 pa-0">
      <span class="ml-2">Browser Render</span>
      <v-spacer></v-spacer>
      <v-btn small class="mr-5 my-2" @click="toggleDialog">close</v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <div id="webpageshow">
      <iframe
        height="100%"
        width="100%"
        frameborder="3"
        :srcdoc="index"
      ></iframe>
    </div>
  </v-card>
</template>

<script>
export default {
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
  height: calc(100vh - 49px);
}
</style>
