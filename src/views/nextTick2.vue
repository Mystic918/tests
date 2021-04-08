<template>
<div>
 <ul ref="list">
      <li v-for="item in list" :key="item"></li>
  </ul>
  <button @click="addItem">subtime</button>
</div>
 
</template>

<script>
export default {
    data(){
        return {

        list:['aaaaaa','bbbbbbbb','cccccc']
        }
    },
    methods:{
        addItem(){
            this.list.push(Date.now())
            this.list.push(Date.now())
            this.list.push(Date.now())
            const listRef = this.$ref.list
            console.log(listRef.childNodes.length)
        }
    }
}
</script>

<style>

</style>