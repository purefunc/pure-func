import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function TeamsMembers() {
  const title = 'Teams Members'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>I'm the teams members page</p>
      </DashboardLayout>
    </>
  )
}
