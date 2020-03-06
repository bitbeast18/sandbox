<template>
  <div>
    <v-col class="ma-0 pa-0" cols="8">
      <v-select
        dense
        rounded
        hide-details
        filled
        placeholder="Language"
        :items="items"
        item-text="name"
        v-model="lang"
        return-object
      ></v-select>
    </v-col>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.curQuestion.files;
    },
    lang: {
      get() {
        return this.$store.state.curQuestion.curFile;
      },
      set(newVal) {
        this.$store.commit("setCodingTaskCurFile", newVal);
      }
    }
  }
};
</script>
