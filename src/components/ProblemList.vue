<template>
    <v-container :class="{'grey': !darkmode, 'lighten-1': !darkmode, 'list':true}">
        <v-row align="center" justify="start">
            <v-col class="shrink" v-for="(item, idx) in items" :key="idx">
                <v-chip @click="setQuestion(idx)" :color="item.color">Q{{idx+1}}</v-chip>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    
    computed: {
        items(){
            return this.$store.state.allQuestions;
        },
        darkmode(){
            return this.$store.state.isDarkTheme;
        },
    },

    methods: {
        setQuestion: function(idx){
            this.$store.commit('setCurQuestion', idx-1);
            this.$store.dispatch('changeRoute');
        },
    }
}
</script>

<style>
    .list{
        height: 140px;
        border-top: 1px solid grey;
    }
</style>