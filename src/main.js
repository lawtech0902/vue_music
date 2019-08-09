import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

// 解决移动端click事件300ms延迟问题
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')