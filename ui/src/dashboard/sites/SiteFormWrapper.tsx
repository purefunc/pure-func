import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function SiteFormWrapper() {
  const title = 'Sites'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>Site Form coming soon</DashboardLayout>
    </>
  )
}
