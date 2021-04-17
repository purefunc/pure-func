import React from 'react'
import { SEO } from 'utilities'
import { Section } from 'components'
import { DashboardLayout } from '../styles/layouts'

export function Dashboard() {
  return (
    <>
      <SEO title="Dashboard" pathname="/dashboard" />
      <DashboardLayout className="dashboard">
        <div className="wrapper">
          <div className="card card--line card--full-width">
            <p>I'm the dashboard</p>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}
