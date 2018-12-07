<template>
  <Table :columns="insideColums" :data="data" :name="1" :key="1"></Table>
</template>

<script type="text/ecmascript-6">
import clonedeep from 'clonedeep'

export default {
  name: 'EditTableMul',
  components: {},
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.handleColumns()
  },
  watch: {
    columns() {
      this.handleColumns()
    },
    data() {
      this.handleColumns()
    }
  },
  data() {
    return {
      insideData: '',
      edittingId: '',
      insideColums: [],
      edittingContent: '',
    }
  },
  methods: {
    handleClick({ row, index, column }) {
      let keyIndex = this.insideData[index].edittingKeyArr ? this.insideData[index].edittingKeyArr.indexOf(column.key) : -1
      let rowObj = this.insideData[index]
      console.log('keindex' + keyIndex)
      if(keyIndex > -1) {
        //保存操作
        rowObj.edittingKeyArr.splice(keyIndex, 1)
        this.insideData.splice(index, 1, rowObj)
        this.$emit('update:data', this.insideData)
        this.$emit('on-edit', { row, index, column, newVal: this.insideData[index][column.key]})
      }else{
        console.log(index)
        rowObj.edittingKeyArr = (rowObj.edittingKeyArr) ? [...rowObj.edittingKeyArr, column.key] : [column.key]
        this.insideData.splice(index, 1, rowObj)
      }
    },
    handleInput( row, index, column , newVal) {
      this.insideData[index][column.key] = newVal
    },
    handleColumns() {
      this.insideData = clonedeep(this.data)
      const insideColums = this.columns.map(item => {
        if(!item.render && item.editable) {
            item.render = (h, { row, index, column }) => {
              const keyArr = this.insideData[index] ? this.insideData[index].edittingKeyArr : []
              return (
                <div>
                  { keyArr && keyArr.indexOf(column.key) > -1 
                    ? <i-input value={row[column.key]} on-input={this.handleInput.bind(this, row, index, column )}></i-input> 
                    : <span>{row[column.key]}</span>}
                  <i-button on-click={this.handleClick.bind(this, { row, index, column })}>{keyArr && keyArr.indexOf(column.key) > -1  ? '保存' : '编辑'}</i-button>
                </div>
              )
            }
            return item
        } else return item
      })
      this.insideColums = insideColums
    }
  }
}
</script>

<style lang="stylus">
</style>
