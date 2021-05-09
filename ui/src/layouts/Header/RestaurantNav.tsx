import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { LanguageSelect } from '../../components/LanguageSelect'

type Props = {
  name?: string
  logo?: string
}

export function RestaurantNav({ name = '', logo = '' }: Props) {
  const languages = [
    { value: 'en', name: 'English' },
    { value: 'kr', name: 'Korean' },
  ]
  return (
    <MenuHeader className="flex">
      <h1 className="restaurant-name">{name}</h1>
      <LanguageSelect languages={languages} />
    </MenuHeader>
  )
}

const MenuHeader = styled.header`
  margin-top: var(--headerHeight);
  border-bottom: var(--line);
  padding: var(--space);
  .restaurant-name {
    margin: 0;
    font-size: var(--smallFontSize);
  }
`
