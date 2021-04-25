import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function SiteWrapper() {
  const id = '123'
  const title = 'Sites'
  return (
    <>
      <SEO title={title} pathname={`/dashboard/sites/${id}`} />
      <DashboardLayout title={title}>Site Form goes here</DashboardLayout>
    </>
  )
}
