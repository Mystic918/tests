<template>
  <div>
      <input type="checkbox" :checked="checked" @change="handlechecked" />
  </div>
</template>

<script>
export default {
props:['checked'],
model:{
    props:'checked',
    event:'change'
},
methods:{
    handlechecked(e){
        this.$emit('change',e.target.checked)
    }
}
}
</script>

<style>

</style>