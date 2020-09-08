import React from "react"
import Layout from "../layouts"

export default function CompanyPage() {
  return (
    <Layout title="Company" description="" location={location}>
      <div className="wrapper">
        <div className="Section container">
          <section>
            <h3 className="caption">For business teams</h3>
            <h2>End-to-end billing, no code required</h2>

            <p>
              Once you’re set up, you can create and manage subscriptions and
              invoices—and view detailed financial reports—directly from the
              Dashboard. Stripe doesn’t limit the number of team members you can
              add and supports granular roles and permissions to help manage
              access.
            </p>
            <p>FOOTER STUFF HERE</p>
          </section>
          <div className="ColumnLayout" data-columns="1,3">
            <div className="Card elevation-4">test card</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
