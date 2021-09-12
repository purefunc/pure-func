import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'

const GET_TEAM = gql`
  query team($_id: ID!) {
    team(_id: $_id) {
      name
    }
  }
`

export function TeamsOverview() {
  const { id } = useParams()
  const { data } = useQuery(GET_TEAM, { variables: { _id: id } })

  if (!data) return null
  const { team } = data

  const title = `${team.name || 'Teams'} Overview`
  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <p>Coming Soon</p>
      </DashboardLayout>
    </>
  )
}
