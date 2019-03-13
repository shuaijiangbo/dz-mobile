// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconfont/iconfont.css'
import 'vant/lib/icon/local.css'
import './assets/script/flexable.js'

import vant from 'vant';
import 'vant/lib/index.css';
import './scss/common.scss'

Vue.use(vant);
 import { Button, Row, Col, NavBar, Popup, Icon, Swipe, SwipeItem, Lazyload} from 'vant'
 Vue.use(Button).use(Row).use(Col).use(NavBar).use(Popup).use(Icon).use(Swipe).use(SwipeItem).use(Lazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
