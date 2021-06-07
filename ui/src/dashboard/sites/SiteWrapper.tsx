import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function SiteWrapper() {
  const title = 'Sites'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>Site goes here</DashboardLayout>
    </>
  )
}
