/*
 * @Author: your name
 * @Date: 2021-06-09 14:30:34
 * @LastEditTime: 2021-06-09 17:36:22
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
        component: '',
        name: 'route1Page',
        childRoutes: []
      },
      {
        path: '/route2',
        component: '',
        name: 'route2Page',
        childRoutes: [
          {
            path: '/route2/components',
            component: '',
            name: 'componentsPage',
            childRoutes: []
          },
          {
            path: '/route2/props-v-state',
            component: '',
            name: 'props-v-statePage',
            childRoutes: []
          }
        ]
      }
    ]
  }
]

export default routerConfig
