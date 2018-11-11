<template>
    <div class="chat">
        <el-card class="box-card">
            <div class="chat-panel"
                
            >
                <transition-group name="fade" tag="div">
                    <el-row class="dialog-item" 
                            v-for="(item, index) in dialogs" :key="index"
                            :class="item.target ? 'me' : 'you'"
                            v-toBottom
                    >
                        <div class="avatar"><img :src="avatar(item.target)" alt=""></div>
                        <div class="dialog">{{item.text}}</div>
                    </el-row>
                </transition-group>
            </div>
            <div class="el-row">
                <el-col :span="20">
                    <el-input v-model="mineMsg" @keyup.enter.native="sendMsg"></el-input>
                </el-col>
                <el-col :span="3" :offset="1">
                    <el-button type="primary" @click="sendMsg">发送</el-button>
                </el-col>
            </div>
        </el-card>
    </div>
</template>

<script type="text/ecmascript-6">
import YOU from '@/assets/img/you.jpg'
import ME from '@/assets/img/me.jpg'

export default {
    data() {
        return {
            dialogs: [
                { target: 0, text: '你好' },
                { target: 0, text: '在吗' },
                { target: 1, text: '在' },
                { target: 1, text: '有什么事？' },
                { target: 1, text: '？？' },
                { target: 1, text: '？？' },
                { target: 1, text: '？？' },
                { target: 1, text: '咋回事小老弟' },
            ],
            mineMsg: ''
        };
    },
    computed:{
    },
    components: {},
    methods:{
        avatar(isMe){
            return isMe ? ME : YOU
        },
        sendMsg(){
            this.dialogs.push({target: 1, text: this.mineMsg})
            this.mineMsg = ''
        }
    }
};
</script>

<style scoped lang="stylus">
.chat {
    margin 20px 60px 0
    .chat-panel {
        height 400px
        border-radius 5px
        border 1px solid #dcdfe6
        margin-bottom 20px
        text-align left 
        padding 5px 10px
        overflow auto
        &::-webkit-scrollbar {
            display none
        }
        .dialog-item {
            position relative
            line-height 54px
            margin-top 10px
            .avatar{
                width 50px
                height 50px
                border-radius 50%
                overflow hidden
                img {
                    width 100%
                    height 100%
                }
            }
            .dialog {
                display inline-block
                position: relative;
                box-sizing border-box
                line-height 30px
                font-size 14px
                padding 5px 10px
                height 40px
                border: 1px solid #dcdfe6;
                background-color: #fff; 
                border-radius 5px
            }
            &.you {
                .avatar {
                    float left 
                }
                .dialog {
                    margin-left 10px
                    margin-right 0
                } 
            }
            &.me {
                text-align right 
                .avatar {
                    float right
                }
                .dialog {
                    margin-left 0
                    margin-right 10px
                }
            }
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform translateY(-10px)
}
</style>
