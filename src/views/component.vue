<template>
  <div class="">
      <p>组件</p>
      <div class="split-pane">
          <split-pane :value.sync="offset"></split-pane>
      </div>
      <p>ElementUI</p>
      <el-input v-range.number="{max: 8, min: 0}" ref="input1" :controls="false" :value="num1" @keyup.native="handleInput"></el-input>
      <el-input-number :controls="false" :value="num2" @keyup.native="handleInput"></el-input-number>
      <!-- <p>原生</p>
      <input ref="input1" type="text" :value="c_num1" @keyup="handleKeyup" @input="hanleRawInput">
      <input ref="input2" type="text" :value="num2" @keyup="handleKeyup"> -->
      num1: {{num1}}
      num2: {{num2}}
  </div>
</template>

<script type="text/ecmascript-6">
import SplitPane from '@/components/split-pane'

export default {
    directives: {
        range: {
            bind(el, binding) {
                console.log(binding.modifiers)
                const {max, min} = binding.value
                const INPUT_DOM = el.querySelector('input')
                const handleInput = (e) => {
                    if(binding.modifiers.number) {
                        INPUT_DOM.value = INPUT_DOM.value.replace(/[^1-9]/g, "")
                    }
                    if(INPUT_DOM.value > max) {
                        console.log('大于')
                        INPUT_DOM.value = 8
                        console.log(INPUT_DOM.value)
                    } else if(INPUT_DOM.value < min) {
                        console.log('小于')
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
        offset: 0.8,
        num1: 1,
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
      handleInput(e) {
         this.$nextTick(() => {
            this.num1 = e.target.value
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
