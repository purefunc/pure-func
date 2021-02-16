import React from 'react'
import { SEO } from 'utilities'
import { Section } from 'components'

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact" description="Get In Touch" />
      <Section isHero theme="funky-5">
        <div className="grid">
          <div>
            <h1 className="margin-top-0">Get In Touch</h1>
            <p>
              Potential client? Curious new developer? #1 Pure Func fan? As long as you're not a robot, we want to hear
              from you! Fill out this contact form, and a member of our team will be in touch as soon as possible.
              *required fields
            </p>
          </div>
          <div>FORM</div>
        </div>
      </Section>
    </>
  )
}
