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
      >
      </v-select>
    </v-col>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items: ['C', 'C++', 'JAVA', 'PYTHON'],
      lang: 0
    }
  }
}
</script>