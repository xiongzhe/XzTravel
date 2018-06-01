import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  // actions: {
  //   //ctx是上下文
  //   changeCity (ctx, city) {
  //     //这个方法是mutations中的changeCity方法
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: mutations,
  //getters有点类似组件中的computed计算属性的作用，需要根据state中的数据算出新数据可以用到getters
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
