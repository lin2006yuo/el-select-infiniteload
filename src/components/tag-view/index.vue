<template>
  <div class="tagview">
    <router-link
      v-for="(item) in viewsList"
      :to="{path: item.path, query: item.query, fullPath: item.fullPath}"
      :key="item.path"
      tag="span"
      class="tags-view-item"
    >{{item.name}}</router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  watch: {
    $route() {
      this.addVisitedViews(this.$route);
    }
  },
  components: {},
  computed: {
    ...mapState({
      viewsList: state => state.tagsView.visitedViews
    })
  },
  methods: {
    ...mapActions({
      addVisitedViews: "addVisitedViews"
    })
  }
};
</script>

<style scope lang="stylus">
.tagview {
  margin: 20px;
}

.tags-view-item {
  padding: 10px;
  margin: 5px;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}
</style>
