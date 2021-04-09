<template>
  <div>
      <checkbox v-model="checked"/>
      <checkbox :checked="checked" @change="checked = $event"/>
      <div>
          {{checked}}
      </div>
  </div>
</template>

<script>
import checkbox from '@/components/checkbox.vue'
export default {
components:{
    checkbox
},data(){
    return {
        txt : '111111',
        checked: false
    }
}
}
</script>

<style>

</style>