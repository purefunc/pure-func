import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function UserSettings() {
  const title = 'User Settings'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>I'm the user settings page</p>
      </DashboardLayout>
    </>
  )
}
