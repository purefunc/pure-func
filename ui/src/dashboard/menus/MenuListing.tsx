import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'
import { MenuCard } from './MenuCard'
import { Grid } from 'styles'

export function MenuListing() {
  const title = 'Menu Listing'
  return (
    <>
      <SEO title={title} pathname="/dashboard/menus" />
      <DashboardLayout title={title}>
        <Grid cols={[1, 1, 2]}>
          <MenuCard />
          <MenuCard />
        </Grid>
      </DashboardLayout>
    </>
  )
}
