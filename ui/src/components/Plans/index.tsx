import React from 'react'
import { Section } from 'components'

export function Plans() {
  return (
    <Section isSkewed theme="primary">
      <>
        <h2 className="text-center margin-auto">Find a plan that works for you.</h2>
        <p className="text-center margin-auto">
          Whether you’re a small local business or a rapidly expanding chain, we offer plans for restaurants and hotels
          of all sizes. Explore our subscription tiers to find the perfect fit.
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
  )
}
