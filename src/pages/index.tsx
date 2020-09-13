import React from "react"
import Layout from "../layouts"
import { Grid } from "../styles"
import gatsbyPfImg from "../images/gatsby-pf.svg"

export default function HomePage({ location }) {
  return (
    <Layout title="Home" description="" location={location}>
      <div>
        <div className="Wrapper">
          <div className="Section">
            <div className="ColumnLayout" data-columns="2,2">
              <div>
                <h1 className="huge">Pure Func Consulting Agency</h1>
                <p className="large">
                  We are here to meet your web development needs!
                </p>
              </div>
              <div className="Card elevation-2">
                <p>GRAPHIC HERE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Theme Theme--grey">
        <div className="Wrapper">
          <div className="Section">
            <h3 className="caption">We bring the Func</h3>
            <h2>Services</h2>
            <p>We got lots of stuff to make your business gooder</p>
            <ul>
              <Grid cols={[1, 2, 4]}>
                <li>
                  <h4 className="caption">SaaS</h4>
                  We develop & design custom SaaS (software as a servuce) web
                  apps from the ground up
                </li>
                <li>
                  <h4 className="caption">E-Commerce</h4>
                  We specialize in custom website solutions such as hooking into
                  existing Shopify web stores.
                </li>
                <li>
                  <h4 className="caption">Refactoring and Maintenance</h4>
                  Current website slow or out of date? We can update what is
                  under the hood to get your site back to the top of its game
                  again.
                </li>
                <li>
                  <h4 className="caption">Consultation</h4>
                  We can consult for development solutions and best practices to
                  help your company develop the best strategy for your website
                  going forward.
                </li>
              </Grid>
            </ul>
          </div>
        </div>
      </div>
      <div className="Theme Theme--dark">
        <div className="Wrapper">
          <div className="Section">
            <div className="ColumnLayout" data-columns="2,2"></div>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <div className="Section">
          <div className="ColumnLayout" data-columns="1,3">
            <div>
              <h2>Pure Func is a partner of Gatsby</h2>
              <p className="large">We make dope sites doper due to this fact</p>
              <img src={gatsbyPfImg} alt="Gatsby + Pure Func logos" />
            </div>
            <div>
              <h4>List of logos for Web Technologies we use goes here</h4>

              <Grid as="ul" cols={[1, 3]}>
                <li>React</li>
                <li>Gatsby.js</li>
                <li>Svelte</li>
                <li>Vue</li>
                <li>GraphQL</li>
                <li>Meteor</li>
                <li>Figma</li>
                <li>Adobe UX</li>
                <li>Shopify</li>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
