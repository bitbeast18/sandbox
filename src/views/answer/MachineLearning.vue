<template>
  <iframe id="notebook" height="100%" width="100%" :src="notebookPath"></iframe>
</template>

<script>
export default {
  computed: {
    notebookPath() {
      return "http://localhost:10301/tree/test.ipynb";
      // return this.$store.state.curQuestion.addr;
    }
  }
};
</script>
