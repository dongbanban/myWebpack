import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import RouterLayout from '../layout/layout'
import Home from '../home'
import routerConfig from './config'

const createRouter = data => {
  return (
    <Switch key="switch">
      {data.map(routerItem => {
        const { path, component, name, childRoutes = [] } = routerItem
        if (childRoutes.length === 0) {
          return <Route path={`${path}`} key={name} component={Home} />
        }
        return createRouter(childRoutes)
      })}
    </Switch>
  )
}

export default function RouterView() {
  return (
    <HashRouter basename="/">
      <RouterLayout>
        <div>{createRouter(routerConfig)}</div>
      </RouterLayout>
    </HashRouter>
  )
}
