<template>
<!-- 递归组件 -->
  <sub-menu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item,i) in parent.children">
      <menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`">{{item.title}}</menu-item>
      <re-submenu v-else :key="`menu-item_${index}_${i}`" :parent="item" :index="i"></re-submenu>
    </template>
  </sub-menu>
</template>

<script type="text/ecmascript-6">
import menuComponents from '@/components/menu'

export default {
  name: 'ReSubmenu',
  components: {
    ...menuComponents
  },
  data() {
    return {};
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: Number
  }
};
</script>

<style scoped lang="stylus">
</style>
