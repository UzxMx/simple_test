/* eslint no-console: 0, no-new: 0, no-unused-vars: 0 */

import BabelPolyfill from 'babel-polyfill' // use reference to prevent tree shaking
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import store from './store'
import router from './router'
import App from './App'

Vue.use(Mint)

document.addEventListener('DOMContentLoaded', () => {
  const node = document.createElement('div')
  document.body.appendChild(node)
  new Vue({
    store,
    router,
    el: node,
    render: h => h(App)
  })
})
