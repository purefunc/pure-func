import React from 'react'
import styled from 'styled-components'

export function DashboardLayout({ children }) {
  return (
    <DashboardLayoutWrapper className="dashboard">
      <div className="wrapper">
        <div className="card card--line card--full-width card--lightestGray">{children}</div>
      </div>
    </DashboardLayoutWrapper>
  )
}

const DashboardLayoutWrapper = styled.div`
  margin-top: var(--largestSpace);
`
