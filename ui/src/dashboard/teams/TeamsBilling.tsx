import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function TeamsBilling() {
  const title = 'Teams Billing'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>I'm the teams billing page</p>
      </DashboardLayout>
    </>
  )
}
