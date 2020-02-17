<template>
    <v-container class="timer elevation-2 grey lighten-2 d-flex justify-space-around">
        <v-btn @click="prev" rounded>prev</v-btn>
        <div>
            <p class="display-1 font-weight-bold"> 01:45:39 </p>
        </div>
        <v-btn @click="next" rounded>next</v-btn>
    </v-container>
</template>

<script>
export default {

    methods: {
        prev: function(){

            let newIdx = this.$store.state.allQuestions.indexOf(this.$store.state.curQuestion) - 1;

            if(newIdx < 0){
                newIdx = 0;
            }

            this.$store.commit('setCurQuestion', newIdx);
            this.$store.dispatch('changeRoute');
        },

        next: function(){
            let newIdx = this.$store.state.allQuestions.indexOf(this.$store.state.curQuestion) + 1;

            if(newIdx > (this.$store.state.allQuestions.length - 1)){
                newIdx = this.$store.state.allQuestions.length - 1;
            }

            this.$store.commit('setCurQuestion', newIdx);
            this.$store.dispatch('changeRoute');

        }
    }
    

}
</script>


<style>

.timer{
    
    border-bottom: 1px solid grey;
    height: 65px;
}

</style>