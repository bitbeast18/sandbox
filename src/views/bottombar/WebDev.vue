<template>
  <div>
    <v-btn
      class="ml-4"
      outlined
      color="success"
      large
      width="150px"
      rounded
      @click="render"
      >render page</v-btn
    >

    <v-dialog
      persistent
      v-model="webDialog"
      style="overflow:hidden!important"
      fullscreen
    >
      <WebResult></WebResult>
    </v-dialog>

    <v-btn
      class="ml-4 success"
      large
      width="150px"
      :loading="submitLoader"
      rounded
      @click="submit"
      >submit code</v-btn
    >
  </div>
</template>

<script>
import WebResult from "@/components/WebResult.vue";

export default {
  components: {
    WebResult
  },

  computed: {
    webDialog: {
      get() {
        return this.$store.state.webDialogState;
      },
      set() {
        this.$store.commit("toggleWebDialogState");
      }
    },
    submitLoader() {
      return this.$store.state.submitLoader;
    }
  },

  methods: {
    render: function() {
      this.$store.state.fileManager.saveFile(this.$store.state.curQuestion);

      if (document.getElementById("webpageshow")) {
        let doc = document.getElementById("webpageshow").contentDocument;

        let style = doc.createElement("style");
        let script = doc.createElement("script");

        doc.body.innerHTML = this.$store.state.curQuestion.files[0].model.getValue();

        style.innerHTML = this.$store.state.curQuestion.files[1].model.getValue();

        script.innerHTML = this.$store.state.curQuestion.files[2].model.getValue();

        doc.body.appendChild(style);
        doc.body.appendChild(script);
      }

      this.$store.commit("toggleWebDialogState");
    },
    submit: function() {
      this.$store.dispatch("submitTask", "WebDev");
    }
  }
};
</script>
