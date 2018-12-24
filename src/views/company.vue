<template>
  <div class="company">
    <my-button @click.native="click"></my-button>
    <h1>包裹列表</h1>
    <Card dis-hover>
      <p slot="title">包裹列表</p>
      <card-search :form="form" @search="handleSearch"></card-search>
      <table-data></table-data>
    </Card>
  </div>
</template>

<script>
import companyComponents from "@/components/company";
export default {
  data() {
    return {
      form: {
        city: "",
        status: "",
        name: ""
      }
    };
  },
  components: {
    ...companyComponents
  },
  methods: {
    click() {
      console.log("parent click");
    },
    handleSearch() {
      console.log("handle search");
    }
  }
};
</script>

<style>
.ivu-btn {
  margin: 2px;
}
</style>
