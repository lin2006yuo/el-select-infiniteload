<template>
  <div class="">
      <button @click="getUserInfo">请求后台接口</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { getUserInfo } from '@/api/user'
import axios from 'axios'

export default {
  components: {},
  data() {
    return {}
  },
  methods: {
      getUserInfo() {
          getUserInfo().then(res => {
              console.log(res)
          })
      }
  }
}
</script>

<style scoped lang="stylus">
</style>
