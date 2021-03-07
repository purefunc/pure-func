import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from 'utilities'
import { Section } from 'components'
import { SphereLogo } from '../figures'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="404: Page not found" />
      <Section isHero theme="primary">
        <div className="grid">
          <div className="text-center">
            <SphereLogo />
            <h1 className="margin-auto margin-top-small">404</h1>
            <p className="margin-auto">There is nothing to see here!</p>
            <Link className="cta " to="/">
              Back to the func
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
