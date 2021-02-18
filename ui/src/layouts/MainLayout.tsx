import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  AboutPage,
  MenusPage,
  MenusBetaPage,
  MenusExamplesPage,
  NotFoundPage,
  DashboardLayout,
  MenusPlansPage,
  ContactPage,
  ServicesPage,
  SitesPage,
} from './loadable'
import HomePage from '../pages'

const SiteLayout = () => {
  return (
    <main id="main">
      <Switch>
        {/* Static Pages */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/sites" component={SitesPage} />
        <Route exact path="/menus" component={MenusPage} />
        <Route exact path="/menus/beta" component={MenusBetaPage} />
        <Route exact path="/menus/examples" component={MenusExamplesPage} />
        <Route exact path="/menus/plans" component={MenusPlansPage} />
        {/* Layouts */}
        <Route path="/dashboard" component={DashboardLayout} />
        {/* 404 Page */}
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  )
}

export default SiteLayout
