import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AboutPage, QrMenuPage, QrMenuBetaPage, NotFoundPage } from './loadables'
import HomePage from '../pages'

const MainLayout = () => {
  return (
    <main id="main">
      <Switch>
        {/* Static Routes */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/qr-menus" component={QrMenuPage} />
        <Route exact path="/qr-menus/beta" component={QrMenuBetaPage} />

        {/* 404 Page */}
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  )
}

export default MainLayout
