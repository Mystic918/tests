<template>
  <div>
    <ul ref="list">
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ul>
    <button @click="addItem">subtime</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["aaaaaa", "bbbbbbbb", "cccccc"],
    };
  },
  methods: {
    addItem() {
      this.list.push(Date.now());
      this.list.push(Date.now());
      this.list.push(Date.now());
      //nextTick 获取最新 dom
      // 没有加 nextTick 数位  3 6 9
      // vue中 dom 渲染是异步的 ， 批量更新 ， list 3次操作只能触发一次 nextTick
      //加了 nextTick 取值为 6 9 12
      this.$nextTick(() => {
        const listRef = this.$refs.list;
        console.log(listRef.childNodes.length);
      });
    },
  },
};
</script>

<style></style>
