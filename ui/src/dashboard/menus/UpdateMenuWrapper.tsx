import React from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, gql, useQuery } from '@apollo/client'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'
import { MenuForm } from './MenuForm'

const UPDATE_MENU = gql`
  mutation updateMenu($menu: MenuInput!) {
    createMenu(menu: $menu) {
      title
      description
      logo
      bgImage
    }
  }
`

const GET_MENU = gql`
  query menu($_id: ID!) {
    menu(_id: $_id) {
      _id
      title
      description
      logo
      bgImage
    }
  }
`

// TODO Refactor to graphql-codegen
type MenuInput = {
  title: string
  description: string
  logo: string
  bgImage: string
}

export function UpdateMenuWrapper() {
  const { id } = useParams()
  const { data } = useQuery(GET_MENU, { variables: { _id: id } })
  const [createMenu] = useMutation(UPDATE_MENU, {
    refetchQueries: ['menus'],
  })

  const onSubmit = (data: MenuInput) => {
    {
      console.log('data', data)
      createMenu({
        variables: { menu: data },
      }).catch((e) => {
        console.error(e)
      })
    }
  }

  const title = 'Update Menu'

  if (!data) return null
  const { menu } = data

  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <MenuForm onSubmit={onSubmit} menu={menu} />
      </DashboardLayout>
    </>
  )
}
