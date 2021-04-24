import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function Teams() {
  const title = 'Teams'
  return (
    <>
      <SEO title={title} pathname="/dashboard/teams" />
      <DashboardLayout title={title}>
        <p>I'm the teams page</p>
      </DashboardLayout>
    </>
  )
}
