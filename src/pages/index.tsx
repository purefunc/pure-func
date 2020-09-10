import React from "react"
import Layout from "../layouts"
import { ColumnLayout } from "../styles"
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
              <ColumnLayout cols={[1, 1, 5]}>
                <li>Full-stack web app development & design</li>
                <li>Static website development & design</li>
                <li>Refactoring or updating existing websites</li>
                <li>E-commerce integration into existing websites</li>
                <li>
                  Consultation for development solutions and best practices
                </li>
              </ColumnLayout>
            </ul>
          </div>
        </div>
      </div>
      <div className="Theme Theme--dark">
        <div className="Wrapper">
          <div className="Section">
            <div className="ColumnLayout" data-columns="2,2">
              <div>GRAPHIC HERE</div>
              <div>
                <h2>Web Technologies</h2>
                <h3 className="caption">Keeping it DRY</h3>
                <ul>
                  <li>React</li>
                  <li>Gatsby.js</li>
                  <li>Svelte</li>
                  <li>Vue</li>
                  <li>GraphQL</li>
                  <li>Meteor</li>
                  <li>Figma</li>
                  <li>Adobe UX</li>
                  <li>Shopify</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <div className="Section">
          <div className="ColumnLayout" data-columns="2,2">
            <div>
              <h2>Pure Func is a partner of Gatsby</h2>
              <p className="large">We make dope sites doper due to this fact</p>
            </div>
            <img src={gatsbyPfImg} alt="Gatsby + Pure Func logos" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
