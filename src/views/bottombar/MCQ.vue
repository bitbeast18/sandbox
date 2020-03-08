<template>
  <div>
    <v-btn
      class="ml-4 success"
      large
      :loading="submitLoader"
      width="150px"
      rounded
      >save</v-btn
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
    save: function() {
      this.$store.dispatch("submitTask", "MCQ");
    }
  }
};
</script>
