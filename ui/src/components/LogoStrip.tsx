import React from 'react'
import styled from 'styled-components'
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

const logos = [
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
    src: gatsbyLogo,
    alt: 'Gatsby',
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
    src: cssLogo,
    alt: 'CSS',
  },
  {
    src: htmlLogo,
    alt: 'HTML',
  },
  {
    src: wpLogo,
    alt: 'Word Press',
  },
]
export function LogoStrip() {
  return (
    <StripWrapper className="logo-strip">
      {logos.map(({ src, alt }) => (
        <img className="logo-strip__logo" src={src} alt={alt + ' Logo'} key={src} />
      ))}
    </StripWrapper>
  )
}

const StripWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  opacity: 0.5;
  transform: rotate(-10deg);
  padding: var(--space);
  .logo-strip__logo {
    & + & {
      margin-left: var(--space);
    }
    @media (max-width: 800px) {
      width: 50px;
      height: auto;
    }
    @media (max-width: 600px) {
      width: 25px;
      height: auto;
    }
  }
`
