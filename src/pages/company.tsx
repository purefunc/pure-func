import React from "react"
import Layout from "../layouts"

export default function CompanyPage() {
  return (
    <Layout title="Company" description="" location={location}>
      <div className="Wrapper">
        <div className="Section">
          <section>
            <h3 className="caption">For You by Us</h3>
            <h1>Behind the Company</h1>
            <p>
              Pure Func is a web development agency commited to making blazing
              fast, modern websites. We specialize in static e-commerce websites
              for small companies but also offer other development solutions.
            </p>
            <h3>About the founder</h3>
            <p>
              Eric Sartorius is a digital nomad that enjoys coding from all
              around the globe. He has been developing websites since 2014 and
              has had the pleasure to work with clients from all corners of the
              earth.
            </p>
            <p>
              <a
                href="https://ericsartorius.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eric's homepage
              </a>
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
