import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from 'components'
import { SEO } from 'utilities'
import phoneImg from '../../images/menus/phone-qr.png'
import basicSvg from 'images/menus/basic-qr.svg'
import plusSvg from 'images/menus/plus-qr.svg'

export default function DigitalMenuPage() {
  return (
    <>
      <SEO title="Digital Menus" description="We have digital menus!" />
      <Section isHero theme="funky">
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
      </Section>
      <Section>
        <div className="grid">
          <div>
            <img alt="phone" src={phoneImg} />
          </div>
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
      <Section isSkewed theme="primary">
        <>
          <h2 className="text-center margin-auto">Find a plan that works for you.</h2>
          <p className="text-center margin-auto">
            Whether you’re a small local business or a rapidly expanding chain, we offer plans for restaurants and
            hotels of all sizes. Explore our subscription tiers to find the perfect fit.
          </p>
          <div className="grid margins">
            <div className="card">
              <h3 className="text-center">
                <strong>Basic</strong>
              </h3>
              <h4 className="text-center margin-top-0">$4.99/Month</h4>
              <hr />
              <ul className="disc margins">
                <li>Black and White QR Code image</li>
                <li>Responsive menu text that works with all devices</li>
                <li>Ability to add your logo</li>
              </ul>
              <p>* A link to our website will appear at the bottom of your menu with this plan</p>
            </div>
            <div className="card">
              <h3 className="text-center">
                <strong>Pro</strong>
              </h3>
              <h4 className="text-center margin-top-0">$19.99/Month</h4>
              <hr />
              <ul className="disc margins">
                <li>
                  <strong>ALL features from basic plan</strong>
                </li>
                <li>QR Code with gradient and/or logo</li>
                <li>Optional header image on menu</li>
                {/* <li className="accent-text">Customizable color scheme</li> */}
                <li className="accent-text">Image pop-ups for individual food items can be added</li>
                <li className="accent-text">Food key to label items with tags (spicy, vegan, raw, etc.)</li>
                <li>Free from our branding</li>
                <li>And more planed features coming soon!</li>
              </ul>
            </div>
            <div className="card text-center">
              <h3>
                <strong>Expert</strong>
              </h3>
              <p className="margins">A solution for those who have multiple menus and custom design needs</p>
              <h4>Coming Soon!</h4>
            </div>
          </div>
        </>
      </Section>
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
      <Section theme="funky" isSkewed>
        <div className="card card--deep card--padded text-center margin-auto">
          <h2>Ready to ride the QR wave?</h2>
          <Link to="/contact" className="cta">
            Contact
          </Link>
        </div>
      </Section>
    </>
  )
}
