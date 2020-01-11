import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'reflect-metadata'
import router from './router'
import store from './store'
import './quasar'
import HelloWorld from '@/components/HelloWorld.vue'
import SidePanel from '@/components/layoutElements/sidePanel/SidePanel.vue'
import MainToolbar from '@/components/layoutElements/mainToolbar/MainToolbar.vue'
import {Kernel} from '@/kernel'

Vue.component('hello-world', HelloWorld)
Vue.component('side-panel', SidePanel)
Vue.component('main-toolbar', MainToolbar)

Vue.config.productionTip = false



const main = async () => {
  await Kernel.get()
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app')
}

main()
