import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default.vue'
import BlankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import GoodsList from '@/page/goodsList.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DefaultPage',
      component: DefaultPage,
      // 每次进入主界面，重定向到index页面
      redirect: {
        path: '/index'
      },
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'changeCity',
          name: 'changeCity',
          component: ChangeCity
        },
        {
          path: 's/:name',
          name: 'goods',
          component: GoodsList
        }
      ]
    },
    {
      path: '/blank',
      name: 'BlankPage',
      component: BlankPage
    }
  ]
})
