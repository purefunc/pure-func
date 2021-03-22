import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from 'utilities'
import { Section } from 'components'

export default function BetaPage() {
  return (
    <>
      <SEO
        title="Beta Program"
        description="Welcome to the Pure Func Beta program! We are excited to let you in on our new features before they go public!"
        pathname="/beta"
      />
      <Section isHero theme="primary">
        <div className="grid">
          <div>
            <h2 className="margin-top-0">Thank you for your interest in our beta program!</h2>
            <p className="large">
              We are currently in the exiting process of building great reusable tools and easy payment processing for
              you right now. If you still need a menu or template site ASAP however, no worries! We still have tons of
              great features available in our beta program.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid--split">
          <div></div>
          <div>
            <h3 className="margin-top-0">How the beta program works</h3>
            <ul className="disc">
              <li>
                Anyone who signs up for a menu will get <strong>50% off</strong> of the annual fee (monthly payments
                unavailable for the beta program).
              </li>
              <li>
                All advertised menu and site functionality will still be available and we will even take requests for
                new features
              </li>
              <li>
                Since our DIY tools are not yet live, we will migrate and design everything for you just the way you
                want.
              </li>
              <li>Once we are out of beta, we will migrate all of your information to our new system at no cost.</li>
              <li>
                If you are unsatisfied with our menu at any time you will be able to cancel your account with a
                pro-rated refund
              </li>
            </ul>
            <div className="margins">
              <Link to="/contact" className="cta">
                Contact Us To Apply
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
