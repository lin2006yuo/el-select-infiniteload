<template>
  <div>
    <h5>search-card</h5>
    <slot></slot>
    <Button size="small" type="warning" @click.native="search">search-car测试1(搜索)</Button>
    <Button size="small" type="warning" @click.native="reset">search-car测试2(重置)</Button>
    <Button size="small" type="warning">search-car测试3</Button>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      oldParams: null,
      fieldComponents: {},
      changes: []
    };
  },
  mounted() {
    this.oldParams = _.cloneDeep(this.params);
  },
  components: {},
  methods: {
    search() {
      console.log("origin search");
      this.$emit("search");
    },
    reset() {
      for (const key in this.oldParams) {
        if (this.oldParams.hasOwnProperty(key)) {
          this.params[key] = this.oldParams[key];
        }
      }
    },
    isChangeParam(old_, new_) {
      //if change return true ,else false;
      if (old_.constructor.name === new_.constructor.name) {
        const type = old_.constructor.name;
        switch (type) {
          case "Array":
            if (old_.length !== new_.length) {
              return true;
            }
            for (let i = 0; i < old_.length; i++) {
              if (this.isChangeParam(old_[i], new_[i])) {
                return true;
              }
            }
            return false;
          case "Object":
            for (let k in old_) {
              if (old_.hasOwnProperty(k)) {
                if (this.isChangeParam(old_[k], new_[k])) {
                  return true;
                }
              }
            }
            for (let k in new_) {
              if (new_.hasOwnProperty(k)) {
                if (this.isChangeParam(old_[k], new_[k])) {
                  return true;
                }
              }
            }
            return false;
          case "Date":
            return new_.getTime() !== old_.getTime();
          case "String":
            return new_ !== old_;
          case "Number":
            return new_ !== old_;
          case "Boolean":
            return new_ !== old_;
          default:
            console.error(`isChangeParam value type not support ${type}`);
            return false;
        }
      } else {
        return true;
      }
    }
  },
  props: ["params"],
  watch: {
    params: {
      deep: true,
      handler(newVal) {
        this.changes = [];
        let changes = [];
        for (const key in newVal) {
          if (newVal.hasOwnProperty(key)) {
            if (this.isChangeParam(this.oldParams[key], newVal[key])) {
              if (!this.changes.includes(key)) {
                changes.push(key);
                this.changes.push(key);
              }
            } else {
              console.log("no-change");
            }
          }
        }
        console.log(changes);
      }
    }
  }
};
</script>

<style>
</style>
