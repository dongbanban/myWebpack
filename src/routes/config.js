/*
 * @Author: your name
 * @Date: 2021-06-09 14:30:34
 * @LastEditTime: 2021-06-10 10:45:27
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
        component: () => import('../home'),
        name: 'route1Page',
        childRoutes: []
      },
      {
        path: '/route2',
        component: () => import('../home'),
        name: 'route2Page',
        childRoutes: [
          {
            path: '/route2/components',
            component: () => import('../home'),
            name: 'componentsPage',
            childRoutes: []
          },
          {
            path: '/route2/props-v-state',
            component: () => import('../home'),
            name: 'props-v-statePage',
            childRoutes: []
          }
        ]
      }
    ]
  }
]

export default routerConfig
