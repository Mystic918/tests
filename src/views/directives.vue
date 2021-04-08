<template>
  <div>
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
// import lazy from '../directives/lazy/index.js'
export default {
   directives:{
       test
   }
}
</script>

<style>

</style>