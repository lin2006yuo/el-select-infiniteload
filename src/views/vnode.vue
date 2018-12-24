<template>
  <div>
    <h1>vnode</h1>
    <children/>
    <children-render/>
  </div>
</template>

<script>
import Children from "@/components/vnode/children";
import ChildrenRender from "@/components/vnode/children_render";

export default {
  permission: {
    name: "hello"
  },
  refresh() {
    console.log(1);
  },
  data() {
    return {
      name: "hello",
      age: 23
    };
  },
  mounted() {
    console.log({
      parent: {
        vm: this,
        f_data: this.$data,
        f_props: this.$props,
        f_options: this.$options,
        f_root: this.$root,
        f_children: this.$children
      }
    });
  },
  components: { Children, ChildrenRender }
};
</script>

<style>
</style>
