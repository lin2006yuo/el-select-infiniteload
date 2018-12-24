<template>
  <!-- <div>
  <el-button @click.native.stop.prevent="click">测试冒泡</el-button>-->
  <!-- 包裹div能阻止冒泡，因为不属于同一层，不包裹相当于绑定两个点击事件 -->
  <button @click.stop="origin_click">原生button</button>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    click() {
      console.log("children  click");
    },
    origin_click() {
      console.log("origin_click");
    }
  }
};
</script>

<style>
</style>
