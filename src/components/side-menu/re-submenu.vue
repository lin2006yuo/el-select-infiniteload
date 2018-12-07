<template>
  <Submenu :name="parent.name">
    <template slot="title">
      <Icon :type="parent.icon"></Icon>
      {{parent.title}}
    </template>
      <template v-for="item in parent.children">
        <re-submenu 
          v-if="item.children" 
          :key="`menu_${item.name}`" 
          :name="item.name"
          :parent="item"
        >
          
        </re-submenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
          <Icon :type="item.icon"></Icon>
          {{item.title}}
        </menu-item>
      </template>
  </Submenu>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'ReSubmenu',
  components: {},
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="stylus">
</style>
