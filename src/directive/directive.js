import Vue from 'vue'

export default () => {
    Vue.directive('Int', {
        inserted: function (el) {
            const INPUT_DOM = el.querySelector('.el-input__inner')
            INPUT_DOM.onkeyup = function () {
                if(INPUT_DOM.value.length === 1) {
                    INPUT_DOM.value = INPUT_DOM.value.replace(/[^1-9]/g, "")
                }else{
                    INPUT_DOM.value = INPUT_DOM.value.replace(/\D/g, "")
                }
            }
        }
    })
    Vue.directive('toBottom', {
        inserted: function (el) {    
            const PARENT_DOM = el.parentElement.parentElement
            console.log(PARENT_DOM.scrollHeight)
            PARENT_DOM.scrollTo(0, PARENT_DOM.scrollHeight)
        }
    })
}