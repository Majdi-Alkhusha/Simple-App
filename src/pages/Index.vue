<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-4 col-xs-12 col-sm-4 q-pa-sm" v-for="n in this.posts" :key="n.id">
        <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">{{n.title}}</div>
      </q-card-section>

      <q-card-section>
        {{ n.body }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat color="purple" v-on:click="pushRoute(n.id)" aria-label="read-more">Read more</q-btn>
      </q-card-actions>
    </q-card> 
    </div>
    </div>

  </div>
</template>

<script>
import {axiosInstance} from '../boot/axios'
const routes = () => import ('../router/routes')
//you can use => import routes from '../router/routes'
//dynamic imports will imporve app

export default {
  name: 'PageIndex',/* majdi */
  data(){
    return{
      posts: []
    }
  },
  methods:{
    async loadPosts(){
     let response= await axiosInstance.get('/posts')
      this.posts = response.data;
    },
    pushRoute(id){
      this.$router.push('post/'+id)
    }
  },
  mounted: function () {
    this.loadPosts()
  }
}
</script>
