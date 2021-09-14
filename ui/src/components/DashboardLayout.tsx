import React from 'react'
import styled from 'styled-components'

export function DashboardLayout({ children, title = '' }) {
  return (
    <DashboardLayoutWrapper className="dashboard">
      <div className="wrapper">
        <h2 className="title">{title}</h2>
        {children}
      </div>
    </DashboardLayoutWrapper>
  )
}

const DashboardLayoutWrapper = styled.div`
  margin-top: var(--largestSpace);
  h2 {
    font-size: var(--h5);
  }
`
