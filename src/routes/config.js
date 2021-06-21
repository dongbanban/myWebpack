/*
 * @Author: your name
 * @Date: 2021-06-09 14:30:34
 * @LastEditTime: 2021-06-21 17:51:47
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
            path: '/route2/home',
            component: () => import(/* webpackChunkName: 'home3' */ '../pages/home'),
            name: 'home',
            childRoutes: []
          },
          {
            path: '/route2/home2',
            component: () => import(/* webpackChunkName: 'home4' */ '../pages/home2'),
            name: 'home2',
            childRoutes: []
          }
        ]
      }
    ]
  }
]

export default routerConfig
