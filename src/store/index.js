// vue3中创建store实例对象的方法createStore()按需引入
import { createStore } from 'vuex'
export default createStore({
  //准备state——用于存储数据
  state: {
    currentColor : "pink",
  },
  //准备mutations——用于操作数据
  mutations: {
    changeColor(state, value) {
      state.currentColor = value;
    }
  },
  //准备actions——用于响应组件中的动作
  actions: {

  },
  //准备getters——用于将state中的数据进行加工
  getters: {
  },
  modules: {
  }
})