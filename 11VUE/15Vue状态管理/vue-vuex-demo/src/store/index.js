import {createStore} from "vuex"
//Vuex的核心作用就是帮助我们管理组件之间的状态
export default createStore({
    state: {
        counter:10
    },
    //getters对Vue中的数据进行过滤
    getters:{
        getCounter(state) {
            return state.counter > 0 ? state.counter : "counter数据异常"
        }
    }
})
