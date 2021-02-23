import React from 'react'
import { SEO } from 'utilities'
import { Section } from 'components'

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact" description="Get In Touch" />
      <Section isHero theme="primary">
        <div className="grid">
          <div className="mobile-reverse-item">
            <h1 className="margin-top-0">Get In Touch</h1>
            <p className="large">
              We’re so excited to hear from you! Fill out the form below to get in touch with our team. We work with
              businesses of all sizes and offer a wide variety of services, so no matter what you need, don’t hesitate
              to reach out. Once you hit submit, a member of our team will be in touch as soon as possible!
            </p>
            <p>*required fields</p>
          </div>
          <div>MESSAGE INPUT PLACEHOLDER</div>
        </div>
      </Section>
    </>
  )
}
