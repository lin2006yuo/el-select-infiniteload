<template>
  <div class="">
      <p>组件</p>
      <div class="split-pane">
          <split-pane :value.sync="offset"></split-pane>
      </div>
      <p>ElementUI</p>
      <el-input v-range.number="{max: 8, min: 0}" @keyup.native="handleInput(2, $event)" :value="num1"></el-input>
      <el-input v-range.number="{max: 8, min: 0}" @keyup.native="handleInput2(2, $event)" :value="num2"></el-input>
      <!-- <p>原生</p>
      <input ref="input1" type="text" :value="c_num1" @keyup="handleKeyup" @input="hanleRawInput">
      <input ref="input2" type="text" :value="num2" @keyup="handleKeyup"> -->
      num1: {{num1}}<br>
      num2: {{num2}}
  </div>
</template>

<script type="text/ecmascript-6">
import SplitPane from '@/components/split-pane'

export default {
    directives: {
        range: {
            bind(el, binding) {
                const {max, min} = binding.value
                const INPUT_DOM = el.querySelector('input');
                const handleInput = (e) => {
                    if(binding.modifiers.number) {
                        INPUT_DOM.value = INPUT_DOM.value.replace(/[^0-9]/g, "")
                    }
                    if(INPUT_DOM.value > max) {
                        INPUT_DOM.value = 8;
                    } else if(INPUT_DOM.value < min) {
                        INPUT_DOM.value = 0
                    }
                }
                el.addEventListener('keyup', handleInput)
            }
        }
    },
  components: {
      SplitPane
  },
  data() {
    return {
        max: 8,
        offset: 0.8,
        num1: 0,
        num2: 2,
        sum: 8
    };
  },
  computed: {
      c_num1() {
          return this.num1
      }
  },
  methods: {
      handleInput(max,e) {
         this.$nextTick(() => {
            this.num1 = e.target.value;
            this.num2 = max - e.target.value;
         })
      },
      handleInput2(max,e) {
          this.$nextTick(() => {
              this.num2 = e.target.value;
              this.num1 = max - e.target.value;
          })
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
