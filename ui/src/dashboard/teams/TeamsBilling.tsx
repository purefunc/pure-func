import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function TeamsBilling() {
  const title = 'Teams Billing'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <div className="card card--full-width card--lightestGray">
          <p>Coming Soon</p>
        </div>
      </DashboardLayout>
    </>
  )
}
