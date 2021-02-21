import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const HomePage = lazy(() => import('../pages'))
const AboutPage = lazy(() => import('../pages/about'))
const MenusPage = lazy(() => import('../pages/menus'))
const MenusBetaPage = lazy(() => import('../pages/menus/beta'))
const MenusExamplesPage = lazy(() => import('../pages/menus/examples'))
const NotFoundPage = lazy(() => import('../pages/404'))
const MenusPlansPage = lazy(() => import('../pages/menus/plans'))
const ContactPage = lazy(() => import('../pages/contact'))
const ServicesPage = lazy(() => import('../pages/services'))
const SitesPage = lazy(() => import('../pages/sites'))

const DashboardLayout = lazy(() => import('./DashboardLayout'))

const SiteLayout = () => {
  return (
    <main id="main">
      <Suspense fallback={<div />}>
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
      </Suspense>
    </main>
  )
}

export default SiteLayout
