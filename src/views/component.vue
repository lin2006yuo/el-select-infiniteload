<template>
  <div class="">
      <p>组件</p>
      <div class="split-pane">
          <split-pane :value.sync="offset"></split-pane>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SplitPane from '@/components/split-pane'

export default {
  components: {
      SplitPane
  },
  data() {
    return {
        offset: 0.8
    };
  },
  methods: {
      handleInput(value) {
          this.offset = value
      }
  }
};
</script>

<style scoped lang="stylus">
.split-pane {
    width 400px
    height 200px
    background-color papayawhip
}
</style>
