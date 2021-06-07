import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function RestaurantWrapper() {
  const title = 'Restaurant'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>I'm the restaurant page</p>
      </DashboardLayout>
    </>
  )
}
