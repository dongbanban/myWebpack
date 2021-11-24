/*
 * @Author: your name
 * @Date: 2021-06-09 14:30:34
 * @LastEditTime: 2021-11-24 14:28:59
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
        component: () => import(/* webpackChunkName: 'home3' */ '../pages/home1'),
        name: 'home1',
        childRoutes: []
      },
      {
        path: '/route2',
        childRoutes: [
          {
            path: '/route2/home',
            component: () => import(/* webpackChunkName: 'home' */ '../pages/home2'),
            name: 'home2',
            childRoutes: []
          },
        ]
      },
      {
        path: '/route3',
        component: () => import(/* webpackChunkName: 'home2' */ '../pages/home3'),
        name: 'home3',
        childRoutes: []
      },
    ]
  }
]

export default routerConfig
