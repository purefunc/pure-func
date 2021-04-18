import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function MenuListing() {
  return (
    <>
      <SEO title="Menu Listing" pathname="/dashboard/menus" />
      <DashboardLayout>
        <p>I'm the menu listing</p>
      </DashboardLayout>
    </>
  )
}
