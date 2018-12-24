
<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
        <span class="breadItem" @click="handleLink(item)">{{item.name}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import pathToRegexp from "path-to-regexp";

export default {
  data() {
    return {
      levelList: []
    };
  },
  components: {},
  watch: {
    $route() {
      this.getBreadCrumb();
    }
  },
  created() {
    this.getBreadCrumb();
  },
  methods: {
    getBreadCrumb() {
      let matched = this.$route.matched.filter(item => {
        if (item.name) return true;
      });
      const first = matched[0];
      if (
        first &&
        first.name.trim().toLocaleLowerCase() !== "Mixin".toLocaleLowerCase()
      ) {
        matched = [{ path: "/", name: "mixin" }, ...matched];
      }
      this.levelList = matched;
    },
    handleLink(item) {
      const { path } = item;
      this.$router.push(this.pathCompile(path));
    },
    pathCompile(path) {
      const { params } = this.$route;
      const toPath = pathToRegexp.compile(path)(params);
      return toPath;
    }
  }
};
</script>

<style scope lang="stylus">

.breadItem {
  cursor: pointer;

  &:hover {
    color: skyblue;
  }
}
</style>
