<template>
 <div class="aniamtion">
    <!-- 
        动画一
     -->
    <transition
        appear
        appear-class="custom-appear"
        appear-to-class="custom-appear-to"
        appear-active-class="custom-appear-active"
    >
        <p>appear</p>
    </transition>
   <div class="line"></div>
   <!-- 
       动画二
     -->
    <transition name="fade" mode="out-in">
        <button 
            v-bind:key="docState" 
            @click="docState = !docState"
            style="position: absolute"
        >
            {{ buttonMessage }}
        </button>
    </transition>
   <div class="line"></div>
   <!-- 
       动画三
     -->
    <div id="list-demo" class="demo">
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list-complete" tag="p">
        <span   v-for="item in items" 
                v-bind:key="item" 
                class="list-complete-item"
        >
        {{ item }}
        </span>
    </transition-group>
    </div>
    <div class="line"></div>
    <!-- 
        动画四
     -->
    <div>
        <button @click="blockShow = !blockShow">show</button>
        <transition
        name="normal"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave"
    >
        <div    
            class="block" 
            v-show="blockShow"
            ref="block"
        ></div>
        </transition>
    </div>
    <div class="line"></div>
    <!-- 
        动画五
     -->
    <div>
        <button @click="block5Show = !block5Show">show</button>
        <transition
        name="normal"
        @enter="enter5"
        @after-enter="afterEnter5"
        @leave="leave5"
        @after-leave="afterLeave5"
    >
        <div    
            class="block" 
            v-show="block5Show"
            ref="block5"
        ></div>
        </transition>
    </div>
    <div class="line"></div>
    <!-- 
        动画六
     -->
    <div class="main-container"     
        @mousemove="mouseMoving"
        @mouseup="stopDrag">
        <div class="upper-container" :style="bgStyle">
            <h2 class="temperature-text">{{currentTemperature | round}}</h2>
            <div class="temperature-graduation">             
                <div class="temperature-element" v-for="el in temperatureGrades" 
                    :key="el" 
                    :style="tempElementStyle(el)">
                <span class="temperature-element-number">{{el}}</span><br>
                <span class="temperature-element-line">|</span>
                </div>
            </div>
        </div>
        <div class="lower-container">
            <div class="slider-container" :style="sliderStyle">
                <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74.3132 0C47.0043 2.44032e-05 50.175 30 7.9179 30H144.27C99.4571 30 101.622 -2.44032e-05 74.3132 0Z" transform="translate(-7.38794 0.5)" fill="#12132C"/>
                </svg>
                <div class="slider-button" @mousedown="startDrag">
                    <i class="fas fa-thermometer-empty slider-icon"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="line"></div>
 </div>
</template>

<script type="text/ecmascript-6">
import animations from 'create-keyframe-animation'
import anime from 'animejs'
const sliderMinX = 0
const sliderMaxX = 240
const coldGradient = {
  start: '#5564c2',
  end: '#3a2e8d'
}
const hotGradient = {
  start: '#f0ae4b',
  end: '#9b4d1b'
}


export default {
    data() {
        return {
            docState: true,
            items: [1,2,3,4,5,6,7,8,9],
            nextNum: 10,
            blockShow: false,
            block5Show: false,
            //动画六
            gradientStart: coldGradient.start,
            gradientEnd: coldGradient.end,
            temperatureGrades: [10, 15, 20, 25, 30],
            sliderX: 0,
            dragging: false,
            initialMouseX: 0,
            initialSliderX: 0,
        }
    },
    filters: {
        round (num) {
            return Math.round(num)
        }
    },
    computed: {
        buttonMessage: function () {
            if(this.docState){
                return 'on'
            }else{
                return 'off'
            }
        },
        //动画六
        sliderStyle () {
            return `transform: translate3d(${ this.sliderX}px, 0, 0);`
        },
        bgStyle () {
            return `background: linear-gradient(to bottom right, ${this.gradientStart}, ${this.gradientEnd});`
        },
        currentTemperature () {
            const tempRangeStart = 10
            const tempRange = 20
            return (this.sliderX / sliderMaxX * tempRange ) + tempRangeStart
        }
    },
    components: {

    },
    methods: {
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            this.items.splice(this.randomIndex(), 1)
        },
        // 动画四
        enter(el, done){
            const x = 50;const y=60; const scale=0.8
            // let animation = {
            //     0: {
            //         transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`
            //     },
            //     60: {
            //         transform: `translate3d(0,0,0) scale(1.1)`
            //     },
            //     100: {
            //         transform: `translate3d(0,0,0) scale(1)`
            //     }
            // }
            // animations.registerAnimation({
            //     name: 'move',
            //     animation,
            //     presets: {
            //         duration: 400,
            //         easing: 'linear'
            //     }
            // })
            // animations.runAnimation(this.$refs.block, 'move', done)
            anime({
                targets: this.$refs.block,
                translateX: [50,0],
                translateY: [60,0],
                scale: [0.3, 1.2],
                opacity: [0,1],
                elasticity: 300,
                complete: done
            })
        },
        afterEnter(){
            console.log(1)
        },
        leave(el, done){
            // this.$refs.block.style.transition = 'all 0.4s'
            // const {x, y, scale} = {x: 50, y: 80, scale: 0.7}
            // this.$refs.block.style['transform'] = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
            // this.$refs.block.addEventListener('transitionend', done)
            anime({
                targets: this.$refs.block,
                translateX: [0,50],
                translateY: [0,60],
                scale: [1, 0.3],
                duration: 500,
                opacity: 0,
                complete: done
            })
        },
        afterLeave(){
            
        },
        // 动画五
        enter5(el, done){
            TweenMax.fromTo(this.$refs.block5,1,{
                x: 50,
                y: 60,
                scale: 0.3,
                opacity: 0,
                ease: Bounce.easeInOut,
            }, {
                x: 0,
                y: 0,
                scale: 1.3,
                opacity: 1,
                ease: Back.easeInOut.config(3)

            })
        },
        afterEnter5(){

        },
        leave5(el, done){
            TweenMax.to(this.$refs.block5,1,{
                x: 50,
                y: 60,
                scale: 0.2,
                // ease: Bounce.easeOut,
                onComplete: done
            })
        },
        afterLeave5(){
            
        },
        //动画六
        tempElementStyle (tempNumber) {
            const nearDistance = 3
            const liftDistance = 12
            
            const diff = Math.abs(this.currentTemperature - tempNumber)
            const distY = (diff / nearDistance) - 1
            const elementY = Math.min(distY * liftDistance, 0)
            return  `transform: translate3d(0, ${elementY}px, 0)`
        },
        mouseMoving(e){
            if(this.dragging) {
                const dragAmount = e.pageX - this.initialMouseX
                const targetX = this.initialSliderX + dragAmount
                this.sliderX = Math.max(Math.min(targetX, sliderMaxX), sliderMinX)
                
                let targetGradient = coldGradient
                if (this.currentTemperature >= 25)         {
                targetGradient = hotGradient
                }
                
                if (this.gradientStart !== targetGradient.start) {
                TweenLite.to(this, 0.7, {
                    'gradientStart': targetGradient.start,
                    'gradientEnd': targetGradient.end
                })
                }
            }
        },
        stopDrag(){
            this.dragging = false
        },
        startDrag(e){
            console.log(1)
            this.dragging = true
            this.initialMouseX = e.pageX
            this.initialSliderX = this.sliderX
        },
    }
}
</script>

<style scoped lang="stylus">
.aniamtion {
    height 600px
}
.custom-appear-active{
    color: blue;
    background: #000;
    transition: all 1s ease;
}
.custom-appear{
    font-size: 40px;
    color: white;
    background: #7798e2;
}
.custom-appear-to{
    color: red;
    background: #1c8942;
}
.line {
    height 1px
    width 100%
    margin 20px 0
    background-color #eee
    overflow hidden
}
// 动画二
.fade-enter,.fade-leave-to {
    opacity 0
}
.fade-enter-active, .fade-leave-active {
    transition 0.35s
}
//动画三
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}

// 动画四
.block {
    width 50px
    height 50px
    background-color skyblue
}
//动画六
.main-container {
    color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 1fr;
  height: 23vh;
}

.upper-container {
  position: relative;
  background: linear-gradient(to bottom right, #5564c2, #3a2e8d);
}
.lower-container {
  background-color: #12132C;
}

.temperature-text {
  position: relative;
  bottom: 40px;
  font-size: 100px;
  width: 100%;
  text-align: center;
  user-select: none;
}

.temperature-element {
  text-align: center;
  display: inline-block;
  width: 40px;
  margin: 0 10px 0 10px;
  opacity: 0.7;
}

.temperature-element-line {
  font-size: 7px;
}

.temperature-graduation {
  position: absolute;
  left: calc(50% - 150px);
  bottom: 25px;
  user-select: none;
}

.slider-container {
  width: 150px;
  height: 80px;
  margin-top: -30px;
  margin-left: calc(50% - 187px);
  position: relative;
}

.slider-button {
  position: absolute;
  left: 42px;
  top: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #2724a2;
  cursor: grab;
  cursor: -webkit-grab;
  cursor: -moz-grab;
}

.slider-icon {
  margin-top: 16px;
  margin-left: 21px;
  color: white;
}
</style>
