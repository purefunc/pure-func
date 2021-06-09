import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function RestaurantFormWrapper() {
  const title = ''
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>I'm the restaurants form wrapper page</p>
      </DashboardLayout>
    </>
  )
}