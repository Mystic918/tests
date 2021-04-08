export default (Vue) => {
   return class LazyClass{
       constructor(options){this.options = options}
       add(el){
            Vue.nextTick(()=>{
                console.log(el.parentNode)
            })
       }
   }
}