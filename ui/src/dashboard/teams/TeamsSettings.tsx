import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function TeamsSettings() {
  const title = 'Teams Settings'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>I'm the teams settings</p>
      </DashboardLayout>
    </>
  )
}
