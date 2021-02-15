import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from 'utilities'

import { Section } from 'components'

export default function BetaPage() {
  return (
    <>
      <SEO title="Beta Program" />
      <Section>
        <>
          <h2>Thank you for your interest in our beta program!</h2>
          <p className="large">
            We are currently in the exiting process of building great reusable tools and easy payment processing for you
            right now. If you still need a menu ASAP however, no worries! We still have tons of great features available
            in our beta program.
          </p>
          <h3>How the beta program works</h3>
          <ul className="disc">
            <li>
              Anyone who signs up for a menu will get <strong>50% off</strong> of the annual fee (monthly payments
              unavailable for the beta program).
            </li>
            <li>
              All advertised menu functionality will still be available and we will even take requests for new features
            </li>
            <li>
              Since our DIY tools are not yet live, we will migrate and design everything for you just the way you want.
            </li>
            <li>Once we are out of beta, we will migrate all of your information to our new system at no cost.</li>
            <li>
              If you are unsatisfied with our menu at any time you will be able to cancel your account with a pro-rated
              refund
            </li>
          </ul>
          <Link to="/contact/" className="cta">
            Contact Us To Apply
          </Link>
        </>
      </Section>
    </>
  )
}
