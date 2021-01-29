import React from "react"
import { SEO } from 'utilities'
import { graphql, Link } from "react-router-dom"
import Img from "react-router-dom"
import styled from "react-router-dom"
import Layout from "components/layout"
import { Button } from "components/Button"
import { Wrapper, Grid, below } from "react-router-dom"
import { Plans } from "components/Plans"
import { HeroCube } from "components/Hero"

const IndexPage = ({ location, data }) => {
  return (
    <Layout location={location}>
      <SEO title="Meet the future of menus" />

      <div
        className="gray-bg"
        // style={{
        //   background: `linear-gradient(279deg, rgba(111,37,143,0.8603816526610644) 11%, rgba(32,16,87,0.7903536414565826) 35%, rgba(22,13,79,0.9528186274509804) 99%)`,
        // }}
      >
        <Wrapper>
          <Grid
            className="container"
            cols={[1, 1, 2]}
            style={{ gridAutoRows: "minmax(300px, auto)" }}
          >
            <div className="mobile-reverse-item">
              <HeroH1 style={{ fontWeight: 500 }}>
                Meet the future <br /> of menus.
              </HeroH1>
              <p className="large">
                The future of menus has arrived—don’t get left behind. Our
                contactless, convenient QR code menus make it easy for your
                customers to explore your delicious dishes without risking their
                health and safety.
              </p>
              {/* <Button as={Link} to="/plans/">
              Get Started
            </Button> */}
            </div>
            {/* <QR
              src={qrSvg}
              alt="QR Code"
            /> */}
            <CubeWrapper>
              <HeroCube />
            </CubeWrapper>
          </Grid>
        </Wrapper>
      </div>

      <section className="container white-bg">
        <Wrapper>
          <Grid cols={[1, 1, 2]} gap={"60px"}>
            <div className="margins">
              <Img fluid={data.phoneImg.childImageSharp.fluid} />
            </div>
            <div>
              {/* <h2
                style={
                  {
                    // display: "inline-flex",
                    // marginTop: "30px",
                    // color: "var(--white)",
                  }
                }
              >
                QR?
              </h2>
              <p>
                QR or 'Quick Response' code is an images full of coded
                information that looks like it was painted by aliens but it has
                a really cool function! By taking a picture of a QR code with a
                phone or tablet, a customer will then get a link to your menu.
                This not only makes the whole ordering process contactless to
                help prevent the spread of COVID 19, but also allows for
                features that normal menus can't do.
              </p> */}
              <LineCard>
                <h2>Update your offerings without all the hassle.</h2>
                <p className="large">
                  Switching up a paper menu can be tedious and expensive, even
                  if you’re just changing a few items! With our custom QR menus,
                  adding more dishes, moving through the seasons, and trying new
                  ingredients becomes simple and convenient.{" "}
                </p>
              </LineCard>
              <LineCard>
                <h2>
                  Delight your customers with a squint-free dining experience.{" "}
                </h2>
                <p className="large">
                  With an image or a PDF menu, your customers are probably
                  spending more time zooming and squinting than actually
                  exploring what you have to offer. Our custom QR menus are
                  compatible with almost any mobile device, giving every
                  customer the chance to find their new favorite dish.
                </p>
              </LineCard>
            </div>
          </Grid>
          {/* <div className="container">
            <Grid cols={[1, 1, 2]}>
              <div
              style={{ alignSelf: "center" }}
              className="margins mobile-reverse-item "
              >
              <Img fluid={data.phoneImg.childImageSharp.fluid} />
            </div>
            </Grid>
          </div> */}
        </Wrapper>
      </section>

      <Plans />
      <div className="center-text purp-bg container">
        <Wrapper>
          <h2
            className="no-top-margin white-text"
            style={{ paddingTop: "30px" }}
          >
            Ready to ride the QR wave?
          </h2>
          <Button
            as={Link}
            to="/contact/"
            style={{ marginTop: "30px", color: "var(--purp)" }}
            color="teal"
          >
            Contact Us
          </Button>
        </Wrapper>
      </div>
    </Layout>
  )
}

export default IndexPage

const HeroH1 = styled.h1`
  /* font-size: var(--heading-two); */
  ${below.medium`
    margin-top: 0;
  `};
`

const CubeWrapper = styled.div`
  position: relative;
`


const LineCard = styled.div`
  /* border: 1px solid var(--lightestGray);
  padding: var(--cardPadding);
  border-radius: var(--cardRadius);
  > * {
    margin-top: 0;
  } */
`


export const HomepageQuery = graphql`
  query {
    phoneImg: file(relativePath: { eq: "phone-qr.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
