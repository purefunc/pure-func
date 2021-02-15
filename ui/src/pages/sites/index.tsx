import React from 'react'
import { SEO } from 'utilities'
import { Section } from 'components'

export default function SitesPage() {
  return (
    <>
      <SEO title="Sites" description="Get In Touch" />
      <Section isHero theme="primary">
        <div className="grid">
          <div>
            <h1 className="margin-top-0">Want a Quick and Easy Solution? Try Our One Page Website Builder</h1>
            <p>
              Creating a fantastic website doesn't have to be expensive or time consuming! If you're looking for a
              modern, high-performance site but don't have the resources to build from scratch, our semi-custom website
              templates are the perfect place to start. Simply use the one page website builder below to choose the
              layout, colors, and style, and our team will build it ASAP just for you.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
