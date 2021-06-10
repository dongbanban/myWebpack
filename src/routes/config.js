/*
 * @Author: your name
 * @Date: 2021-06-09 14:30:34
 * @LastEditTime: 2021-06-10 11:41:25
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
        component: () => import('../pages/home'),
        name: 'route1Page',
        childRoutes: []
      },
      {
        path: '/route2',
        component: () => import('../pages/home'),
        name: 'route2Page',
        childRoutes: [
          {
            path: '/route2/components',
            component: () => import('../pages/home'),
            name: 'componentsPage',
            childRoutes: []
          },
          {
            path: '/route2/props-v-state',
            component: () => import('../pages/home'),
            name: 'props-v-statePage',
            childRoutes: []
          }
        ]
      }
    ]
  }
]

export default routerConfig
