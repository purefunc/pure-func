import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  AboutPage,
  QrMenuPage,
  QrMenuBetaPage,
  QrMenuExamplesPage,
  NotFoundPage,
  DashboardLayout,
  QrMenuPlansPage,
} from './loadable'
import HomePage from '../pages'

const SiteLayout = () => {
  return (
    <main id="main">
      <Switch>
        {/* Static Pages */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/qr-menus" component={QrMenuPage} />
        <Route exact path="/qr-menus/beta" component={QrMenuBetaPage} />
        <Route exact path="/qr-menus/examples" component={QrMenuExamplesPage} />
        <Route exact path="/qr-menus/plans" component={QrMenuPlansPage} />
        {/* Layouts */}
        <Route path="/dashboard" component={DashboardLayout} />
        {/* 404 Page */}
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  )
}

export default SiteLayout