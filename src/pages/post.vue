<template>
  <!-- <q-page class="flex flex-center">
      <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card> 
     <div class="q-pa-md">

     <div class="row">
      <div class="col-4">.col-8</div>
      <div class="col-4">.col-4</div>
    </div>
    </div>

  </q-page> -->
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12">
          {{"Title: "+this.thisPost.title}}<br>
          {{"Body: "+this.thisPost.body}}
        {{this.$router.currentRoute.query.id}}
    </div>
    </div>

  </div>
</template>

<script>
import {axiosInstance} from '../boot/axios'
//const routes = () => import ('../router/routes')]
export default {
  name: 'PagePost',
  data(){
    return{
      thisPost: {}
    }
  },
  methods:{
     async loadSelectedPost(){
      let response= await axiosInstance.get('/posts/'+this.$route.params.id)
      this.thisPost = response.data; 
    } 
  },
  mounted: function () {
    this.loadSelectedPost()
  }
}
</script>
