<template>
  <div>
    <v-btn
      class="ml-4 success"
      @click="submit"
      :loading="submitLoader"
      large
      rounded
      >submit notebook</v-btn
    >
  </div>
</template>

<script>
export default {
  computed: {
    submitLoader() {
      return this.$store.state.submitLoader;
    }
  },
  methods: {
    submit: function() {
      this.$store.dispatch("submitTask", "ML");
    }
  }
};
</script>
