import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Components from '@/views/Components'
// import Resume from '@/views/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: Homepage
    },
    {
      path: '/projects',
      name: 'projects',
      component: Homepage
    },
    {
      path: '/components',
      name: 'components',
      component: Components
    },
    {
      path: '/services',
      name: 'services',
      component: Homepage
    }
  ]
})
