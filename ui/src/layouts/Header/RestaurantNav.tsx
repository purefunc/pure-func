import React from 'react'
import styled from 'styled-components'
import { LanguageSelect } from '../../components/LanguageSelect'

type Props = {
  name?: string
  logo?: string
}

export function RestaurantNav({ name = '', logo = '' }: Props) {
  // const languages = [
  //   { value: 'en', name: 'English' },
  //   { value: 'kr', name: 'Korean' },
  // ]

  return (
    <MenuHeader className="menu-header">
      <h1 className="restaurant-name">{name || logo}</h1>
      {/* <LanguageSelect languages={languages} /> */}
    </MenuHeader>
  )
}

const MenuHeader = styled.header`
  border-bottom: var(--line);
  padding: var(--space);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .restaurant-name {
    margin: 0;
    font-size: var(--smallFontSize);
  }
`
