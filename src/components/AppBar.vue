<template>
  <v-app-bar
    flat
    elevation="1"
    :class="{ grey: !darkmode, 'lighten-1': !darkmode }"
    app
  >
    <router-view name="appbar" :key="getKey"></router-view>
    <v-spacer></v-spacer>
    <v-btn
      large
      rounded
      class="error"
      :loading="endTestLoader"
      width="180px"
      @click="endTest"
      >end test</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    endTest: function() {
      this.$store.dispatch("endTest");
    }
  },
  computed: {
    darkmode() {
      return this.$store.state.isDarkTheme;
    },
    getKey() {
      return this.$store.state.curQuestionIdx;
    },
    endTestLoader() {
      return this.$store.state.endTestLoader;
    }
  }
};
</script>
