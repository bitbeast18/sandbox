<template>
  <v-app app>
    <v-navigation-drawer
      :right="!isDockLeft"
      style="max-height:100vh !important"
      width="40%"
      app
    >
      <NavContent></NavContent>
    </v-navigation-drawer>

    <AppBar></AppBar>

    <v-content app>
      <router-view name="answer" :key="getKey"></router-view>
    </v-content>

    <BottomBar></BottomBar>

    <v-dialog v-model="dialogState" max-width="600">
      <v-card>
        <v-card-title>Error !</v-card-title>
        <v-card-text class="pb-1">{{ message }}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small class="mr-2 mb-2" @click="toggleErrorDialog"
            >close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import NavContent from "@/components/NavContent.vue";
import AppBar from "@/components/AppBar.vue";
import BottomBar from "@/components/BottomBar.vue";
import { ipcRenderer } from "electron";

const { remote } = require("electron");

export default {
  mounted() {
    let win = remote.getCurrentWindow();

    win.on("blur", ev => {
      if (this.$store.state.session) {
        ev.preventDefault();
        this.$store.commit(
          "displayErrorMessage",
          "Please do not switch tabs! Test will end automatically."
        );
        win.focus();
      }
    });

    ipcRenderer.on("closeWindowAttempt", () => {
      this.$store.commit("displayErrorMessage", "Click on 'End Test' to exit.");
    });

    ipcRenderer.on("InvalidKey", () => {
      this.$store.commit(
        "displayErrorMessage",
        "Keyboard shortcuts are disabled. Please do not use them."
      );
    });
  },

  components: {
    NavContent,
    AppBar,
    BottomBar
  },

  computed: {
    isDockLeft() {
      return this.$store.state.isDockLeft;
    },
    getKey() {
      return this.$store.state.curQuestionIdx;
    },
    message() {
      return this.$store.state.errorMessage;
    },
    dialogState: {
      get() {
        return this.$store.state.errorDialogState;
      },
      set() {
        this.$store.commit("toggleErrorDialogState");
      }
    }
  },

  methods: {
    toggleErrorDialog() {
      this.$store.commit("toggleErrorDialogState");
    }
  }
};
</script>
