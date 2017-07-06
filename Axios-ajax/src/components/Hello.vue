<template>
  <div class="hello">
     <input type="text">
     <input type="passworld">
     <input type="submit" value="提交" @click="sub">
     <div v-for="(v,k) in lists">
        <p>{{v}}</p>
     </div>
  </div>
</template>

<script>
import mock from "../mock"
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lists:[
        "1","2","3","4"
      ]
    }
  },
  methods:{
    sub(){
      // this.$http.get("/submit")
      //   .then(res=>{
      //     console.log(res)
      //   })
      //   .catch(err=>{
      //     console.log(err)
      //   })
      let par = 
        {
          username:"zhangsan",
          passworld:"123456"
        }
      
      this.$http.post("/login",par)
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
