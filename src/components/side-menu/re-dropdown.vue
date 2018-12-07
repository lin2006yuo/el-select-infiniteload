<template>
  <Dropdown placement="right-start" @on-click="handleClick">
    <span class="drop-menu-span" :style="titleStyle">
      <Icon :type="parent.icon" :size="20" :color="iconColor"></Icon>
      <span v-if="showTitle">{{parent.title}}</span>
    </span>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-dropdown v-if="item.children" :key="`drop_${item.name}`" :parent="item"></re-dropdown>
        <DropdownItem v-else :key="`drop_${item.name}`" :name="item.name">
          <Icon :type="parent.icon" :size="20" color="#515a61"></Icon>
          {{item.title}}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'ReDropdown',
  components: {},
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    iconColor: {
      type: String,
      default: '#515a61'
    },
    showTitle: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    titleStyle() {
      return {
        textAlign: this.showTitle ? 'left' : 'center',
        paddingLeft: this.showTitle ? '16px' : ''
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(name) {
      if(!this.showTitle) this.$emit('on-select', name)
    }
  }
}
</script>

<style lang="stylus">

</style>
