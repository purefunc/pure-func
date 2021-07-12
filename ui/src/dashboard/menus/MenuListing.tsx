import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams, Link } from 'react-router-dom'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'
import { Button } from 'components/Button'
import { Grid } from 'styles'
import { MenuCard } from './MenuCard'

const GET_TEAM = gql`
  query team($_id: ID!) {
    team(_id: $_id) {
      menus {
        title
        _id
        description
        logo
        categories {
          _id
          name
          images
          description
          price
          notes {
            _id
            description
          }
          items {
            _id
            id
            name
            description
            price
            images
            notes {
              _id
              description
            }
            tags {
              _id
              name
              symbol
              description
            }
            isAvailable
          }
        }
        bgImage
      }
    }
  }
`

export function MenuListing() {
  const title = 'Menus'
  const { id } = useParams()

  const { data } = useQuery(GET_TEAM, { variables: { _id: id } })
  if (!data) return null
  const {
    team: { menus },
  } = data

  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        {menus.length > 0 ? (
          <Grid cols={[1, 1, 2]}>
            {menus.map((menu) => (
              <MenuCard menu={menu} key={menu._id} />
            ))}
          </Grid>
        ) : (
          <div>
            <p>Looks like your team doesn't have any menus yet</p>
            <Button as={Link} to="/dashboard/new/menu">
              + Add Menu
            </Button>
          </div>
        )}
      </DashboardLayout>
    </>
  )
}
