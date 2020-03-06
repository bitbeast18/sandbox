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
        item-text="name"
        v-model="file"
        return-object
        single-line
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
    file: {
      get(){
        return this.$store.state.curQuestion.curFile;
      },
      set(obj){
        this.$store.commit.setWebDevCurFile(obj);
      }
    }
  }
};
</script>
