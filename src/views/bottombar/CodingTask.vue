<template>
  <div>
    <v-btn class="ml-4" outlined color="success" large width="150px" rounded
      >run code</v-btn
    >
    <v-btn class="ml-4 success" large width="150px" rounded>submit code</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    run: function() {
      console.log("running code...");
    },
    submit: function() {
      console.log("Submitting...");
    }
  }
};
</script>
