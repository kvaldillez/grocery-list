import Vue from 'vue'
import Router from 'vue-router'
import GroceryList from '@/components/GroceryList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GroceryList',
      component: GroceryList
    }
  ]
})
