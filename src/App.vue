<template>
  <div id="app">
    <div class="tabs">
      <el-menu :default-active="$route.path" 
                class="el-menu-demo" 
                mode="horizontal" 
                router
      >
        <el-menu-item 
            v-for="(route,index) in routes" 
            :key="index" 
            :index="route.path"
            :class="$route.path==route.path?'is-active':''"
        >{{route.name}}</el-menu-item>
      </el-menu>
    </div>
    <div class="router-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//路由表
import routes from './router/routes'



export default {
  name: 'app',
  data() {
    return {
      activeIndex: '/',
      routes
    }
  },
  components: {
  }
}
</script>
<style lang="stylus">
html,body 
  padding 0
  margin 0
a 
  text-decoration none 
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background-color #f5f5f5
  overflow hidden
.tabs
  margin 10px 0
.router-wrapper 
  margin 0 40px
  padding 20px
  border 1px solid #eee
  background-color #fff
</style>
