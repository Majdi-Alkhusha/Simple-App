<template>
  <div class="q-pa-md" style="max-width: 400px; margin:0px auto;">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="title"
        label="title*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type your title post']"
      />

      <q-input
        filled
        v-model="body"
        label="body"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please enter your body of post'
        ]"
      />

      <div>
        <q-btn label="Create Post" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>

<script>
import {axiosInstance} from '../boot/axios'
const routes = () => import ('../router/routes')

export default {
  name: 'PageCreatePost',
  data(){
    return{
      title: null,
      body: null
    }
  },
  methods:{
    async onSubmit () {
        let response= await axiosInstance.post('/posts',{
          title: this.title,
          body: this.body,
          userId: 1//if we are use token ... we can get id from jwt (from cookies) 
        });
        //console.log("=> ", response)
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        });
        this.$router.push("/")
    }
  }
}
</script>
