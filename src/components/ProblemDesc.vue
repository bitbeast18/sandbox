<template>
    <v-card flat class="centerElem">
        <v-card-title> Problem </v-card-title>
        <v-card-text>

            <v-divider></v-divider>

            <v-subheader class="pa-1"> Statement </v-subheader>
            <pre> 
                Given an array of size N, print all 
                possible permutations of it
            </pre>

            <v-divider></v-divider>

            <v-subheader class="pa-1"> Constraints </v-subheader>
            <pre> 
                N is less than 1e2
            </pre>

            <v-divider></v-divider>

            <v-subheader class="pa-1"> Sample Input </v-subheader>
            <pre> 
                6
                1 2 3 4 5 6
            </pre>

            <v-divider></v-divider>

            <v-subheader class="pa-1"> Sample Output </v-subheader>
            <pre> 
                1 2 3 4 5 6
                1 2 3 4 6 5
            </pre>
        </v-card-text>
    </v-card>
</template>

<style>
    .centerElem{
        height: calc(100vh - 205px);
    }
</style>