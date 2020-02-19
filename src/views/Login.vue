<template>
  <v-app app>
    <v-content app>
      <v-container fluid class="d-flex fill-height pa-0 ma-0">
        <div class="fill-height setup">
          <v-card tile :loading="loader" class="fill-height grey darken-4" elevation="24">
            <div id="title-name" class="display-4 font-weight-medium grey--text">              
              Sandbox
            </div>
          </v-card>
        </div>

        <div class="setup d-flex justify-center align-center fill-height flex-grow-1">
          <v-card
            width="30vw"
            class="grey white--text darken-4 pa-10"
            rounded
            elevation="20"
          >
            <v-card-title class="pt-0 pb-10">
              <div class="display-1 text-center text--white font-weight-bold flex-grow-1">Login</div>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  :prepend-inner-icon="icons.mdiKey"
                  solo
                  rounded
                  filled
                  v-model="testId"
                  placeholder="Test ID"
                ></v-text-field>
                <v-text-field
                  :prepend-inner-icon="icons.mdiAccount"
                  solo
                  rounded
                  filled
                  v-model="userId"
                  placeholder="User ID"
                ></v-text-field>
                <v-text-field
                  :prepend-inner-icon="icons.mdiLock"
                  solo
                  rounded
                  filled
                  placeholder="Password"
                  :append-icon="show ? icons.mdiEye : icons.mdiEyeOff"
                  @click:append="show = !show"
                  :type="show ? 'text': 'password'"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn rounded width="150px" :loading="loader" large @click="setSession">start test</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mdiAccount, mdiKey, mdiLock, mdiEye, mdiEyeOff } from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        mdiAccount,
        mdiKey,
        mdiLock,
        mdiEye,
        mdiEyeOff
      },
      show: false,
      testId: null,
      userId: null
    };
  },

  computed: {
    loader() {
      return this.$store.state.loginLoader;
    }
  },

  methods: {
    setSession: function() {
      this.$store.dispatch("startSession", {
        testId: this.testId,
        userId: this.userId
      });
    }
  }
};
</script>

<style>
.setup {
  height: 100vh;
  width: 50vw;
}

#title-name{
  position: absolute;
  top: 65%;
  left: 22.5%
}
</style>