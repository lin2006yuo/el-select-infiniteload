<template>
  <div>
    <h3>children</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    console.log({
      children: { c_props: this.$props }
    });
  },
  props: {
    name: {
      type: String,
      default: "children"
    }
  }
};
</script>

<style>
</style>
