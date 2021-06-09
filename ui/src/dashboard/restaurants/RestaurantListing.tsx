import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function RestaurantListing() {
  const title = 'Restaurant Listing'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>I'm the restaurant listing page</p>
      </DashboardLayout>
    </>
  )
}