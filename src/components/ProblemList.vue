<template>
    <v-container class="list grey lighten-2">
        <v-row align="center" justify="start">
            <v-col class="shrink" v-for="item in items" :key="item">
                <v-chip @click="setQuestion(item)" color="default">Problem {{item}}</v-chip>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    
    computed: {
        items(){
            return this.$store.state.allQuestions.length
        }
    },

    methods: {
        setQuestion: function(idx){
            this.$store.commit('setCurQuestion', idx-1);
            this.$store.dispatch('changeRoute');
        }
    }
}
</script>

<style>
    .list{
        height: 140px;
        border-top: 1px solid grey;
    }
</style>