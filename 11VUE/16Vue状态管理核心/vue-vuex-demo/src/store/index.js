import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state:{
    counter:10
  },
  //getters对Vue中的数据进行过滤
  getters:{
    getCounter(state) {
      return state.counter > 0 ? state.counter : "counter数据异常"
    }
  },
  mutations:{
    addCounter(state,number){
      state.counter+=number
    }
  },
  //为异步操作所准备的
  actions:{
    asyncAddCounter({ commit }){
      axios.get("http://iwenwiki.com/api/generator/list.php")
          .then(res =>{
            commit("addCounter",res.data[0])
          })
    }
  }
})
