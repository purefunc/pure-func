import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminDashboard from '../admin'

// TODO: Add routing for stuff like tracking users, purchases, etc. Also make sure this cant be hit unless a user is an admin
const DashboardLayout = () => (
  <Switch>
    <Route exact path="/admin" component={AdminDashboard} />
  </Switch>
)

export default DashboardLayout
