<template>
    <v-container class="list grey lighten-2">
        <v-row align="center" justify="start">
            <v-col class="shrink" v-for="(item, idx) in items" :key="idx">
                <v-chip :color="item">Problem {{idx + 1}}</v-chip>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            items: [
                'success', 'error', 'grey', 'grey', 'success', 'warning', 'warning'
            ]
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