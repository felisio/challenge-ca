import Vue from 'vue'
import Router from 'vue-router'
import VehicleList from 'modules/Vehicle/VehicleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VehicleList',
      component: VehicleList
    }
  ]
})
