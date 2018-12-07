<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'AMenu',
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="stylus">
.a-menu {
  & *{
    list-style none
  }
  ul {
    padding 0
    margin 0
  }
}
</style>
