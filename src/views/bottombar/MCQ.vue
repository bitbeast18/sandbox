<template>
  <div>
    <v-btn class="ml-4 success" large width="150px" rounded>save</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    save: function() {
      console.log("Saving...");
    }
  }
};
</script>
