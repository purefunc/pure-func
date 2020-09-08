import React from "react"
import Layout from "../layouts"
import { ColumnLayout } from "../styles"

export default function HomePage({ location }) {
  return (
    <Layout title="Home" description="" location={location}>
      <div className="Wrapper">
        <div className="Container">
          <div className="ColumnLayout" data-columns="2,2">
            <div className="Copy">
              <h1 className="caption">I am caption text, check me out</h1>
              <h2 className="title">I am a title</h2>
              <div className="body">
                <p>I am text</p>
                <p className="small">I am small text</p>
              </div>
            </div>
            <div className="Card elevation-2">
              <p>cardo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Wrapper">
        <div className="Container">
          <div className="Copy">
            <h1>title</h1>
            <p>text</p>
          </div>
        </div>
      </div>

      <div className="Wrapper">
        <div className="Container">
          <ColumnLayout cols={[1, 1, 2]}>
            <div className="Copy">
              <h1>title</h1>
              <p>text</p>
            </div>
            <div className="Copy">
              <h1>title</h1>
              <p>text</p>
            </div>
          </ColumnLayout>
        </div>
      </div>
    </Layout>
  )
}
