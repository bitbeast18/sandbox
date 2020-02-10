<template>
    <v-app app>
        <v-navigation-drawer :value="session" right style="max-height:100vh !important" width="40%" app>
            <NavContent></NavContent>
        </v-navigation-drawer>

        <AppBar></AppBar>

        <v-content app>
            <router-view></router-view>
        </v-content>

        <BottomBar></BottomBar>
    </v-app>
</template>

<script>

import NavContent from '@/components/NavContent.vue';
import AppBar from '@/components/AppBar.vue';
import BottomBar from '@/components/BottomBar.vue';

export default {
    created: function(){
        this.$store.commit('initStore');
    },
    components: {
        NavContent,
        AppBar,
        BottomBar
    },
    computed: {
      session: function(){
        return this.$store.state.session;
      }
    }
}
</script>
