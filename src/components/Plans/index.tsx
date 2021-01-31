import React from 'react'
import { Section } from 'components'

export function Plans() {
    return (
        <Section>
            <>
            <h2
            //   style={{
            //      display: "inline-flex",
            //      fontSize: "var(--heading-one)",
            //      color: "var(--white)",
            //   }}
            >
              Find a plan that works for you.
            </h2>
            <h4>
              Whether you’re a small local business or a rapidly expanding
              chain, we offer plans for restaurants and hotels of all sizes.
              Explore our subscription tiers to find the perfect fit.
            </h4>
            <div className="grid">
              <div className="card">
                <h3>
                  <strong>Basic</strong>
                </h3>
                <h4>$4.99/Month</h4>
                <hr />
                <ul>
                  <li>Black and White QR Code image</li>
                  <li>Responsive menu text that works with all devices</li>
                  <li>Ability to add your logo</li>
                </ul>
                <p>
                  * A link to our website will appear at the bottom of your menu
                  with this plan
                </p>
              </div>
              <div className="card">
                <h3>
                  <strong>Pro</strong>
                </h3>
                <h4>
                  $19.99/Month
                </h4>
                <hr />
                <ul className="disc">
                  <li>
                    <strong>ALL features from basic plan</strong>
                  </li>
                  <li>
                    QR Code with gradient and/or logo
                  </li>
                  <li>Optional header image on menu</li>
                  {/* <li className="accent-text">Customizable color scheme</li> */}
                  <li className="accent-text">
                    Image pop-ups for individual food items can be added
                  </li>
                  <li className="accent-text">
                    Food key to label items with tags (spicy, vegan, raw, etc.)
                  </li>
                  <li>Free from our branding</li>
                  <li>
                    And more planed features coming soon!
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>
                  <strong>Expert</strong>
                </h3>
                <p>
                  A solution for those who have multiple menus and custom design
                  needs
                </p>
                <h4>Coming Soon!</h4>
              </div>
            </div>
            </>
        </Section>
    )
}