<template>
  <div>
    <h5>card-search</h5>
    <search-card @search="search" :params="form">
      <div class="search-card-slot">
        <el-select v-sf.city.debug size="small" v-model="form.city" style="width:200px" :key="1">
          <el-option
            :key="`item_1${item.value}`"
            v-for="item in cityList"
            :value="item.value"
          >{{ item.label }}</el-option>
        </el-select>
        <el-select size="small" v-model="form.status" style="width:200px" :key="2">
          <el-option
            :key="`item_2${item.value}`"
            v-for="item in statusList"
            :value="item.value"
          >{{ item.label }}</el-option>
        </el-select>
        <i-select size="small" v-model="form.name" style="width:200px">
          <i-option
            :key="`item_4${item.value}`"
            v-for="item in [{value: 'lison', label: 'lison'},{value: 'lily', label: 'lily'}]"
            :value="item.value"
          >{{ item.label }}</i-option>
        </i-select>
      </div>
    </search-card>
  </div>
</template>

<script>
import SearchCard from "./search-card";
export default {
  data() {
    return {
      cityList: [
        {
          value: "beijing",
          label: "北京市"
        },
        {
          value: "shanghai",
          label: "上海市"
        },
        {
          value: "shenzhen",
          label: "深圳市"
        },
        {
          value: "hangzhou",
          label: "杭州市"
        },
        {
          value: "nanjing",
          label: "南京市"
        },
        {
          value: "chongqing",
          label: "重庆市"
        }
      ],
      statusList: [
        { value: "all", label: "全部" },
        { value: "done", label: "已完成" },
        { value: "not", label: "未完成" }
      ]
    };
  },
  components: { SearchCard },
  props: ["form"],
  methods: {
    search() {
      console.log("delivery search");
      this.$emit("search");
    }
  }
};
</script>

<style>
</style>
