import React from 'react'
import { SEO } from 'utilities'
import { Link } from 'react-router-dom'
import { Section } from 'components'

export default function SitesPage() {
  return (
    <>
      <SEO title="Sites" description="Get In Touch" />
      <Section isHero theme="deep">
        <div className="grid">
          <div>
            <h1 className="margin-top-0">Expertly Crafted Websites That Won’t Break the Bank</h1>
            <p>
              Our semi-custom websites are the perfect middle ground between a template and a fully
              custom project. Not only will you enjoy the speed and efficiency of selecting your favorite
              style from a variety of prebuilt options, but you’ll also get the help of an expert team who
              knows how to build lightning-fast, modern websites. It’s a win-win. 
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid">
          <div>
            <h1 className="margin-top-0">Want a Quick and Easy Solution? Try Our One Page Website Builder</h1>
            <p>
              Creating a fantastic website doesn't have to be expensive or time consuming!  If you're looking
              for a modern, high-performance site but don't have the resources to build from scratch, our semi-custom
              website templates are the perfect place to start. Simply use the one page website builder below to choose
              the layout, colors, and style, and our team will build it ASAP just for you.
            </p>
            <h1 className="margin-top-0">How It Works</h1>
            <ul>
              <li>
                Customize your site’s design with the tool below. Choose one of our hand-crafted website templates, then
                add your signature styles, colors, and logos to make it your own.
              </li>
              <li>
                Send us the information you’d like to feature. Once you’ve created your design and submitted it to our team,
                we’ll work with you to integrate your own text and images into the site. 
              </li>
              <li>
                Enjoy your new smooth, modern single page website. We strive to get you up and running quickly, so you can sit
                back and enjoy the booming traffic, buzz, and sales as soon as possible. 
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section isSkewed>
        <div className="card card--func-2 text-center margin-auto">
          <h2>Get Started</h2>
          <p>
            Potential client? Curious new developer? #1 Pure Func fan? As long as you're not a robot, we want to hear
            from you! Fill out our contact form, and a member of our team will be in touch as soon as possible.
          </p>
          <Link to="/contact" className="cta">
            Contact Us
          </Link>
        </div>
      </Section>
    </>
  )
}
