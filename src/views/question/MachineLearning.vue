<template>
    <v-card flat class="centerElem fill-height">
        <v-card-title> Question </v-card-title>
        <v-card-text>

            <v-divider></v-divider>

            <v-subheader class="pa-1"> Statement </v-subheader>
            <pre> {{ statement }} </pre>

            <v-divider></v-divider>

            <v-subheader class="pa-1"> Resources </v-subheader>
            <pre> {{ resources }} </pre>

        </v-card-text>
    </v-card>
</template>

<script>
export default {
    
    computed: {
        statement(){
            return this.$store.state.curQuestion.statement;
        },

        resources(){
            return this.$store.state.curQuestion.resources;
        }
    }
}
</script>