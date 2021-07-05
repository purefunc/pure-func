import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {
  TeamsOverview,
  TeamsBilling,
  TeamsSettings,
  // TeamsMembers,
  MenuListing,
  MenuWrapper,
  CreateMenuWrapper,
  UpdateMenuWrapper,
  // SiteListing,
  // SiteWrapper,
  // SiteFormWrapper,
  // RestaurantListing,
  // RestaurantWrapper,
  // RestaurantFormWrapper,
  // PidListing,
  // PidWrapper,
  // PidFormWrapper,
  UserSettings,
} from '../dashboard'
import { useLocalStorage } from 'hooks'

// TODO Make dashboard 404 page and have redirect go to teams overview page of first team in list

const DashboardLayout = () => {
  const [teamId] = useLocalStorage('team_id', '')

  return (
    <Switch>
      {/* Teams */}
      <Route exact path="/dashboard/teams/:id/overview" component={TeamsOverview} />
      <Route exact path="/dashboard/teams/:id/billing" component={TeamsBilling} />
      <Route exact path="/dashboard/teams/:id/settings" component={TeamsSettings} />
      {/* <Route exact path="/dashboard/teams/:id/members" component={TeamsMembers} /> */}
      {/* Restaurants */}
      {/* <Route exact path="/dashboard/teams/:id/restaurants" component={RestaurantListing} />
    <Route exact path="/dashboard/restaurants/:id" component={RestaurantWrapper} />
    <Route exact path="/dashboard/restaurants/:id/edit" component={RestaurantFormWrapper} />
    <Route exact path="/dashboard/new/restaurant" component={RestaurantFormWrapper} /> */}
      {/* Menus */}
      <Route exact path="/dashboard/teams/:id/menus" component={MenuListing} />
      <Route exact path="/dashboard/menus/:id" component={MenuWrapper} />
      <Route exact path="/dashboard/menus/:id/edit" component={UpdateMenuWrapper} />
      <Route exact path="/dashboard/new/menu" component={CreateMenuWrapper} />
      {/* Sites */}
      {/* <Route exact path="/dashboard/teams/:id/sites" component={SiteListing} />
    <Route exact path="/dashboard/sites/:id" component={SiteWrapper} />
    <Route exact path="/dashboard/sites/:id/edit" component={SiteFormWrapper} />
    <Route exact path="/dashboard/new/site" component={SiteFormWrapper} /> */}
      {/* Pid */}
      {/* <Route exact path="/dashboard/teams/:id/pid" component={PidListing} />
    <Route exact path="/dashboard/pid/:id" component={PidWrapper} />
    <Route exact path="/dashboard/pid/:id/edit" component={PidFormWrapper} />
    <Route exact path="/dashboard/new/pid" component={PidFormWrapper} /> */}
      {/* User */}
      <Route exact path="/dashboard/user/settings" component={UserSettings} />
      <Route render={() => <Redirect to={`/dashboard/teams/${teamId}/overview`} />} />
    </Switch>
  )
}

export default DashboardLayout
