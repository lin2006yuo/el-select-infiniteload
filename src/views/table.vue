<template>
  <div>
    <Card>
      <p slot="title">编辑单个</p>
      <edit-table :columns="columns" :data.sync="tableData" @on-edit="handleEdit"></edit-table>
    </Card>
    <Card>
      <p slot="title">编辑多个</p>
      <edit-table-mul :columns="columns" :data.sync="tableData2" @on-edit="handleEdit"></edit-table-mul>
    </Card>
  </div>
</template>

<script type="text/ecmascript-6">
import { getTableData } from '@/api/data'  
import EditTable from '@/components/edit-table'
import EditTableMul from '@/components/edit-table-mul'

export default {
  components: {
    EditTable,
    EditTableMul
  },
  mounted() {
    getTableData().then(res => {
      this.tableData = res
      this.tableData2 = res
    })
  },
  data() {
    return {
      mulEdit: false,
      tableData: [],
      tableData2: [],
      columns: [
        { key: 'name', title: '姓名' },
        { key: 'age', title: '年龄', editable: true },
        { key: 'email', title: '邮箱', editable: true }
      ]
    }
  },
  methods: {
    handleEdit({ row, index, column, newVal}) {
      console.log({ row, index, column, newVal})
    }
  }
}
</script>

<style lang="stylus">
</style>
