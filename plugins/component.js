import Vue from 'vue'
import mainLayout from '../components/mainLayout'
import panel from '../components/panel'

Vue.component('main-layout', mainLayout)
Vue.component('panel', panel)

if (process.browser) {
    // 注册全局的提示组件
    const alert = require('../components/alert').default
    const Alert = Vue.prototype.$Alert = new Vue(alert).$mount()
    document.body.appendChild(Alert.$el)
}
