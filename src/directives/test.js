export default {
//   自定义指令钩子函数 bind(自由当前节点) inserted(挂在到父节点) update(组件节点更新调用)
    bind(el){
        console.log(el)
        console.log(el.getElementsByTagName("li")[0])
    }
}