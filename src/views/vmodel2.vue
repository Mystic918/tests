<template>
  <div>
    <checkbox v-model="checked" />
    <checkbox :checked="checked" @change="checked = $event" />
    <div>
      <input type="checkbox" value="vue" v-model="checks" />
      <input type="checkbox" value="react" v-model="checks" />
      <input type="checkbox" value="angular" v-model="checks" />
    </div>
    <div>
      <checkboxlist
        label="复选框"
        :options="multiCheckOptions"
        v-model="checklist"
      />
    </div>
    <div>
      {{ checks }}
    </div>
    <div>
      {{ checked }}
    </div>
  </div>
</template>

<script>
import checkbox from "@/components/checkbox.vue";
import checkboxlist from "@/components/checkboxlist.vue";
export default {
  components: {
    checkbox,
    checkboxlist,
  },
  data() {
    return {
      txt: "111111",
      checked: false,
      checklist: [],
      multiCheckOptions: [
        { value: "1", name: "选项1" },
        { value: "2", name: "选项2(禁用)", disabled: true },
        { value: "3", name: "选项3" },
      ],
    };
  },
};
</script>

<style></style>
