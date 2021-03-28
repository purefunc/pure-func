import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from 'utilities'
import { Section, Icon } from 'components'
import tuneImg from 'images/tune-header.png'
import rachioImg from 'images/rachio.jpg'
import lutImg from 'images/lut-screenshot.jpg'

import { TerminalScreen } from '../../figures/TerminalScreen'

export default function ServicesPage() {
  const title = 'Services Designed to Meet Your Modern Needs'
  const description =
    'From ecommerce to web apps, Pure Func offers a wide variety of services to choose from. Whether you’re looking to upgrade your old site or start a custom project from scratch, our extensive menu of modern, relevant services will fulfill all of your web development needs.'
  return (
    <>
      <SEO title={title} description={description} pathname="/services" />
      <Section isHero theme="primary">
        <div className="grid">
          <div className="mobile-reverse-item">
            <h1 className="margin-top-0">{title}</h1>
            <p>{description}</p>
            <Link to="/contact" className="cta cta--white">
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
      <Section>
        <h3 className="margin-top-0">Custom Web Apps</h3>
        <p>
          Our custom web apps are more than just a pretty face. Equipped with powerful backend functionality along with
          gorgeous, responsive user interfaces, these websites can accomplish anything you need with elegance and speed.
          The Pure Func team has experience building a wide variety of custom web apps, also known as full stack
          websites, including admin systems, analytics dashboards, social networks, and so much more. See our full stack
          web development work in action for{' '}
          <a target="_blank" rel="nofollow noopener" href="https://www.leveluptutorials.com/?ref=purefunc">
            Level Up Tutorials{' '}
          </a>{' '}
          . Get your custom QR code menu started with Code My Menu.
        </p>
        <div className="grid grid--split">
          <div className="flex">
            <img src={lutImg} alt="Level Up Tutorials website" className="rounded elevation-3" />
          </div>
        <div>
          <ul>
            <li>
              <div className="flex flex--start">  
                <div className="margin-right-small card card--icon card--elevation-2">
                  <Icon name="circle-timer" />
                </div>
                  <p>
                  Push the boundaries of the menu experience. Traditional paper menus force you to balance the trade off
                  between space and content. QR code menus eliminate the space factor, allowing you to include images and
                  details for every single item.
                  </p>
              </div>
            </li>
              <li>
                <div className="flex flex--start margin-top-small">
                  <div className="margin-right-small card card--icon card--elevation-2">
                    <Icon name="circle-house" />
                  </div>
                    <p>
                    Give everyone the chance to explore your delicious dishes. PDF menus are not responsive, which means it
                    takes a whole lot of zooming and scrolling to navigate them. Our QR menus are web pages, so they scale
                    perfectly on almost any mobile device.
                    </p>
                </div>
              </li>
              <li>
                <div className="flex flex--start margin-top-small">
                  <div className="margin-right-small card card--icon card--elevation-2">
                    <Icon name="smiley-face" />
                  </div>
                    <p>
                    Efficiently add, remove, and edit your offerings. Updating paper menus can be costly and time-consuming,
                    but websites are built to be changed. When you cook up new dishes or switch your seasonal offerings, QR
                    code menus make the transition seamless.
                    </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid--split__reverse">
          <div></div>
          <div>
            <h3 className="margin-top-0">E-Commerce Integration</h3>
            <p>
              Rack up sale after sale with a custom Shopify theme. Designed for your unique needs, our e-commerce sites
              offer all of the same benefits as our fast, adaptable brochure sites but with the added power of Shopify’s
              seamless product listing and payment integration. Whether you’re looking to start from scratch or add to
              your existing platform, our custom Shopify themes weave powerful e-commerce functionality right into your
              stunning site. See our e-commerce work in action for{' '}
              <a target="_blank" rel="nofollow noopener" href="https://www.rachio.com">
                Rachio
              </a>
              .
            </p>
          </div>
        </div>
        <div className="grid grid--split__reverse grid--mobile">
          <div className="mobile_grid-reverse">
            <ul>
              <li className="flex flex--start">
                <div className="margin-right-small card card--icon card--elevation-2">
                  <Icon name="circle-meter" />
                </div>
                  <p>
                  Reap the benefits of our JAMStack architecture, including speed, flexibility, and customization. Our
                  quick loading times and custom functionality enhance the shopping experience for your valued customers
                  and keep them coming back for more.
                  </p>
              </li>
              <li className="flex flex--start margin-top-small">
                <div className="margin-right-small card card--icon card--elevation-2">
                  <Icon name="circle-plus" />
                </div>
                  <p>
                  Use what you already have, or start from square one. If you’re looking to expand your existing site into
                  e-commerce, we can integrate a custom Shopify theme right into your platform. If you’re new to the world
                  wide web, no worries--our static site development and e-commerce services go hand-in-hand.
                  </p>
              </li>
              <li className="flex flex--start margin-top-small">
                <div className="margin-right-small card card--icon card--elevation-2">
                  <Icon name="circle-bubble" />
                </div>
                  <p>
                  Join the community of over half a million Shopify sellers, and enjoy the immense support system and
                  documentation that comes with it.
                  </p>
              </li>
            </ul>
          </div>
          <div className="flex">
            <img src={rachioImg} alt="Rachio website" className="rounded elevation-3" />
          </div>
        </div>
      </Section>
      <Section>
        <h3 className="margin-top-0">Custom Websites</h3>
        <p>
          Bold. Smooth. Modern. Showcase the best of your work, products, and services with a custom user interface
          designed to flatter your brand. Our static sites can be as simple or complex as you need, with the option to
          add in e-commerce with Shopify or manage content through your favorite CMS, including Wordpress, Contentful,
          Sanity, and more. Interested in a stunning static website but need it right away? Check out our{' '}
          <Link to="/sites">semi-custom development services</Link> to get going right out of the box. See our custom
          website work in action for{' '}
          <a target="_blank" rel="nofollow noopener" href="https://flyinghomestudio.com/">
            Tune & Flying Home Studio
          </a>
          .
        </p>
        <div className="grid grid--split">
          <div className="flex">
            <img src={tuneImg} alt="Tune Flying Home Studio website" className="rounded elevation-3" />
          </div>
          <div>
            <ul>
              <li className="flex flex--start">
                <div className="margin-right-small card card--icon card--elevation-2">
                  <Icon name="globe" />
                </div>
                  <p>
                  Satisfy your niche needs in no time with rich support for APIs, widgets, and plugins. No matter what
                  you're looking for, from customer reviews to contact forms, our team uses JAMStack architecture to add
                  powerful functionality to your site without hurting its performance.
                  </p>
              </li>
              <li className="flex flex--start margin-top-small">
                <div className="margin-right-small card card--icon card--elevation-2">
                  <Icon name="circle-lock" />
                </div>
                  <p>
                  Tie in your preferred content management system (CMS) to seamlessly integrate new blog posts, photos, or
                  portfolio pieces into your site. We're all about convenience, and we strive to make content management
                  as simple as possible for all of our clients.
                  </p>
              </li>
              <li className="flex flex--start margin-top-small">
                <div className="margin-right-small card card--icon card--elevation-2">
                  <Icon name="thunder-bolt" />
                </div>
                  <p>
                  Reach an international audience. Our team’s experience with multilingual compatibility ensures that your
                  site will look and feel perfect for a diverse group of people, not just English speakers.
                  </p>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section theme="funky">
        <div className="card card--padded text-center margin-auto">
          <h4>Interested in a stunning static website but need it right away?</h4>
          <p>Check out our semi-custom development services to get going right out of the box.</p>
        </div>
      </Section>
      <Section>
        <>
          <h2 className="margin-auto text-center">Refactoring and Consulting</h2>
          <p className="margin-auto text-center">
            Don’t let development bottlenecks stifle your team’s productivity. When you enlist our refactoring and
            consulting services, one of our experienced developers will step into your project and help you work through
            the issues that are holding you back. Whether you need to add difficult new features to your site, select
            the right languages and frameworks to get the job done, or learn about a popular new technology, our team
            can guide you through your roadblocks and equip you to conquer them on your own in the future.{' '}
          </p>
          <div className="grid grid--cols-3 margins">
            <div className="card card--lightBlue">
              <div className="card card--icon card--elevation-2">
                <Icon name="trophy" />
              </div>
              <h5 className="margin-top-small">Uninterrupted Progress</h5>
              <p>
                Move on from complicated issues without sacrificing your goals. Getting stuck on a problem outside of
                your team’s skill set may seem hopeless, but our consulting services will help you keep pushing forward
                to meet your goals.
              </p>
            </div>
            <div className="card card--lightBlue">
              <div className="card card--icon card--elevation-2">
                <Icon name="badge" />
              </div>
              <h5 className="margin-top-small">Empowerment for the Whole Team</h5>
              <p>
                Unlock new skills for your team. Through our mentorship and teaching opportunities, your team can grow
                in new directions and learn valuable, modern development skills.
              </p>
            </div>
            <div className="card card--lightBlue">
              <div className="card card--icon card--elevation-2">
                <Icon name="mountain-top" />
              </div>
              <h5 className="margin-top-small">A Firm Foundation</h5>
              <p>
                Save time by making the right architecture decisions. Work with our team to make sure you’re picking the
                right languages, frameworks, and database structures for your app, crucial decisions that can make or
                break your future success.
              </p>
            </div>
          </div>
          <div className="text-center margins">
            <Link to="/contact" className="cta cta--gradient">
              Contact Us
            </Link>
          </div>
        </>
      </Section>
    </>
  )
}
