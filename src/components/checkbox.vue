<template>
  <div>
    <input type="checkbox" :checked="checked" @change="handlechecked" />
  </div>
</template>

<script>
export default {
  props: ["checked"],
  model: {
    prop: "checked", //默认是 input
    event: "change", //定义事件
  },
  methods: {
    handlechecked(e) {
      this.$emit("change", e.target.checked);
    },
  },
};
</script>

<style></style>
