<template>
  <div>测试
    <div>
      value:
      <label for>{{value}}</label>
      <Button @click="$emit('input', 'change')" size="small">change data</Button>
    </div>
    <div>
      other:
      <label for>{{other}}</label>
      <Button @click="other = 'change'" size="small">change data</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: ["value", "other"]
};
</script>

<style>
</style>
