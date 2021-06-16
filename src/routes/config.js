/*
 * @Author: your name
 * @Date: 2021-06-09 14:30:34
 * @LastEditTime: 2021-06-16 17:15:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\routes\config.js
 */
const routerConfig = [
  {
    path: '/',
    component: '',
    name: 'homePage',
    childRoutes: [
      {
        path: '/route1/:route1Id',
        component: () => import(/* webpackChunkName: 'home1' */ '../pages/home'),
        name: 'route1Page',
        childRoutes: []
      },
      {
        path: '/route2',
        component: () => import(/* webpackChunkName: 'home2' */ '../pages/home'),
        name: 'route2Page',
        childRoutes: [
          {
            path: '/route2/components',
            component: () => import(/* webpackChunkName: 'home3' */ '../pages/home'),
            name: 'componentsPage',
            childRoutes: []
          },
          {
            path: '/route2/props-v-state',
            component: () => import(/* webpackChunkName: 'home4' */ '../pages/home2'),
            name: 'props-v-statePage',
            childRoutes: []
          }
        ]
      }
    ]
  }
]

export default routerConfig
