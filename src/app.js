import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import './stylus/main.styl'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: createElement => createElement(App)
})
