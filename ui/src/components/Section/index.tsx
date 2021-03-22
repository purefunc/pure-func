import React, { ReactChild } from 'react'

import './section.scss'

type Props = {
  children: ReactChild
  id?: string
  theme?: string
  isSkewed?: boolean
  isHero?: boolean
}

export function Section({ children, id = '', theme = '', isSkewed = false, isHero = false }: Props) {
  return (
    <div
      id={id}
      className={`section ${theme ? `section--theme__${theme}` : ''} ${isSkewed || isHero || theme === "funky" ? `section--skewed` : ''} ${
        isHero ? `section--hero` : ''
      }`}
    >
      <div className="wrapper">
        <section className="section__inner section--padding">{children}</section>
      </div>
      {(isSkewed || isHero || theme === "funky") && <div className={`slash ${theme === "funky" && !isSkewed ? `no-skew` : ``}`} />}
    </div>
  )
}
