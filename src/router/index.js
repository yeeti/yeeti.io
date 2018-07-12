import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/views/Homepage'
import Resume from '@/views/Resume'

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
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/partners',
      name: 'partners',
      component: Homepage
    }
  ]
})
