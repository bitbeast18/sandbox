<template>
  <div>
    <v-btn
      class="ml-4"
      outlined
      color="success"
      large
      width="150px"
      :loading="runCodeLoader"
      rounded
      @click="run"
      >run code</v-btn
    >

    <v-btn
      class="ml-4 success"
      large
      width="150px"
      :loading="submitLoader"
      rounded
      @click="submit"
      >submit code</v-btn
    >

    <v-dialog persistent v-model="runDialog" width="1000">
      <RunResult></RunResult>
    </v-dialog>
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
    },
    runCodeLoader() {
      return this.$store.state.runCodeLoader;
    },
    submitLoader() {
      return this.$store.state.submitLoader;
    }
  },

  methods: {
    run: function() {
      this.$store.dispatch("runCodingTask");
    },
    submit: function() {
      this.$store.dispatch("submitTask", "CodingTask");
    }
  }
};
</script>
