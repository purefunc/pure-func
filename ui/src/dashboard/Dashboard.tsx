import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function Dashboard() {
  return (
    <>
      <SEO title="Dashboard" pathname="/dashboard" />
      <DashboardLayout>
        <p>I'm the dashboard</p>
      </DashboardLayout>
    </>
  )
}
