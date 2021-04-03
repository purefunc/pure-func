import React from 'react'
import { SEO } from 'utilities'
import { Section } from 'components'

export function Dashboard() {
  return (
    <>
      <SEO title="Dashboard" pathname="/dashboard" />
      <h1>User Dashboard. shown when logged in</h1>
    </>
  )
}
