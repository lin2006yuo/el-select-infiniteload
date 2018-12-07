<template>
  <Form ref="form" v-if="Object.keys(valueList).length" :model="valueList" :rules="rules" :label-width="labelWidth">
    <FormItem 
      :label="item.label" 
      v-for="(item, index) in list"
      :key="`${_uid}_${index}`"
      :prop="item.name"
      :error="errorStorage[item.name]"
      @click.native="handleClick(item.name)"
    >
      <component :is="item.type" :range="item.range" v-model="valueList[item.name]">
        <template v-if="item.children">
          <component 
            v-for="(child, i) in item.children.list" 
            :key="`${_uid}_${index}_${i}`"
            :is="item.children.type"
            :value="child.value"
            :label="child.label"
            >{{ child.label }}</component>
        </template>
      </component>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary">提交</Button>
      <Button @click="hanldeReset">重置</Button>
    </FormItem>
  </Form>
</template>

<script type="text/ecmascript-6">
import clonedeep from 'clonedeep'

export default {
  name: 'FormGroup',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: Number,
      default: 100
    }
  },
  watch: {
    list() {
      this.setInnitValue()
    }
  },
  data() {
    return {
      initValueList: [],
      rules: {},
      valueList: {},
      errorStorage: {}
    }
  },
  mounted() {
    this.setInnitValue()
  },
  methods: {
    setInnitValue() {
      let initValueList = {}
      let rules = {}
      let valueList = {}
      let errorStorage = {}
      this.list.forEach(item => {
        rules[item.name] = item.rules,
        valueList[item.name] = item.value
        initValueList[item.name] = item.value
        errorStorage[item.name] = ''
      })
      this.rules = rules
      this.valueList = valueList
      this.initValueList = initValueList
      this.errorStorage = errorStorage
    },
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if(valid) {
          //suubmit
          new Promise((resolve, reject) => {
            setTimeout(() => {
              if(this.valueList['name'] == '123') {
                console.log('success')
                resolve('success')
              } else{
                reject({name: '姓名错误'})
              }
            }, 200);
          }).then(res => {
            console.log(res)
          }).catch(err => {
            for(let key in err) {
              this.errorStorage[key] = err[key]
            }
          })
        }
      })
    },
    hanldeReset() {
      this.valueList = clonedeep(this.initValueList)
    },
    handleClick(name) {
      this.errorStorage[name] = ''
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
