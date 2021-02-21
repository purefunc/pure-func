import React from 'react'
import { SEO } from 'utilities'
import { Section } from 'components'
import { Link } from 'react-router-dom'
import basicSvg from 'images/menus/basic-qr.svg'
import plusSvg from 'images/menus/plus-qr.svg'

export default function ExamplesPage() {
  return (
    <>
      <SEO title="Example" />
      <Section>
        <>
          <div className="container center-text">
            <h2 style={{ fontWeight: 'bold' }}>Your new QR menu could look as sleek as these.</h2>
            <p className="large">
              Check out some examples of real-life QR code menus we’ve made for customers just like you. For the best
              viewing experience, scan the codes below with the camera on your mobile device.
            </p>
            <div className="container grid">
              <div className="LinkDiv">
                <Link to="/examples/basic/">
                  <h4>Basic Menu</h4>
                  <img src={basicSvg} alt="" />
                </Link>
              </div>
              <div className="LinkDiv">
                <Link to="/examples/plus/">
                  <h4>Pro Menu</h4>
                  <img src={plusSvg} alt="" />
                </Link>
              </div>
              <div>
                <h4>Expert Menu</h4>
                <h5 className="gray-text margins">Coming Soon!</h5>
              </div>
            </div>
          </div>
        </>
      </Section>
    </>
  )
}
