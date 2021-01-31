import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Dashboard, MenuListing, MenuWrapper } from '../dashboard'

// TODO: Add routing for stuff like user settings, menu manager, site template manager etc. Also make sure this cant be hit unless a user is logged in
const DashboardLayout = () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/dashboard/menus" component={MenuListing} />
    <Route path="/dashboard/menus/:id" component={MenuWrapper} />
    <Route render={() => <Redirect to="/dashboard" />} />
  </Switch>
)

export default DashboardLayout
