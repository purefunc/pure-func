import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function Dashboard() {
  const title = 'Dashboard'
  return (
    <>
      <SEO title={title} pathname="/dashboard" />
      <DashboardLayout title={title}>
        <p>I'm the dashboard</p>
      </DashboardLayout>
    </>
  )
}
