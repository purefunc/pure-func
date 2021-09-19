import React, { useState } from 'react'
import styled from 'styled-components'
import { LanguageSelect } from '../../components/LanguageSelect'
import { ThemeSettingPanel } from 'components/ThemeSettingPanel'
import { Button } from 'components'

type Props = {
  name?: string
  logo?: string
}

export function RestaurantNav({ name = '', logo = '' }: Props) {
  const [isThemePanelActive, setIsThemePanelActive] = useState(false)

  // const languages = [
  //   { value: 'en', name: 'English' },
  //   { value: 'kr', name: 'Korean' },
  // ]

  return (
    <>
      <ThemeSettingPanel isActive={isThemePanelActive} closeAction={() => setIsThemePanelActive(false)} />
      <MenuHeader className="menu-header">
        <h1 className="restaurant-name">{name || logo}</h1>
        {/* <LanguageSelect languages={languages} /> */}
        <Button onClick={() => setIsThemePanelActive(true)}>Edit Theme</Button>
      </MenuHeader>
    </>
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
