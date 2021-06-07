import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function PidListing() {
  const title = 'PID Listing'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>I'm the pid listing page</p>
      </DashboardLayout>
    </>
  )
}
