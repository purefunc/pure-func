import React from 'react'
import { SEO } from 'utilities'
import { Section } from 'components'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="404: Page not found" />
      <Section>
        <h1>404</h1>
      </Section>
    </>
  )
}
