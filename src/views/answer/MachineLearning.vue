<template>
  <webview id="notebook" :src="notebookPath" :preload="preloadPath"> </webview>
</template>

<script>
import configManager from "@/utils/ConfigManager";

export default {
  mounted() {
    let nb = document.getElementById("notebook");

    nb.addEventListener("dom-ready", () => {
      nb.insertCSS(`
        .container {
          width: 100%!important;
        }

        button[title="open the command palette"] {
          display: none;
        }
      `);

      nb.send("removeElement", "header-container");
      nb.send("removeElement", "menubar");
      nb.send("removeButton", 'button[title="open the command palette"]');
    });
  },

  beforeRouteLeave(to, from, next) {
    // save the notebook before leaving.
    this.$el.send("saveNotebook");
    next();
  },

  computed: {
    notebookPath() {
      return (
        "http://localhost:4321/tree/" + this.$store.state.curQuestion.addr.rel
      );
    },
    preloadPath() {
      return configManager.getNotebookPreload();
    }
  }
};
</script>

<style>
#notebook {
  height: 100%;
}
</style>
