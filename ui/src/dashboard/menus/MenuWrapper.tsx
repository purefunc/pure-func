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
import { MenuKey } from './MenuKey'
import { menuTheme } from './menuTheme'

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

export function MenuWrapper({ isMenuPage = false }) {
  const menuTheme = 'menu-theme__dark'

  const { id } = useParams()
  const { data } = useQuery(GET_MENU, { variables: { _id: id } })
  if (!data) return null

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
    <MenuLayout className={`menu ${menuTheme}`} $isMenuPage={isMenuPage}>
      <SEO title={menu?.title} isMenuPage={isMenuPage} />
      <RestaurantNav name="RESTAURANT NAME" logo="" />
      <div className="menu-content">
        <div className="menu-header">
          <h1 className="menu-title">{menu.title}</h1>
          {menu.description && <p className="menu-description">{menu.description}</p>}
        </div>
        <Grid as="ul" className="categories">
          {categories.map((category) => (
            <MenuCategory category={category} key={category.name} />
          ))}
        </Grid>

        <MenuKey menuKey={menuKey} />
      </div>
    </MenuLayout>
  )
}

const MenuLayout = styled.div`
  ${menuTheme};
  ${({ $isMenuPage }) => $isMenuPage && `height: 100%;`};
  .menu-content {
    max-width: var(--menuMaxWidth);
    margin: 0 auto var(--menuLargestSpace);
    padding: var(--menuSpace);

    .menu-header {
      .menu-title {
        font-size: var(--menuTitleSize);
      }
      .menu-description {
        font-size: var(--menuDescriptionSize);
      }
    }
  }
`
