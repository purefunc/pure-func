import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'
import { Grid } from 'styles'
import { MenuCard } from './MenuCard'
import { useQuery, gql } from '@apollo/client'

const GET_MENUS = gql`
  query menus {
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
`

export function MenuListing() {
  const title = 'My  Menus'

  const { data } = useQuery(GET_MENUS)
  if (!data) return null
  const { menus } = data
  console.log(menus)

  return (
    <>
      <SEO title={title} pathname="/dashboard/menus" />
      <DashboardLayout title={title}>
        <Grid cols={[1, 1, 2]}>
          {menus.map(menu => (
            <MenuCard menu={menu} key={menu._id} />
          ))}
        </Grid>
      </DashboardLayout>
    </>
  )
}
