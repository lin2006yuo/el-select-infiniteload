<template>
  <div class="company">
    <my-button @click.native="click"></my-button>
    <h1>包裹列表</h1>
    <Card dis-hover>
      <p slot="title">包裹列表</p>
      <card-search :form="form" @search="handleSearch"></card-search>
      <table-data></table-data>
    </Card>
    <h3>v-mdoel父子组件测试</h3>
    <Vmodel v-model="select" :other="selectother"></Vmodel>value:
    <select v-model="select">
      <option value="volvo">ass</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
    other:
    <select v-model="selectOther">
      <option value="volvo">ass1</option>
      <option value="saab">Saab1</option>
      <option value="opel">Opel1</option>
      <option value="audi">Audi1</option>
    </select>
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
      },
      select: "",
      selectOther: ""
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
