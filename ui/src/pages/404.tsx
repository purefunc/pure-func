import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from 'utilities'
import { Section } from 'components'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="404: Page not found" />
      <Section isHero theme="primary">
        <div className="grid">
          <div className="text-center">
            <h1 className="margin-auto">404</h1>
            <p className="margin-auto">Oh no there is nothing here!</p>
            <Link className="cta " to="/">
              Back to the Func
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
