import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'
import { Grid } from 'styles'
import { SiteCard } from './SiteCard'

export function SiteListing() {
  const title = 'Sites Listing'
  return (
    <>
      <SEO title={title} pathname="/dashboard/sites" />
      <DashboardLayout title={title}>
        <Grid>
          <SiteCard />
          <SiteCard />
        </Grid>
      </DashboardLayout>
    </>
  )
}
