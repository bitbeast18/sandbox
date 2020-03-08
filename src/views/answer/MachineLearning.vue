<template>
  <iframe
    id="notebook"
    frameborder="0"
    height="100%"
    width="100%"
    :src="notebookPath"
  ></iframe>
</template>

<script>
export default {
  computed: {
    notebookPath() {
      console.log(
        "http://localhost:10301/tree/" + this.$store.state.curQuestion.addr.rel
      );
      return (
        "http://localhost:10301/tree/" + this.$store.state.curQuestion.addr.rel
      );
    }
  }
};
</script>
