import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages'
import AboutPage from '../pages/aboutpage'
import MenusPage from '../pages/menus'
import BasicMenu from '../pages/menus/basic'
import ProMenu from '../pages/menus/pro'
import ExpertMenu from '../pages/menus/expert'
import BetaPage from '../pages/beta'
import NotFoundPage from '../pages/404'
import ContactPage from '../pages/contact'
import ServicesPage from '../pages/services'
import SitesPage from '../pages/sites'

import DashboardLayout from './DashboardLayout'

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
        <Route exact path="/menus/basic" component={BasicMenu} />
        <Route exact path="/menus/pro" component={ProMenu} />
        <Route exact path="/menus/expert" component={ExpertMenu} />
        <Route exact path="/beta" component={BetaPage} />
        {/* <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/terms" component={TermsPage} /> */}
        {/* Layouts */}
        <Route path="/dashboard" component={DashboardLayout} />
        {/* 404 Page */}
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  )
}

export default SiteLayout
