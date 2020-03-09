<template>
  <div>
    <router-view></router-view>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>Error !</v-card-title>
        <v-card-text class="pb-1">{{message}}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small class="mr-2 mb-2" @click="dialog = !dialog">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
const { BrowserWindow } = require("electron").remote;

export default {
  created() {
    this.$store.commit("initStore");
  },
  mounted() {
    let win = BrowserWindow.getFocusedWindow();

    win.on("blur", ev => {
      if (this.$store.state.session) {
        ev.preventDefault();
        this.message =
          "Please do not switch window! Test will automatically end.";
        this.dialog = true;
        win.focus();
      }
    });

    ipcRenderer.on("windowCloseAttempt", () => {
      if (this.$store.state.session) {
        this.message = "Please click 'End Test' to exit.";
        this.dialog = true;
      } else {
        ipcRenderer.send('closeWindow');
      }
    });

    ipcRenderer.on("InvalidKey", () => {
      this.message = "Keyboard shortcuts are disabled. Please do not repeat!";
      this.dialog = true;
    });
  },
  data() {
    return {
      dialog: false,
      message: ""
    };
  }
};
</script>
