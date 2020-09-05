import React from "react"
import Layout from "../layouts"

export default function ({ location }) {
  return (
    <Layout title="Home" description="" location={location}>
      <section className="section">
        <h1>hi people</h1>
        <p>hello people</p>
      </section>
    </Layout>
  )
}
