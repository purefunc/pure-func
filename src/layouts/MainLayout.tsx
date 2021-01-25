import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loader from 'utilities/Loader'
import Home from '../pages'

export const About = Loadable({
  loader: async () => {
    const c = await import('../pages/about')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

export const NotFound = Loadable({
  loader: async () => {
    const c = await import('../pages/not-found')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

const MainLayout = () => {
  return (
    <main id="main">
      <Switch>
        {/* Static Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {/* 404 Page */}
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}

export default MainLayout
