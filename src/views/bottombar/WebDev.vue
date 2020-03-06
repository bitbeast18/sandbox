<template>
  <div>
    <v-dialog persistent v-model="webDialog" fullscreen>
      <template v-slot:activator="{ on }">
        <v-btn
          class="ml-4"
          outlined
          color="success"
          large
          width="150px"
          rounded
          v-on="on"
          @click="render"
          >render page</v-btn
        >
      </template>

      <WebResult></WebResult>
    </v-dialog>

    <v-btn class="ml-4 success" large width="150px" rounded @click="submit">submit code</v-btn>
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
    }
  },

  methods: {
    render: function(){
      console.log('Running...');
    },
    submit: function() {
      console.log("Submitting...");
    }
  }
};
</script>
