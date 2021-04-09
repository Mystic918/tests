<template>
  <div>
      <input type="text" :value="value" @input="handleInput" />
  </div>
</template>

<script>
export default {
props:['value'],
methods:{
    handleInput(e){
        //返回 input 事件 给 v-model 监听
        this.$emit('input',e.target.value)
    }
}
}
</script>

<style>

</style>