<template>
  <div>
    <v-dialog persistent v-model="runDialog" width="1000">
      <template v-slot:activator="{ on }">
        <v-btn
          class="ml-4"
          outlined
          color="success"
          large
          width="150px"
          rounded
          v-on="on"
          @click="run"
          >run code</v-btn
        >
      </template>

      <RunResult></RunResult>
    </v-dialog>

    <v-btn class="ml-4 success" large width="150px" rounded @click="submit"
      >submit code</v-btn
    >
  </div>
</template>

<script>
import RunResult from "@/components/RunResult.vue";

export default {
  components: {
    RunResult
  },

  computed: {
    runDialog: {
      get() {
        return this.$store.state.runDialogState;
      },
      set() {
        this.$store.commit("toggleRunDialogState");
      }
    }
  },

  methods: {
    run: function() {
      console.log("Running...");
    },
    submit: function() {
      console.log("Submitting...");
    }
  }
};
</script>
