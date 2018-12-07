<template>
    <div class="">
        <input type="text" v-model="n">
        <p>{{newVal}}</p>
    </div>
</template>

<script type="text/ecmascript-6">

export default {
    data() {
        return {
            n: '',
            newVal: ''
        }
    },
    watch: {
        n(newVal){
            // console.log(_.debounce)
           this.change(newVal)
        //    console.log(this._)
        }
    },
    methods: {
        change: _.debounce(function (newVal) {
            this.newVal = newVal
        },500)
    },
    components: {}
};
</script>

<style scoped lang="stylus">
</style>
