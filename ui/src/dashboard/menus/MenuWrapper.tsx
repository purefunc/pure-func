import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

export function MenuWrapper() {
  const id = '123'
  const title = 'Menu'
  return (
    <>
      <SEO title={title} pathname={`/dashboard/menus/${id}`} />
      <DashboardLayout title={title}>Menu Form goes here</DashboardLayout>
    </>
  )
}
