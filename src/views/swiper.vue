<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide
            v-for="(item,index) in swiperItem"
            :key="index"
    >
        <div 
            class="cus-slide-item"
            :style="{'backgroundImage': `url(${item.url})`}"
        >
            <div class="text" :class="{active: index === currentIndex}">
                <div class="typings">
                    <vue-typed-js @onComplete="complete" :showCursor="true" :startDelay="350" :strings="[`${item.text}`]" v-if="currentIndex === index">
                        <h1><span class="typing"></span></h1>
                    </vue-typed-js>
                </div>
            </div>
        </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { VueTypedJs } from 'vue-typed-js'


export default {
    data() {
        return {
            swiperItem: [
                { url:  'https://dummyimage.com/800x600/FF7F00/FF7F00', text: '轮播slide 1' },
                { url:  'https://dummyimage.com/800x600/EE6AA7/EE6AA7', text: 'slide 2' },
                { url:  'https://dummyimage.com/800x600/E0EEEE/E0EEEE', text: 'slide 3' },
                { url:  'https://dummyimage.com/800x600/B4EEB4/B4EEB4', text: 'slide 4' },
                { url:  'https://dummyimage.com/800x600/B0E2FF/B0E2FF', text: 'slide 5' },
                { url:  'https://dummyimage.com/800x600/969696/969696', text: 'slide 6' },
                { url:  'https://dummyimage.com/800x600/6E8B3D/6E8B3D', text: 'slide 7' },
                { url:  'https://dummyimage.com/800x600/6959CD/6959CD', text: 'slide 8' },
            ],
            currentIndex: '',
            swiperOption: {
                effect: 'fade',
                crossFade: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    slideChangeTransitionEnd: (e) => {
                        this.currentIndex = this.swiper.activeIndex
                    }
                }
            }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.currentIndex = this.swiper.activeIndex
    //   this.swiper.slideTo(3, 1000, false)
    },
    methods: {
        complete() {
            const CURSOR_DOM = document.querySelector('.typed-cursor')
            CURSOR_DOM.style.opacity = '0'
        }
    },
    components: {
        swiper,
        swiperSlide,
        VueTypedJs
    }
}
</script>
<style lang="stylus" scoped>
.cus-slide-item {
    width 100%
    height 350px
    background-size cover
    position relative
    .text {
        position absolute
        left 20px
        bottom 10px
        font-size 24px
        width 0px
        opacity .2
        transition width .5s, opacity .35s
        white-space nowrap
        padding 15px
        &.active {
            opacity 1
        }
    }
}

@keyframes typing {
  from { width: 0; }
  to { width: 3.5em; }
}
@keyframes blink-caret {
  from, to { box-shadow: 1px 0 0 0 transparent; }
  50% { box-shadow: 1px 0 0 0; }
}
</style>
