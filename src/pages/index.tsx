import React from "react"
import Layout from "../layouts"
import { ColumnLayout } from "../styles"

export default function HomePage({ location }) {
  return (
    <Layout title="Home" description="" location={location}>
      <div className="wrapper">
        <div className="Section">
          <div className="ColumnLayout" data-columns="2,2">
            <div>
              <h1 className="caption">I am caption text, check me out</h1>
              <h2>I am a title</h2>
              <p>I am text</p>
              <p className="small">I am small text</p>
            </div>
            <div className="Card elevation-2">
              <p>cardo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="Section">
          <h1>title</h1>
          <p>text</p>
        </div>
      </div>

      <div className="wrapper">
        <div className="Section">
          <ColumnLayout cols={[1, 1, 2]}>
            <div>
              <h1>title</h1>
              <p>text</p>
            </div>
            <div>
              <h1>title</h1>
              <p>text</p>
            </div>
          </ColumnLayout>
        </div>
      </div>
    </Layout>
  )
}
