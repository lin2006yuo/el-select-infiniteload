<template>
  <ul class="sub-menu">
      <div class="sub-menu-title" @click="handleClick">
        <slot name="title"></slot>
        <span class="shrink-icon" :style="{ transform: `rotateZ(${showChild ? '0' : '180'}deg)` }">^</span>
      </div>
      <div v-show="showChild" class="sub-menu-child-box">
        <slot></slot>
      </div>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'subMenu',
  components: {},
  data() {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick() {
      this.showChild = !this.showChild
    }
  }
};
</script>

<style lang="stylus">
.sub-menu {
  &-title {
    background-color pink
    position relative
    .shrink-icon {
      position absolute
      top: 4px
      right: 10px
      line-height 12px
      transform-origin center center
    }
  }
  &-child-box {
    overflow hidden
    padding-left 20px
  }
}
</style>
