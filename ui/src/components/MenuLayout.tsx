import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from 'styles'

export function MenuLayout({ children }) {
  return (
    <Wrapper width="tight">
      <div className="bottom-padding">
        {children}
        <div className="text-center">
          <Hr />
          <p>
            Made by{' '}
            <a href="https://purefunc.io" target="_blank">
              purefunc.io
            </a>
          </p>
        </div>
        <div className="text-center">
          <Link to="/menus" className="cta margins" color="teal">
            Back to Examples
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Hr = styled.hr`
  background: var(--lineColor);
  height: 1px;
  border: none;
`
