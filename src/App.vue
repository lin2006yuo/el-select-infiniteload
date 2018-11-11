<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <linput></linput>
    <fold-table></fold-table>
    <chat></chat>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Linput from './components/l-input.vue'
import FoldTable from './components/foldtable.vue'
import chat from './components/chat.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    Linput,
    FoldTable,
    chat
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
