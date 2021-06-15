import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function TeamsOverview() {
  const title = 'Teams Overview'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>I'm the teams overview</p>
      </DashboardLayout>
    </>
  )
}
