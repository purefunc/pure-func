import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'
import { Grid } from 'styles'
import { MenuCard } from './MenuCard'

export function MenuListing() {
  const title = 'My  Menus'
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
