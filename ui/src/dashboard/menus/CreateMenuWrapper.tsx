import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation, gql } from '@apollo/client'
import { SEO } from 'utilities'
import { DashboardLayout } from 'components'
import { MenuForm } from './MenuForm'

const CREATE_MENU = gql`
  mutation createMenu($menu: MenuInput!) {
    createMenu(menu: $menu) {
      title
      description
      logo
      bgImage
      team
      _id
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
  const history = useHistory()
  const title = 'Create Menu'
  const [createMenu] = useMutation(CREATE_MENU, {
    refetchQueries: ['menus'],
  })

  const onSubmit = (data: MenuInput) => {
    {
      createMenu({
        variables: { menu: data },
      })
        .then((result) => {
          history.push(`/dashboard/teams/${result.data.createMenu._id}/menus`)
        })
        .catch((e) => {
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
