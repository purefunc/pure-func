import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from 'utilities'

import { Section } from 'components'

export default function ExamplePage() {
  return (
    <>
      <SEO title="Example" />
      <Section>
        <>
          <Link to="/contact/" className="cta">
            Contact Us To Apply
          </Link>
        </>
      </Section>
    </>
  )
}
