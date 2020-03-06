<template>
  <div>
    <v-col class="ma-0 pa-0" cols="8">
      <v-select
        dense
        rounded
        hide-details
        filled
        placeholder="Select File"
        :items="items"
        v-model="file"
      ></v-select>
    </v-col>
  </div>
</template>

<script>
export default {
  mounted() {
    this.file = this.items[0];
  },

  data() {
    return {
      file: null
    };
  },

  computed: {
    items() {
      return ['HTML.html', 'CSS.css', 'JAVASCRIPT.js'];
    }
  }
};
</script>
