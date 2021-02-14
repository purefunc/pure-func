import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from 'components'

export default function HomePage() {
  return (
    <>
      <Section isHero theme="primary">
        <div className="grid">
          <div>
            <h1 className="margin-top-0">Websites That Bring The Func</h1>
            <p>
              Stop settling for websites that sell your brand short. Here at Pure Func, we build sites that are just as
              modern and innovative as your company, and we specialize in crafting gorgeous user interfaces that never
              sacrifice performance. The bottom line? If you want a website that's exceptional in both form and
              function, you're in the right place.
            </p>
            <Link to="/contact" className="cta">
              Contact Us
            </Link>
          </div>
          <div>IMAGE</div>
        </div>
      </Section>
      <Section>
        <>
          <h2>Services</h2>
          <p>
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
              <Link className="cta" to="/services">
                Learn More
              </Link>
            </div>
            <div>IMAGE HERE</div>
          </div>
          <div className="grid">
            <div>
              <h3>Custom Full Stack Web Development</h3>
              <p>
                Our full stack websites are more than just a pretty face. Equipped with powerful backend functionality
                along with gorgeous, responsive user interfaces, these websites can accomplish anything you need with
                elegance and speed. The Pure Func team has experience building a wide variety of custom full stack
                websites, including admin systems, analytics dashboards, social networks, and so much more.
              </p>
              <Link className="cta" to="/services">
                Learn More
              </Link>
            </div>
            <div>IMAGE HERE</div>
          </div>
          <h3>But Wait, There's More...</h3>
          <p>
            Don't see exactly what you're looking for? Check out our full list of services (link) to explore even more
            options. If you're still not sure that we're the right fit, get in touch (link) with our team to chat about
            a custom solution.
          </p>
        </>
      </Section>
      <Section theme="funky" isSkewed>
        <div className="card text-center margin-auto">
          <h2>Clients Trust Us</h2>
          <p>
            Pure Func is able to achieve what other web developers can’t. We needed a fast website with high value
            content and high quality photographs, smooth language switcher, and is mobile-friendly. Pure func delivered
            exactly what we needed! We are happy with the results and so are our clients!
          </p>
          <h5>Tune Kantharoup - Flying Home Studio</h5>
        </div>
      </Section>
      <Section>
        <div className="grid">
          <div>VIDEO HERE</div>
          <div>
            <h2>Featured Project: Level Up Tutorials</h2>
            <p>
              From interactive quizzes to admin UI, Pure Func has added several key new features to this popular web
              development learning platform (affiliate link here). On the surface, we’ve crafted beautiful user
              interfaces for both customer-facing and employee-facing content, and under the hood, our highly modern
              tools and frameworks are just as elegant and high performing. Take a look at the site (link) to see for
              yourself.
            </p>
          </div>
        </div>
      </Section>
      <Section isSkewed theme="grey">
        <>
          <h2 className="margin-auto text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-3">
            <div className="card card--func-3">
              <h5>An Ultramodern Approach</h5>
              <p>
                We’re constantly studying and experimenting with emerging, state-of-the-art technologies that will give
                your website a competitive edge. Our team leverages the latest and greatest frameworks, languages, and
                architectures to create the most performant solution possible.
              </p>
            </div>
            <div className="card card--func-3">
              <h5>Fully Custom Solutions</h5>
              <p>
                From loading times to error handling, the quality of your customer experience hinges on the quality of
                the code that powers it. That’s why we craft every website from scratch, creating a fully custom
                masterpiece that fulfills all of your needs with speed and efficiency.
              </p>
            </div>
            <div className="card card--func-3">
              <h5>A Global Perspective</h5>
              <p>
                Our team has worked with clients from all over the world, accommodating a wide variety of timezones and
                languages. Whether you’re already targeting an international audience or looking to expand, a global
                perspective is key for success in today’s interconnected world.
              </p>
            </div>
          </div>
        </>
      </Section>
      <Section>LOGO STRIP HERE</Section>
      <Section theme="funky" isSkewed>
        <div className="card card--func-2 text-center margin-auto">
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
