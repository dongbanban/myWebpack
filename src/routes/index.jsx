import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import RouterLayout from '@/layout/layout'
import Loading from './loading'
import routerConfig from './config'

const getLoadableComponent = loader => {
  const config = {
    loader,
    loading: Loading,
    delay: 3000
  }
  return Loadable(config)
}

const createRouterView = data => {
  return (
    data.map(routerItem => {
      const { path, component, name, childRoutes = [] } = routerItem
      if (childRoutes.length > 0) {
        return createRouterView(childRoutes)
      }
      return <Route path={`${path}`} key={name} component={getLoadableComponent(component)} />
    })
  )
}

const RouterView = () => (
  <HashRouter basename="/">
    <RouterLayout>
      <Switch key="switch">
        {createRouterView(routerConfig)}
      </Switch>
    </RouterLayout>
  </HashRouter>
)

export default RouterView
