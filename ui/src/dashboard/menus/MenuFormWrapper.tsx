import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'
import { MenuForm } from './MenuForm'

export function MenuFormWrapper() {
  const title = 'Menu'
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <MenuForm />
      </DashboardLayout>
    </>
  )
}
