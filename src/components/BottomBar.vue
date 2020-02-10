<template>
  <v-app-bar flat elevation="1" class="grey lighten-2" :value="session" bottom width="60%" app>
    <v-btn rounded large outlined>
      <v-icon>{{icons.mdiArrowUp}}</v-icon>
      <span class="ml-2"> settings </span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn class="ml-4" outlined color="success" large width="150px" rounded>run code</v-btn>
    <v-btn class="ml-4 success" large width="150px" rounded>submit code</v-btn>
  </v-app-bar>
</template>

<script>
import { mdiArrowUp } from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        mdiArrowUp
      }
    };
  },
  computed: {
    session: function() {
      return this.$store.state.session;
    }
  }
};
</script>