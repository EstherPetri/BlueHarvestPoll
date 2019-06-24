import Vue from 'vue'
import App from './App'
import 'es6-promise/auto'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Bulma from 'bulma'
import Vuetify from 'vuetify'

// Load global scss
import "./assets/_variables.scss"
import "./assets/_buttons.scss"

Vue.use(Vuetify)
Vue.use(Bulma)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

