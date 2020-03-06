<template>
  <div id="editor"></div>
</template>

<script>
export default {
  mounted: function() {
    this.$store.commit("initCodeEditor");
    this.$store.state.editor.setModel(this.$store.state.curQuestion.cur_model);
  }
};
</script>

<style>
#editor {
  height: 100%;
}
</style>
