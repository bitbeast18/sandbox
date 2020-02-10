<template>
    <v-app-bar flat elevation="1" class="grey lighten-2" :value="session" app>

        <v-col class="ma-0 pa-0" cols="3">
            <v-select
             dense 
             rounded 
             hide-details 
             filled 
             placeholder="Language"
             :items="items" 
            >
            </v-select>
        </v-col>
        
        <v-spacer></v-spacer>
        <v-btn large rounded class="error" width="180px" @click="func"> end test </v-btn>

    </v-app-bar>
</template>

<script>
export default {
    methods:{
        func: function(){
            console.log("hello");
        }
    },
    computed: {
        session: function(){
            return this.$store.state.session;
        }
    },
    data(){
        return {
            items: ['PYTHON', 'JAVA', 'C', 'C++']
        }
    }

}
</script>