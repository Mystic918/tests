<template>
  <div>
      <div>
      <baseInput :value='txt' @input="txt = $event"/>
      </div>
      <div>
          <!-- v-model 默认监听的是 input事件， 当封装 表单元素 input 就可以直接用 v-model  -->
          <!-- 看另外的案例，使用  v-model 改为监听的是 change 事件 通过 mode 属性-->
      <baseInput v-model="txt"/>
      </div>
      <div>
          {{txt}}
      </div>
  </div>
</template>

<script>
import baseInput from '@/components/BaseInput.vue'
export default {
components:{
    baseInput
},data(){
    return {
        txt : '111111'
    }
}
}
</script>

<style>

</style>