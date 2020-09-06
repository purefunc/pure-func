import React from "react"
import Layout from "../layouts"

export default function CompanyPage() {
  return (
    <Layout title="Company" description="" location={location}>
      <div className="Section">
        <div class="Section__container">
          <div class="Section__layoutContainer">
            <div class="Section__layout">
              <div className="ColumnLayout" data-columns="2,2">
                <section className="Copy variant--Section">
                  <header className="Copy__header">
                    <h2 className="Copy__caption">For business teams</h2>
                    <h1 className="Copy__title">
                      End-to-end billing, no code required
                    </h1>
                  </header>

                  <div className="Copy__body">
                    Once you’re set up, you can create and manage subscriptions
                    and invoices—and view detailed financial reports—directly
                    from the Dashboard. Stripe doesn’t limit the number of team
                    members you can add and supports granular roles and
                    permissions to help manage access.
                  </div>

                  <footer className="Copy__footer">
                    <div className="Copy__ctaContainer">
                      <a
                        className="CtaButton variant--Button CtaButton--arrow"
                        href="https://dashboard.stripe.com/register/billing"
                      >
                        Create an account
                        <svg
                          className="HoverArrow"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          aria-hidden="true"
                        >
                          <g fill-rule="evenodd">
                            <path
                              className="HoverArrow__linePath"
                              d="M0 5h7"
                            ></path>
                            <path
                              className="HoverArrow__tipPath"
                              d="M1 1l4 4-4 4"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </footer>
                </section>

                <div className="Card elevation-5">test card</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
