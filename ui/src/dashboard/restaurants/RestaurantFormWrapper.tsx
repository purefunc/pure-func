import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function RestaurantFormWrapper() {
  const title = ''
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>Coming Soon</p>
      </DashboardLayout>
    </>
  )
}
