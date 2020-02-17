<template>
  <v-app-bar flat elevation="1" class="grey lighten-2" :value="session" app>
    <v-col class="ma-0 pa-0" cols="3">
      <v-select
        dense
        rounded
        hide-details
        filled
        placeholder="Language"
        :items="items"
      >
      </v-select>
    </v-col>

    <v-spacer></v-spacer>
    <v-btn large rounded class="error" width="180px" @click="endTest">
      end test
    </v-btn>
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
  },
  data() {
    return {
      items: ["PYTHON", "JAVA", "C", "C++"]
    };
  }
};
</script>
