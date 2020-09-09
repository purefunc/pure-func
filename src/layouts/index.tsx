import React from "react"
import SEO from "../components/seo"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

import "../styles/vars.scss"
import "../styles/reset.scss"
import "../styles/global.scss"
import "../styles/typography.scss"
import "../styles/layouts.scss"
import "../styles/sections.scss"
import "../styles/inputs.scss"
import "../styles/cards.scss"
import "../styles/cta.scss"
import "../styles/classes.scss"
import "../styles/themes.scss"

const Layout = ({ children, location, description, title }) => {
  return (
    <>
      <SEO title={title} description={description} location={location} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
