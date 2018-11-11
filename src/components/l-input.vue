<template>
    <div class="">
        <el-input type="text"
            v-model="value" 
            v-int
            @change="value = value.length === 1 ? value.replace(/[^1-9]/g, '') : value.replace(/\D/g, '')"
        ></el-input>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            value:''
        };
    },
    components: {}
};
</script>

<style scoped lang="stylus">
</style>
