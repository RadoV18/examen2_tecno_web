import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import VueRouter from 'vue-router'

// import Destacados from './views/Destacados'
// import Clasificados from './views/Clasificados'

// Vue.use(VueRouter)

Vue.config.productionTip = false

// const PageRouter = new VueRouter({
//   mode: 'history',
//   routes: [
//     { path: '/', component: Destacados },
//     { path: '/clasificados', component: Clasificados }
//   ]
// })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
