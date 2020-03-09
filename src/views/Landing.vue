<template>
  <v-app app>
    <v-content app>
      <v-container class="d-flex justify-center align-center fill-height">
        <v-card>
          <v-card-title class="text-center">Test Ended !</v-card-title>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  mounted() {
    ipcRenderer.on("closeWindowAttempt", () => {
      if (!this.$store.state.session) {
        ipcRenderer.send("closeWindow");
      }
    });
  }
};
</script>
