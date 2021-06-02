import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from 'utilities'
import { Section, Icon } from 'components'
import { Button } from 'components/Button'

export default function SitesPage() {
  const title = 'One Page Website Builder'
  const description = ` Creating a fantastic website doesn't have to be expensive or time consuming! If you're looking for a modern, high-performance site but don't have the resources to build from scratch, our semi-custom website templates are the perfect place to start. Simply use the one page website builder below to choose the layout, colors, and style, and our team will build it ASAP just for you.`
  return (
    <>
      <SEO title={title} description={description} pathname="/sites" />
      <Section isHero theme="primary">
        <div className="grid">
          <div>
            <h1 className="margin-top-0">A Quick and Easy Website Solution</h1>
            <p>{description}</p>
            <p>
              <i>* Currently in beta but still accepting clients</i>
            </p>
            <Button color='white' as={Link} to="/contact">
            Get Beta Access *
            </Button>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid">
          <div>
            <h2 className="margin-top-0 text-center margin-auto">How It Works</h2>
            <ol className="grid" style={{ listStyle: 'none' }}>
              <li className="card card--lightBlue">
                <div className="card card--icon card--elevation-2">
                  <Icon name="brush-monitor" />
                </div>
                <h5 className="margin-top-small">Step 1</h5>
                <p>
                  Customize your site’s design with the tool below. Choose one of our hand-crafted website templates,
                  then add your signature styles, colors, and logos to make it your own.
                </p>
              </li>
              <li className="card card--lightBlue">
                <div className="card card--icon card--elevation-2">
                  <Icon name="bubble-chat" />
                </div>
                <h5 className="margin-top-small">Step 2</h5>
                <p>
                  Send us the information you’d like to feature. Once you’ve created your design and submitted it to our
                  team, we’ll work with you to integrate your own text and images into the site.
                </p>
              </li>
              <li className="card card--lightBlue">
                <div className="card card--icon card--elevation-2">
                  <Icon name="smiley-face2" />
                </div>
                <h5 className="margin-top-small">Step 3</h5>
                <p>
                  Enjoy your new smooth, modern single page website. We strive to get you up and running quickly, so you
                  can sit back and enjoy the booming traffic, buzz, and sales as soon as possible.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </Section>
      <Section isSkewed>
        <div className="card card--primary text-center margin-auto">
          <h2>Get Started</h2>
          <p>
            Potential client? Curious new developer? #1 Pure Func fan? As long as you're not a robot, we want to hear
            from you! Fill out our contact form, and a member of our team will be in touch as soon as possible.
          </p>
          <Button color='white' as={Link} to="/contact">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  )
}
