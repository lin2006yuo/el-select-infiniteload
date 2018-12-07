<template>
  <div class="split-pane-wrapper" ref="outer">
    <div
      class="pane pane-left"
      :style="{ width: leftOffsetPercent }"
    ></div>
    <div
      class="pane-trigger-con"
      :style="{ left: triggerLeft, width: `${triggerWidth}px` }"
      @mousedown="handleMousedown"
    ></div>
    <div
      class="pane pane-right"
      :style="{ left: leftOffsetPercent }"
    ></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: {
    value: {
        type: Number,
        default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8,
    },
    min: {
        type: Number,
        default: 0.1
    },
    max: {
        type: Number,
        default: 0.9
    }
  },
  data() {
    return {
        // leftOffset: 0.3,
        canMove: false,
        initOffset: 0
    };
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`;
    },
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
    }
  },
  methods: {
    HandleClick() {
      this.leftOffset -= 0.02;
    },
    handleMousedown(event) {
        document.addEventListener('mousemove', this.handleMousemove)
        document.addEventListener('mouseup', this.handleMouseup)
        this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
        this.canMove = true
    },
    handleMousemove(event) {
        if(!this.canMove) return 
        const outerRect = this.$refs.outer.getBoundingClientRect()
        const offset = event.pageX - outerRect.left - this.initOffset + this.triggerWidth / 2
        const offsetPrecente = Math.max(this.min,Math.min((offset / outerRect.width), this.max))
        this.$emit('update:value', offsetPrecente)
    },
    handleMouseup() {
        this.canMove = false
    }
  }
};
</script>

<style lang="stylus">
.split-pane-wrapper
  width 100%
  height 100%
  position relative
  .pane
    position absolute
    height 100%
    top 0
    &-left
      width 30%
      background-color skyblue
    &-right
      right 0
      top 0
      left 30%
      background-color purple
    &-trigger-con
      width 8px
      height 100%
      background-color red
      position absolute
      top 0
      z-index 10
      user-select none
</style>
