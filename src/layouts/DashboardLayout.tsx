import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from '../dashboard'

// TODO: Add routing for stuff like user settings, menu manager, site template manager etc. Also make sure this cant be hit unless a user is logged in
const DashboardLayout = () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    {/* <Route path="/dashboard/qr/:restaurant/:menu" component={Menu} /> */}
    <Route render={() => <Redirect to="/dashboard" />} />
  </Switch>
)

export default DashboardLayout
