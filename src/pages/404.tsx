import React from "react"
import Layout from "../layouts"

export default function NotFoundPage({ location }) {
  return (
    <Layout title="404: Not found" description="" location={location}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
