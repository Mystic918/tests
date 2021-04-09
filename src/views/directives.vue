<template>
  <div id="test" ref="test">
      <HelloWorld :msg="msg"/>
      <ul v-test>
          <li><img src="https://img-blog.csdnimg.cn/20190306112040195.png" v-lazy /></li>
          <li><img src="https://img-blog.csdnimg.cn/20190306112040195.png" v-lazy /></li>
          <li><img src="https://img-blog.csdnimg.cn/20190306112040195.png" v-lazy /></li>
          <li><img src="https://img-blog.csdnimg.cn/20190306112040195.png" v-lazy /></li>
      </ul>
  </div>
</template>

<script>
import test from '../directives/test'
import HelloWorld from "@/components/HelloWorld"
// import lazy from '../directives/lazy/index.js'
export default {
    data(){
        return {
            msg : "1"
        }
    },
    components:{
        HelloWorld
    },
   directives:{
       test
   },
   created(){
       console.log(document.getElementById("test"))
       console.log(this.$refs.test)
   }
}
</script>

<style>

</style>