<template>
  <div class="el">
    <el-select v-model="value" placeholder="请选择" v-scroll="HandleScroll">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
  </el-select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
       options: [],
       pageIndex: 1,
       pageSize: 20,
       value: '',
       pageLimit: 4,
       pageMap: [],
    }
  },
  props: {
    msg: String
  },
  directives: {
    scroll: {
      // 指令的定义
      bind: function (el, binding) {
      // 获取滚动页面DOM
        let SCROLL_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
        let scrollPosition = 0
        SCROLL_DOM.addEventListener('scroll', function () {
          let flagToDirection = this.scrollTop - scrollPosition > 0
          scrollPosition = this.scrollTop
          const LIMIT_BOTTOM = this.scrollHeight / 4.2
          const offsetY = this.scrollHeight - (this.scrollTop + this.clientHeight)
          let needData = offsetY < LIMIT_BOTTOM
          // console.log(flagToDirection ? '滚动方向：下' : '滚动方向：上')
           if(flagToDirection && needData) {
             binding.value(flagToDirection, SCROLL_DOM, this.scrollHeight / 2)
            //  return 
           }

           if(!flagToDirection && this.scrollTop < LIMIT_BOTTOM) {
             binding.value(flagToDirection, SCROLL_DOM, this.scrollHeight / 2)
            //  return 
           }
        })
      }
    }
  },
  created(){
    this.options = this.ajaxData(this.pageIndex)
    this.pageMap.push(this.pageIndex)
  },
  methods: {
    HandleScroll(flag, el, middlePosition){
      //向下
      if(flag){
        if (this.pageMap.length >= this.pageLimit) {
          // 当长度相等的时候， 绝对不能超出长度  则有进必有出
          // 删除 pageMap 列表的第一个元素
          this.pageMap.shift()
          // 对应删除list中一页的数据量
          this.options.splice(0, this.pageSize)
          // 回滚到中间位置
          el.scrollTop = middlePosition
        }
        ++this.pageIndex
        this.pageMap.push(this.pageIndex)
        // 请求下一页的数据
        this.options.push(...this.ajaxData(this.pageIndex))
      }else{
        // 如果在向上滚动时，如果还没有到达第一页则继续加载。 如果已到达则停止加载
        if (this.pageMap[0] > 1) {
          // 向上滚动，取出pageMap中第一个元素值减1
          this.pageIndex = this.pageMap[0] - 1
          // 同步设置分页
          // ①先删除最后一个元素
          this.pageMap.pop()
          // ②将新元素添加在头部
          this.pageMap = [this.pageIndex, ...this.pageMap]
          // ①删除list中最后一页的数据
          this.options.splice(-this.pageSize, this.pageSize)
          // ②将新数据添加在头部位置
          this.options = [...this.ajaxData(this.pageIndex), ...this.options]
        } else return false
      }
    },
    ajaxData (pageIndex) {
      // 每页数量
      let pageSize = this.pageSize
      let list = []
      for (let i = pageSize * (pageIndex - 1); i < pageSize * pageIndex; i++) {
        list.push({
          label: `这是一条测试数据 代号：${i}`,
          value: i
        })
      }
      return list
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
