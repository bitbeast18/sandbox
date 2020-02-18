<template>
  <v-app-bar
    flat
    elevation="1"
    :class="{'grey': !darkmode, 'lighten-2': !darkmode}"
    :value="session"
    app
  >
    <router-view name="appbar"></router-view>
    <v-spacer></v-spacer>
    <v-btn large rounded class="error" width="180px" @click="endTest">end test</v-btn>
  </v-app-bar>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  methods: {
    endTest: function() {
      ipcRenderer.send("session-ended");
      this.$router.push("/landing");
    }
  },
  computed: {
    session: function() {
      return this.$store.state.session;
    }
  }
};
</script>

<script>
export default {
  computed: {
    darkmode() {
      return this.$store.state.isDarkTheme;
    }
  }
};
</script>
