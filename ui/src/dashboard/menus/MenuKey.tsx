import React from 'react'
import styled from 'styled-components'

export function MenuKey({ menuKey }) {
  return (
    <>
      <KeyTitle>Key</KeyTitle>
      <MenuKeyWrapper>
        {Object.entries(menuKey).map(([key, { symbol, name, description }]) => (
          <li key={key}>
            {symbol} {name} {description && `(${description})`}
          </li>
        ))}
      </MenuKeyWrapper>
    </>
  )
}

const KeyTitle = styled.h5`
  font-size: var(--itemNameSize);
`

const MenuKeyWrapper = styled.ul`
  border-radius: var(--menuRadius);
  border: var(--menuLine);
  li {
    margin: var(--menuSpace);
  }
`
