import React from 'react'
import { SEO } from 'utilities'
import { Section } from '../components'

export default function AboutPage() {
  return (
    <>
      <SEO title="About" description="All About Pure Func" />
      <Section isHero theme="funky-5">
        <div className="grid">
          <div>
            <h1 className="margin-top-0">Who We Are</h1>
            <p>
              Pure Func is a modern web development agency committed to making blazing fast websites. From static
              e-commerce sites for small companies to full-stack solutions for large organizations, we offer development
              solutions of all shapes and sizes. Above all else, we believe in crafting websites built for today’s
              fast-paced, global economy by leveraging cutting-edge technology and emphasizing international
              compatibility.
            </p>
          </div>
          <div>IMAGE</div>
        </div>
      </Section>
    </>
  )
}
