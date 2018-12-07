//刷新后保留数据插件
export default store => {
    //刷新浏览器后第一次做的操作
    if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
    store.subscribe((mutation, state) => {
        localStorage.state = JSON.stringify(state)
    })
}