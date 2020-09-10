import React from "react"
import Layout from "../layouts"

export default function ContactPage() {
  return (
    <Layout title="Company" description="" location={location}>
      <div className="Wrapper">
        <div className="Section">
          <section>
            <h3 className="caption">Contact Us</h3>
            <h1>Stay in touch!</h1>
            <p>We are always open to discuss new opportunities.</p>
            <h3>Social Media</h3>
            <ul>
              <li>
                E-mail:
                <a href="mailto:contact@purefunc.dev">contact@purefunc.dev</a>
              </li>
              <li>
                Facebook:
                <a
                  href="https://www.facebook.com/purefunc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @purefunc
                </a>
              </li>
              <li>
                Twitter:
                <a
                  href="https://www.twitter.com/_purefunc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @_purefunc
                </a>
              </li>
              <li>
                Instagram:
                <a
                  href="https://www.instagram.com/purefunc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @purefunc
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}
