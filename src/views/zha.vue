<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <linput></linput>
    <fold-table></fold-table>
    <chat></chat>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Linput from '@/components/l-input.vue'
import FoldTable from '@/components/foldtable.vue'
import chat from '@/components/chat.vue'


export default {
  components: {
    HelloWorld,
    Linput,
    FoldTable,
    chat
  }
}
</script>
<style lang="stylus" scoped>
</style>
