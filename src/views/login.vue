<template>
  <div class="">
    <p>登陆</p>
    账号：<input type="text" v-model="name"><br>
    密码：<input type="password" v-model="password"><br>
    <button @click="handleSubmit">登陆</button>
    <p>{{msg}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapActions} from 'vuex'
import {getToken, setToken} from '@/lib/util'

export default {
  components: {},
  data() {
    return {
      name: '',
      password: '',
      msg: ''
    }
  },
  mounted() {
    const token = getToken()
    if(token) {
      this.authorization(token).then(res => {
        setToken(res.data.token)
        this.msg = '已经登陆'
      }).catch(err => {
        this.msg = '没有登陆，请登陆'
      })
    }else{
      this.msg = '没有登陆，请登陆'
    }
  },
  methods: {
    ...mapActions([
      'login','authorization'
    ]),
    handleSubmit() {
      this.login({
        name: this.name,
        password: this.password
      }).then(() => {
        this.msg = '登陆成功'
      })
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
