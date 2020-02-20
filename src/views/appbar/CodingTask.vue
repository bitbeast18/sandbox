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
        v-model="lang"
      ></v-select>
    </v-col>
  </div>
</template>

<script>

export default {

  mounted(){
    this.lang = this.items[0];
  },
  
  data() {
    return {
      lang: 0
    };
  },

  computed: {
    items() {
      const lang = this.$store.state.curQuestion.lang;

      if(lang === 'any'){
        return ["C", "C++", "JAVA", "PYTHON"];
      } else {
        return [lang];
      }

    }
  }
};
</script>