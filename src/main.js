
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import store from './store'
import router from './router'

window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false

new Vue({
store,
router,
render: h => h(App),
}).$mount('#app')
