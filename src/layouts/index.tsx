import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header/Header"
import Footer from "../components/footer"

import "../styles/vars.scss"
import "../styles/reset.scss"
import "../styles/global.scss"
import "../styles/copy.scss"
import "../styles/layouts.scss"
import "../styles/sections.scss"
import "../styles/inputs.scss"
import "../styles/cards.scss"
import "../styles/cta.scss"
import "../styles/classes.scss"
import "../styles/themes.scss"

const Layout = ({ children, location, description, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title={title} description={description} location={location} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
