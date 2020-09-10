import React from "react"
import Layout from "../layouts"

export default function ServicesPage() {
  return (
    <Layout title="Services" description="" location={location}>
      <div className="Wrapper">
        <div className="Section">
          <section>
            <h2>Products and Services</h2>
            <h3 className="caption">Let us help you</h3>
            <p>
              Once you’re set up, you can create and manage subscriptions and
              invoices—and view detailed financial reports—directly from the
              Dashboard. Stripe doesn’t limit the number of team members you can
              add and supports granular roles and permissions to help manage
              access.
            </p>
          </section>
          <div className="ColumnLayout" data-columns="1,3">
            <div className="Card elevation-2">test card</div>
            <div className="Card elevation-3">test card</div>
            <div className="Card elevation-4">test card</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
