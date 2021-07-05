import React from 'react'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'
import { MenuForm } from './MenuForm'
import { useMutation, gql } from '@apollo/client'

const CREATE_MENU = gql`
  mutation createMenu($menu: MenuInput!) {
    createMenu(menu: $menu) {
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

export function CreateMenuWrapper() {
  const title = 'Create Menu'
  const [createMenu] = useMutation(CREATE_MENU, {
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

  return (
    <>
      <SEO title={title} />
      <DashboardLayout title={title}>
        <MenuForm onSubmit={onSubmit} />
      </DashboardLayout>
    </>
  )
}
