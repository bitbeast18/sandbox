<template>
    <v-card flat class="centerElem">
        <v-card-title> Question </v-card-title>
        <v-card-text>

            <v-divider></v-divider>

            <v-subheader class="pa-1"> Statement </v-subheader>
            <pre> {{ statement  }} </pre>

            <v-divider></v-divider>

            <v-subheader class="pa-1"> Constraints </v-subheader>
            <pre> {{constraints}} </pre>

            <v-divider></v-divider>

            <v-subheader class="pa-1"> Sample Input </v-subheader>
            <pre> {{sample_in}} </pre>

            <v-divider></v-divider>

            <v-subheader class="pa-1"> Sample Output </v-subheader>
            <pre> {{sample_out}}</pre>

        </v-card-text>
    </v-card>
</template>

<script>
export default {
    
    computed: {

        statement(){
            return this.$store.state.curQuestion.statement;
        },

        constraints(){
            return this.$store.state.curQuestion.constraints;
        },
        
        sample_in(){
            return this.$store.state.curQuestion.sample_in;
        },

        sample_out(){
            return this.$store.state.curQuestion.sample_out;
        },
        
    }

}
</script>
