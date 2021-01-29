import React from "react"
import styled from "react-router-dom"
import { Wrapper, Grid, Card } from "react-router-dom"
import qrSvg from "../images/qr-nobg.svg"
import { Banner } from "./Banner"

export function Plans() {
  return (
    <PlanSection
      style={{
        backgroundColor: "var(--purple)",
        backgroundImage: `url(${qrSvg})`,
      }}
    >
      <Banner />
      <Wrapper>
        <div className="container">
          <div
            className="center-text"
            style={{ maxWidth: "940px", margin: "0 auto" }}
          >
            <h2
              style={{
                display: "inline-flex",
                fontSize: "var(--heading-one)",
                color: "var(--white)",
              }}
            >
              Find a plan that works for you.
            </h2>
            <h4 className="no-margins white-text">
              Whether you’re a small local business or a rapidly expanding
              chain, we offer plans for restaurants and hotels of all sizes.
              Explore our subscription tiers to find the perfect fit.
            </h4>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Grid cols={[1, 1, 3]} className="top-padding ">
              <Card>
                <h3 className="center-text no-margins">
                  <strong>Basic</strong>
                </h3>
                <h4 className="no-margins center-text">$4.99/Month</h4>
                <hr />
                <ul className="disc ">
                  <li>Black and White QR Code image</li>
                  <li>Responsive menu text that works with all devices</li>
                  <li>Ability to add your logo</li>
                </ul>
                <p className="small">
                  * A link to our website will appear at the bottom of your menu
                  with this plan
                </p>
              </Card>
              <Card>
                <h3 className="accent-text center-text no-margins">
                  <strong>Pro</strong>
                </h3>
                <h4 className="accent-text no-margins center-text">
                  $19.99/Month
                </h4>
                <hr />
                <ul className="disc">
                  <li>
                    <strong>ALL features from basic plan</strong>
                  </li>
                  <li className="accent-text">
                    QR Code with gradient and/or logo
                  </li>
                  <li className="accent-text">Optional header image on menu</li>
                  {/* <li className="accent-text">Customizable color scheme</li> */}
                  <li className="accent-text">
                    Image pop-ups for individual food items can be added
                  </li>
                  <li className="accent-text">
                    Food key to label items with tags (spicy, vegan, raw, etc.)
                  </li>
                  <li className="accent-text">Free from our branding</li>
                  <li className="accent-text">
                    And more planed features coming soon!
                  </li>
                </ul>
              </Card>
              <Card>
                <h3 className="secondary-text center-text no-margins">
                  <strong>Expert</strong>
                </h3>
                <p className="center-text margins">
                  A solution for those who have multiple menus and custom design
                  needs
                </p>
                <h4 className="center-text ">Coming Soon!</h4>
              </Card>
            </Grid>
          </div>

          <p
            className="white-text small center-text"
            style={{ marginTop: "30px" }}
          >
            *Prices subject to change as new features are released
          </p>
        </div>
      </Wrapper>
    </PlanSection>
  )
}

const PlanSection = styled.section`
  hr {
    background-image: linear-gradient(
      82deg,
      var(--navPurp) 61%,
      var(--violet) 95%
    );
    height: 2px;
    border: none;
    margin-top: 10px;
  }
  ul li {
    margin-top: 15px;
  }
`
