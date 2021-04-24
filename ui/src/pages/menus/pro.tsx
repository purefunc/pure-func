import React from 'react'
import { SEO } from 'utilities'
import { ProMenu, MenuLayout } from 'components'

export default function ProPage() {
  return (
    <>
      <SEO title="Pro Menu" pathname="menus/pro" />
      <MenuLayout>
        <ProMenu />
      </MenuLayout>
    </>
  )
}
