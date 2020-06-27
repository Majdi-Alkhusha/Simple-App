<template>
  <div class="q-pa-md" style="max-width: 400px; margin:0px auto;">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="username*"
        lazy-rules
        aria-label="username-instructions"
        :rules="[ val => val && val.length > 0 || 'Please type your username']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="password"
        lazy-rules
        aria-label="password-instructions"
        :rules="[
          val => val !== null && val !== '' || 'Please enter your password'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the privacy"  aria-label="privacy-toggle"/>

      <div>
        <q-btn label="Login" type="submit" color="primary" aria-label="login-button"/>
      </div>
    </q-form>

  </div>
</template>

<script>
import {axiosInstance} from '../boot/axios'
const routes = () => import ('../router/routes')
//import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'PageLogin',
  data(){
    return{
      username: null,
      password: null,

      accept: false
    }
  },
  computed: {
    userAuth: {
      get () {
        return this.$store.state.modeulAuth.userAuth
      },
      set (val) {
        this.$store.commit('modeulAuth/updateUserAuth', val)
      }
    }
  },
  methods:{
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept terms before'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        });
        localStorage.setItem('agreedToPrivacy', true);
        this.$store.commit('modeulAuth/updateUserAuth', true)
        this.$router.push("/")
      }
    }
  }
}
</script>
