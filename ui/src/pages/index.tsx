import React from 'react'
import { Link } from 'react-router-dom'
import { Section, LogoStrip, Icon } from 'components'
import { TerminalScreen, Laptop, Screen } from 'figures'
import ecommerceImg from 'images/ecommerce.png'
import lutImg from 'images/lut-scott.png'
import { SEO } from '../utilities/SEO'

export default function HomePage() {
  const title = 'Websites That Bring The Func'
  const description = `Stop settling for websites that sell your brand short. Here at Pure Func, we build sites that are just as modern and innovative as your company, and we specialize in crafting gorgeous user interfaces that never sacrifice performance. The bottom line? If you want a website that's exceptional in both form and function, you're in the right place.`
  return (
    <>
      <SEO title={title} description={description} pathname="/" />
      <Section isHero theme="primary">
        <div className="grid">
          <div>
            <h1 className="margin-top-0">{title}</h1>
            <p>{description}</p>
            <Link to="/contact" className="cta cta--white">
              Contact Us
            </Link>
          </div>
          <div className="margins">
            <Screen />
          </div>
          {/* <Laptop /> */}
        </div>
      </Section>
      <Section>
        <>
          <h2 className="margin-top-0 margin-auto">Services</h2>
          <p className="margin-auto">
            From business card sites to booming e-commerce platforms, our team offers a wide range of services that will
            meet all of your development needs. Go big with a brand-new full stack site, refresh your old design with a
            modern makeover, or hit the ground running with a semi-custom template—our highly skilled developers have
            got you covered.
          </p>
          <div className="grid">
            <div>
              <h3>E-Commerce Integration</h3>
              <p>
                Rack up sale after sale with a custom Shopify theme. Designed for your unique needs, our e-commerce
                sites offer all of the same benefits as our fast, adaptable brochure sites but with the added power of
                Shopify’s seamless product listing and payment integration. Whether you’re looking to start from scratch
                or add to your existing platform, our custom Shopify themes weave powerful e-commerce functionality
                right into your stunning site.
              </p>
              <Link className="cta cta--gradient" to="/services">
                Learn More
              </Link>
            </div>
            <img src={ecommerceImg} alt="E-commerce" className="margins" />
          </div>
          <div className="grid indent">
            <div>
              <h3 className="margin-top-small">Custom Full Stack Web Development</h3>
              <p>
                Our full stack websites are more than just a pretty face. Equipped with powerful backend functionality
                along with gorgeous, responsive user interfaces, these websites can accomplish anything you need with
                elegance and speed. The Pure Func team has experience building a wide variety of custom full stack
                websites, including admin systems, analytics dashboards, social networks, and so much more.
              </p>
              <Link className="cta cta--gradient" to="/services">
                Learn More
              </Link>
            </div>
            <div className="margins" style={{ alignSelf: 'end' }}>
              <TerminalScreen />
            </div>
          </div>
          <h3 className="margin-auto">But Wait, There's More...</h3>
          <p className="margin-auto">
            Don't see exactly what you're looking for? Check out our <Link to="/services">full list of services</Link>{' '}
            to explore even more options. If you're still not sure that we're the right fit,{' '}
            <Link to="/contact">get in touch</Link> with our team to chat about a custom solution.
          </p>
        </>
      </Section>
      <Section theme="funky" isSkewed>
        <div className="card card--padded card--funky-2 text-center margin-auto">
          <h2>Clients Trust Us</h2>
          <p>
            "Pure Func is able to achieve what other web developers can’t. We needed a fast website with high value
            content and high quality photographs, smooth language switcher, and is mobile-friendly. Pure func delivered
            exactly what we needed! We are happy with the results and so are our clients!"
          </p>
          <h5>Tune Kantharoup - Flying Home Studio</h5>
        </div>
      </Section>
      <Section>
        <div className="grid">
          <img src={lutImg} alt="Scott Tolinski of Level Up Tutorials" className="margins" />
          <div>
            <h2 className="margin-top-small">Featured Project: Level Up Tutorials</h2>
            <p>
              From interactive quizzes to admin UI, Pure Func has added several key new features to{' '}
              <a target="_blank" rel="nofollow noopener" href="https://www.leveluptutorials.com/?ref=purefunc">
                this popular web development learning platform
              </a>
              . On the surface, we’ve crafted beautiful user interfaces for both customer-facing and employee-facing
              content, and under the hood, our highly modern tools and frameworks are just as elegant and high
              performing. Take a look at{' '}
              <a target="_blank" rel="nofollow noopener" href="https://www.leveluptutorials.com/?ref=purefunc">
                the site
              </a>{' '}
              to see for yourself.
            </p>
          </div>
        </div>
      </Section>
      <Section isSkewed theme="gray">
        <>
          <h2 className="margin-auto text-center">What Sets Us Apart</h2>
          <div className="grid grid--cols-3 margins">
            <div className="card card--lightBlue">
              <div className="card card--icon card--elevation-2">
                <Icon name="three-diagram" />
              </div>
              <h5 className="margin-top-small">An Ultramodern Approach</h5>
              <p>
                We’re constantly studying and experimenting with emerging, state-of-the-art technologies that will give
                your website a competitive edge. Our team leverages the latest and greatest frameworks, languages, and
                architectures to create the most performant solution possible.
              </p>
            </div>
            <div className="card card--lightBlue">
              <div className="card card--icon card--elevation-2">
                <Icon name="puzzle-piece" />
              </div>
              <h5 className="margin-top-small">Fully Custom Solutions</h5>
              <p>
                From loading times to error handling, the quality of your customer experience hinges on the quality of
                the code that powers it. That’s why we craft every website from scratch, creating a fully custom
                masterpiece that fulfills all of your needs with speed and efficiency.
              </p>
            </div>
            <div className="card card--lightBlue">
              <div className="card card--icon card--elevation-2">
                <Icon name="globe" />
              </div>
              <h5 className="margin-top-small">A Global Perspective</h5>
              <p>
                Our team has worked with clients from all over the world, accommodating a wide variety of timezones and
                languages. Whether you’re already targeting an international audience or looking to expand, a global
                perspective is key for success in today’s interconnected world.
              </p>
            </div>
          </div>
        </>
      </Section>
      <LogoStrip />
      <Section theme="funky" isSkewed>
        <div className="card card--deep text-center margin-auto">
          <h2>Get In Touch</h2>
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
