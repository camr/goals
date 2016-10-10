import Vue from 'vue'
import Keen from 'keen-ui'
import App from './App'

Vue.use(Keen)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
