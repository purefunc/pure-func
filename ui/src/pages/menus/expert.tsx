import React from 'react'
import { SEO } from 'utilities'
import { ExpertMenu, MenuLayout } from 'components'

export default function ExpertPage() {
  return (
    <>
      <SEO title="Expert Menu" pathname="menus/expert" />
      <MenuLayout>
        <ExpertMenu />
      </MenuLayout>
    </>
  )
}
