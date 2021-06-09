import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function PidFormWrapper() {
  const title = ''
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>I'm the pid form wrapper page</p>
      </DashboardLayout>
    </>
  )
}
