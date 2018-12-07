<template>
  <Table :columns="insideColums" :data="data" :name="2" :key="2"></Table>
</template>

<script type="text/ecmascript-6">
import clonedeep from 'clonedeep'

export default {
  name: 'EditTable',
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
    }
  },
  data() {
    return {
      edittingId: '',
      insideColums: [],
      edittingContent: '',
    }
  },
  methods: {
    handleClick({ row, index, column }) {
      if(this.edittingId === `${column.key}_${index}`) {
        let tableDate = clonedeep(this.data)
        tableDate[index][column.key] = this.edittingContent
        this.$emit('update:data', tableDate)
        this.$emit('on-edit', { row, index, column, newVal: this.edittingContent})
        this.edittingId = ''
        this.edittingContent = ''
      }else{
        this.edittingId = `${column.key}_${index}`
      }
    },
    handleInput(newVal) {
      this.edittingContent = newVal
    },
    handleColumns() {
      const insideColums = this.columns.map(item => {
        if(!item.render && item.editable) {
            item.render = (h, { row, index, column }) => {
              const isEditting = this.edittingId === `${column.key}_${index}`
              return (
                <div>
                  { isEditting ? <i-input value={row[column.key]} on-input={this.handleInput}></i-input> : <span>{row[column.key]}</span>}
                  <i-button on-click={this.handleClick.bind(this, { row, index, column })}>{isEditting ? '保存' : '编辑'}</i-button>
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
