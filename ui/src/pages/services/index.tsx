import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from 'utilities'
import { Section } from 'components'

export default function ServicesPage() {
  return (
    <>
      <SEO title="Services" description="" />
      <Section isHero theme="funky-5">
        <div className="grid">
          <div>
            <h1 className="margin-top-0">Services</h1>
            <p>
              Stop settling for websites that sell your brand short. Here at Pure Func, we build sites that are just as
              modern and innovative as your company, and we specialize in crafting gorgeous user interfaces that never
              sacrifice performance. The bottom line? If you want a website that's exceptional in both form and
              function, you're in the right place.
            </p>
            <Link to="/contact" className="cta">
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
