import React, { ReactChild } from 'react'

import './section.scss'

type Props = {
  children: ReactChild
  id?: string
  theme?: string
}

export function Section({ children, id = '', theme = '' }: Props) {
  return (
    <div id={id} className={`section ${theme ? `section--theme__${theme}` : ''}`}>
      <div className="wrapper">
        <section className="section--inner section--padding">{children}</section>
      </div>
    </div>
  )
}
