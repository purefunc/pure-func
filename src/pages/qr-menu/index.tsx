import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Plans } from 'components'
import { SEO } from 'utilities'

export default function QrMenuPage() {
  return (
    <>
      <SEO title="QR Menus" description="We have QR Menus!" />
      <Section>
        <>
          <div className="grid">
            <div className="mobile-reverse-item">
              <h1 className="margin-top-0">
                Meet the future <br /> of menus.
              </h1>
              <p className="large">
                The future of menus has arrived—don’t get left behind. Our contactless, convenient QR code menus make it
                easy for your customers to explore your delicious dishes without risking their health and safety.
              </p>
            </div>
            <div>CUBE PLACEHOLDER</div>
          </div>
        </>
      </Section>
      <Section theme="white">
        <div className="grid">
          <div>IMAGE</div>
          <div>
            <h2>Update your offerings without all the hassle.</h2>
            <p className="large">
              Switching up a paper menu can be tedious and expensive, even if you’re just changing a few items! With our
              custom QR menus, adding more dishes, moving through the seasons, and trying new ingredients becomes simple
              and convenient.
            </p>

            <h2>Delight your customers with a squint-free dining experience.</h2>
            <p className="large">
              With an image or a PDF menu, your customers are probably spending more time zooming and squinting than
              actually exploring what you have to offer. Our custom QR menus are compatible with almost any mobile
              device, giving every customer the chance to find their new favorite dish.
            </p>
          </div>
        </div>
      </Section>
      <Plans />
      <Section theme="white">
        <div className="margin-top-0">
        <h2>
            Ready to ride the QR wave?
          </h2>
          <Link to="" className="cta">Contact</Link>
        </div>
      </Section>
    </>
  )
}
