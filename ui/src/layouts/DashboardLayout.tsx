import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Dashboard, MenuListing, MenuWrapper, SiteListing, SiteWrapper, Account, Teams } from '../dashboard'
import { MenuFormWrapper } from '../dashboard/menus/MenuFormWrapper'
import { SiteFormWrapper } from '../dashboard/sites/SiteFormWrapper'

// TODO: Add routing for stuff like user settings, menu manager, site template manager etc. Also make sure this cant be hit unless a user is logged in
const DashboardLayout = () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/dashboard/teams" component={Teams} />
    <Route exact path="/dashboard/account" component={Account} />
    <Route exact path="/dashboard/menus" component={MenuListing} />
    <Route path="/dashboard/menus/edit/:id" component={MenuFormWrapper} />
    <Route exact path="/dashboard/menus/new" component={MenuFormWrapper} />
    <Route path="/dashboard/menus/:id" component={MenuWrapper} />
    <Route exact path="/dashboard/sites" component={SiteListing} />
    {/* <Route path="/dashboard/sites/:id" component={SiteWrapper} />
    <Route path="/dashboard/sites/edit/:id" component={SiteFormWrapper} /> */}
    <Route render={() => <Redirect to="/dashboard" />} />
  </Switch>
)

export default DashboardLayout
