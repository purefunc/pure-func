import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from 'utilities'
import { Section } from 'components'

export default function AboutPage() {
  const title = 'Who We Are'
  const description = `Pure Func is a modern web development agency committed to making blazing fast websites. From static e-commerce sites for small companies to full-stack solutions for large organizations, we offer development solutions of all shapes and sizes. Above all else, we believe in crafting websites built for today’s fast-paced, global economy by leveraging cutting-edge technology and emphasizing international compatibility.`
  return (
    <>
      <SEO title={title} description={description} pathname="/about" />
      <Section isHero theme="primary">
        <div className="grid">
          <div>
            <h1 className="margin-top-0">{title}</h1>
            <p>{description}</p>
          </div>
          <div>IMAGE</div>
        </div>
      </Section>
      <Section>
        <div className="grid">
          <div>
            <h1 className="margin-top-0">Meet Eric, Our Fearless Founder</h1>
            <p>
              Eric Sartorius is a digital nomad that enjoys coding from all around the globe. He has been developing
              websites since 2014 and has worked with clients from all corners of the earth. Outside of web development,
              he’s an experienced movement coach and enjoys all forms of motion from breakdancing to parkour. If there’s
              one piece of advice he could give young web developers, it would be to ___!
            </p>
          </div>
          <div>IMAGE</div>
        </div>
      </Section>
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
