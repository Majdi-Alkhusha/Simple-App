

<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" alt="logo">
          </q-avatar>

          <q-toolbar-title>
          Abwaab
          </q-toolbar-title>
          <template v-if="this.userAuth===false">
            <q-btn @click="$router.replace('/login')">Login</q-btn>
          </template>
          <template v-else>
            <q-btn @click="$router.replace('/createPost')">Create Post</q-btn>
          </template>

        <q-btn @click="$router.replace('/')">Home</q-btn>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding>
         <q-page-container>
      <router-view />
    </q-page-container>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      //userAuth:false
    }
  },
  computed: {
    userAuth: {
      get () {
        //console.log(this.$store.state.modeulAuth.userAuth)
        return this.$store.state.modeulAuth.userAuth
      },
      set (val) {
        this.$store.commit('modeulAuth/updateUserAuth', val)
      }
    }
  }
}
</script>
