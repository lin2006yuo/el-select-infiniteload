<template>
    <div class="anime7">
        <div class="btn-container" :style="{ backgroundColor: selectedBgColor }">
            <div v-for="(button, index) in buttons" :key="index" 
                @click="selectButton(index)" 
                :ref="`button_${index}`" 
                class="btn"
            >
                <i :class="['fas', `fa-${button.icon}`]"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            buttons: [
                { icon: "comment", bgColor: "#DE9B00", color: "#EDB205" },
                { icon: "user", bgColor: "#3EAF6F", color: "#4BD389" },
                { icon: "map-marker", bgColor: "#BE0031", color: "#E61753" },
                { icon: "cog", bgColor: "#8E00AC", color: "#B32DD2" }
            ],
            selectedBgColor: "#DE9B00",
            selectedId: 0
        };
    },
    mounted() {
        this.selectButton(0);
    },
    components: {},
    computed: {
        selectedButton() {
            return this.buttons[this.selectedId];
        }
    },
    methods: {
        selectButton(id) {
            const previousButton = this.$refs[`button_${this.selectedId}`];
            const nextButton = this.$refs[`button_${id}`];

            this.selectedId = id;
            this.animateBgColor();

            this.animateOut(previousButton);
            this.animateIn(nextButton);
        },
        animateBgColor() {
            TweenMax.to(this, 0.2, {
                selectedBgColor: this.selectedButton.bgColor
            });
        },
        animateIn(btn) {
            // animate icon color
            TweenMax.to(btn, 0.3, {
                backgroundColor: this.selectedButton.color,
                color: "white"
            });

            // animate button width
            TweenMax.to(btn, 0.7, {
                width: 100,
                ease: Elastic.easeOut.config(1, 0.5)
            });
        },
        animateOut(btn) {
            // animate icon color
            TweenMax.to(btn, 0.3, {
                backgroundColor: "white",
                color: "gray"
            });

            // animate button width
            TweenMax.to(btn, 0.7, {
                width: 50,
                ease: Elastic.easeOut.config(1,0.5)
            });
        }
    }
};
</script>

<style scoped lang="stylus">
a
    color #D21157
    text-decoration none
#credits
    padding 20px
    text-align center
.btn-container
    display flex
    background-color #09161D
    padding-top 150px
    padding-bottom 150px
    justify-content center
.btn
    display inline-block
    cursor pointer
    width 50px
    height 50px
    margin 5px
    font-size 25px
    color #222
    border-radius 25px
    background-color #fefefe
    text-align center
    line-height 50px
    -webkit-tap-highlight-color rgba(0, 0, 0, 0)
</style>
