import React, { ReactChild } from 'react'

import './section.scss'

type Props = {
  children: ReactChild
  id?: string
  theme?: string
  isSkewed?: boolean
}

export function Section({ children, id = '', theme = '', isSkewed = false }: Props) {
  return (
    <div id={id} className={`section ${theme ? `section--theme__${theme}` : ''} ${isSkewed ? `section--skewed` : ''}`}>
      <div className="wrapper">
        <section className="section--inner section--padding">{children}</section>
      </div>
      {isSkewed && <div className="slant" />}
    </div>
  )
}
