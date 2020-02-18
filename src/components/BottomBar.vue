<template>
  <v-app-bar flat elevation="1" :class="{'grey': !darkmode, 'lighten-2': !darkmode}" bottom width="60%" app>
    <v-menu v-model="menutarget">
      <template v-slot:activator="{on}">
        <v-btn v-on="on" rounded large outlined>
          <v-icon>{{icons.mdiArrowUp}}</v-icon>
          <span class="ml-2">settings</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-switch v-model="darkmode" label="Enable dark mode"></v-switch>
        </v-list-item>

        <v-list-item>
          <v-switch v-model="dockpos" label="Dock to the left"></v-switch>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn small class="ml-2" fab outlined>
      <v-icon>{{icons.mdiBookmark}}</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <router-view name="bottombar"></router-view>
  </v-app-bar>
</template>

<script>
import { mdiArrowUp, mdiBookmark } from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        mdiArrowUp,
        mdiBookmark
      }
    };
  },

  computed: {

    darkmode: {
      get(){
        return this.$store.state.isDarkTheme;
      },
      set(newValue){
        this.$store.state.isDarkTheme = newValue;
        this.$vuetify.theme.dark = newValue;
      }
    },

    dockpos: {
      get(){
        return this.$store.state.isDockLeft;
      },
      set(newValue){
        console.log(newValue);
        this.$store.state.isDockLeft = newValue;
      }
    }

  }
};
</script>