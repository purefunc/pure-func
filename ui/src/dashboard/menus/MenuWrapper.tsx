import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { SEO } from 'utilities'
import { Grid } from 'styles'
import { DashboardLayout } from 'components'
import { MenuCategory } from './MenuCategory'
import { RestaurantNav } from '../../layouts/Header/RestaurantNav'
import { menuKey } from '../../constants'

const GET_MENU = gql`
  query menu($_id: ID!) {
    menu(_id: $_id) {
      _id
      title
      description
      logo
      bgImage
      categories {
        name
        _id
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
    }
  }
`

export function MenuWrapper() {
  const { id } = useParams()
  const { data } = useQuery(GET_MENU, { variables: { _id: id } })
  if (!data) return null
  console.log('data', data)
  const { menu } = data

  const note = {
    description: 'everything contains a ton of gluten, dairy, meat, and peanuts',
  }
  const item = {
    id: 'A1', // Custom ID to tie to POS
    name: 'Shrimp poppers',
    description:
      'these little guys will probably fill you up but if you stick a finger down the throat before your food comes you will be good to eat again',
    price: '19.99',
    images: [],
    notes: [note, note, note],
    tags: [menuKey.vegan, menuKey.medium],
    isAvailable: true, // If false, greyed out and says 'currently not available'
  }
  const category = {
    name: 'Appetizers',
    images: [],
    description: 'Stuff to pop down the hatch while waiting for the main course to arrive',
    price: '', // Only used if set price for all items in category
    notes: [note],
    items: [item, item, item, item, item],
  }

  const categories = [category, category, category]

  if (!menu)
    return (
      <DashboardLayout>
        <div className="margin-auto text-center">
          <h3 className="margin-top-0 margin-auto">Menu could not be found</h3>
          <p className="margin-auto">You might not have access to this or the ID could be expired</p>
        </div>
      </DashboardLayout>
    )

  return (
    <>
      <SEO title={`Menu - ${menu?.title}`} />
      <RestaurantNav name="RESTAURANT NAME" logo="" />
      <MenuLayout>
        <div className="menu-header">
          <h1>{menu.title}</h1>
          {menu.description && <h4>{menu.description}</h4>}
        </div>
        <Grid as="ul" className="categories">
          {categories.map((category) => (
            <MenuCategory category={category} key={category.name} />
          ))}
        </Grid>
        <h6>Key</h6>
        <MenuKey>
          {Object.entries(menuKey).map(([key, { symbol, name, description }]) => (
            <li key={key}>
              {symbol} {name} {description && `(${description})`}
            </li>
          ))}
        </MenuKey>
      </MenuLayout>
    </>
  )
}

const MenuLayout = styled.div`
  max-width: 940px;
  margin: 0 auto var(--largestSpace);
  padding: var(--space);
  .menu-header {
  }
`

const MenuKey = styled.ul`
  border-radius: var(--cardRadius);
  border: 1px solid var(--black);
  li {
    margin: var(--space);
  }
`
