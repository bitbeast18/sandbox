<template>
  <v-app-bar flat elevation="1" class="grey lighten-2" bottom width="60%" app>
    <v-btn rounded large outlined>
      <v-icon>{{icons.mdiArrowUp}}</v-icon>
      <span class="ml-2"> settings </span>
    </v-btn>
    <v-spacer></v-spacer>
    <router-view name="bottombar"></router-view>
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
};
</script>