<template>
  <div class>vuex
    <!-- <p>appName: {{appName}}</p> -->
    <p>userName: {{userName}}</p>
    <button @click="handleClick">修改userName</button>
  </div>
</template>

<script type="text/ecmascript-6">
// 1.
import { mapState, mapMutations } from "vuex";
// 2.
// import {createNamespacedHelpers} from 'vuex'
// const {mapState} = createNamespacedHelpers('user')

export default {
  components: {},
  computed: {
    ...mapState({
      userName: state => state.user.userName
    })
    // 2.
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.userName
    // })
    // 3.
    // appName() {
    //   return this.$store.state.appName;
    // },
    // userName() {
    //   return this.$store.state.user.userName
    // }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations("user", ["SET_USERNAME"]),
    handleClick() {
      this.SET_USERNAME();
    }
  }
};
</script>

<style scoped lang="stylus">
</style>
