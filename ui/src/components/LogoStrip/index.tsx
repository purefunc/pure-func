import React from 'react'

import cssLogo from 'images/logos/css-logo.svg'
import htmlLogo from 'images/logos/html-logo.svg'
import reactLogo from 'images/logos/react-logo.svg'
import vueLogo from 'images/logos/vue-logo.svg'
import svelteLogo from 'images/logos/svelte-logo.svg'
import jsLogo from 'images/logos/js-logo.svg'
import tsLogo from 'images/logos/ts-logo.svg'
import figmaLogo from 'images/logos/figma-logo.svg'
import gatsbyLogo from 'images/logos/gatsby-logo.svg'
import wpLogo from 'images/logos/wp-logo.svg'

import './logoStrip.scss'

const logos = [
  {
    src: cssLogo,
    alt: 'CSS',
  },
  {
    src: htmlLogo,
    alt: 'HTML',
  },
  {
    src: reactLogo,
    alt: 'React',
  },
  {
    src: svelteLogo,
    alt: 'Svelte',
  },
  {
    src: vueLogo,
    alt: 'Vue',
  },
  {
    src: jsLogo,
    alt: 'Javascript',
  },
  {
    src: tsLogo,
    alt: 'Typescript',
  },
  {
    src: figmaLogo,
    alt: 'Figma',
  },
  {
    src: gatsbyLogo,
    alt: 'Gatsby',
  },
  {
    src: wpLogo,
    alt: 'Word Press',
  },
]
export function LogoStrip() {
  return (
    <div className="logo-strip">
      {logos.map(({ src, alt }) => (
        <img className="logo-strip--logo" src={src} alt={alt + ' Logo'} />
      ))}
    </div>
  )
}
