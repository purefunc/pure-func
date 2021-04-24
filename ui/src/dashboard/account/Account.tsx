import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function Account() {
  const title = 'Account'
  return (
    <>
      <SEO title={title} pathname="/dashboard/account" />
      <DashboardLayout title={title}>
        <p>I'm the account page</p>
      </DashboardLayout>
    </>
  )
}
