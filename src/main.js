import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// mixins
import './mixins'

// Import Plugins
import './plugins/element.js'
import './plugins/vue-sweetalert2'
import './plugins/vee-validate'
import './plugins/vue-lodash'
import './plugins/vee-validate'

Vue.config.productionTip = false
window.Bus = new Vue({ name: 'Bus' })

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
