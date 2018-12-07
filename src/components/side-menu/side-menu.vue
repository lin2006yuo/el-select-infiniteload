<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect">
      <template v-for="item in list">
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
    </Menu>
    <div v-show="collapsed">
      <template v-for="item in list">
        <re-dropdown @on-select="handleSelect" v-if="item.children" icon-color="#fff" :show-title=false :key="`drop_${item.name}`" :parent="item"></re-dropdown>
        <Tooltip v-else transfer :content="item.title" :key="`drop_${item.name}`" placement="right">
          <span class="drop-menu-a" @click="handleClick(item.name)">
            <Icon :size="20" :type="item.icon" color="#fff"></Icon>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ReSubmenu from './re-submenu'
import ReDropdown from './re-dropdown'

export default {
  name: 'SideMenu',
  components: {
    ReSubmenu,
    ReDropdown
  },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    handleSelect(name) {
      console.log(name)
    },
    handleClick(name) {
      console.log(name)
    }
  }
}
</script>

<style lang="stylus">
.side-menu-wrapper {
  width 100%
  .ivu-tooltip, .drop-menu-span {
    width 100%
    display block
    text-align center
    padding 5px 0
  }
  .ivu-dropdown {
    display block
  }
}
</style>
