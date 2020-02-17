<template>
  <div>
    <v-btn class="ml-4 success" @click="submit" large rounded>submit notebook</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    submit: function(){
      console.log("Submitting...");
    }

  }
}
</script>