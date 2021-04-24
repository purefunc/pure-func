import React from 'react'
import { SEO } from 'utilities'
import { BasicMenu, MenuLayout } from 'components'

export default function BasicPage() {
  return (
    <>
      <SEO title="Basic Menu" pathname="menus/basic" />
      <MenuLayout>
        <BasicMenu />
      </MenuLayout>
    </>
  )
}
