<template>
  <div class="multi-checklist">
    <label class="multi-checklist-title">{{ label }}</label>
    <div
      :class="showbox ? 'multi-checklist-contentc' : 'multi-checklist-content'"
    >
      <div class="option-item" v-for="(item, index) in options" :key="item.id">
        <input
          type="checkbox"
          :id="'mchecklist' + index + curTime"
          :value="item.value"
          v-model="checkedVal"
          class="checkbox"
          :disabled="item.disabled || disabled"
        />
        <label :for="'mchecklist' + index + curTime" class="check-label">{{
          item.name
        }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "multi-check-list",
  model: {
    // v-model  对应的变量和事件，默认是value和change
    prop: "checked",
    event: "change",
  },
  props: {
    // 组件参数
    label: String,
    options: Array,
    checked: Array,
    disabled: false,
    showbox: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      checkedVal: this.checked, // 用来存储选中的数据
      curTime: new Date().getTime(), // 获取当前时间，生成唯一id，保证一个页面可使用多个组件
    };
  },
  watch: {
    // 监听数据变化，回传数据到父组件
    checkedVal(newValue, oldValue) {
      if (newValue != oldValue) {
        this.$emit("change", newValue);
      }
    },
    checked: {
    //   handler(newVal, oldVal) {},
      deep: true,
    },
  },
};
</script>
<style scoped >

</style>
