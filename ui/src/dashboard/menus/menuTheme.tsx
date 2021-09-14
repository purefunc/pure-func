import { css } from 'styled-components'

export type MenuThemeSettings = {
  custom?: {
    // color values
    menuMaxWidth: string
    menuBgColor: string
    menuTextColor: string
    menuHeadingColor: string
    menuLineColor: string
    menuLineSize: string
    menuLineStyle:
      | 'solid'
      | 'dashed'
      | 'dotted'
      | 'double'
      | 'groove'
      | 'ridge'
      | 'inset'
      | 'outset'
      | 'none'
      | 'hidden'
    // size values
    menuRadius: string
    menuTitleSize: string
    menuDescriptionSize: string
    categoryNameSize: string
    priceSize: string
    itemNameSize: string
    itemDescriptionSize: string
    noteSize: string
    menuBaseSpaceSize: string
    // valid font family
    menuFontFamily: string
    // numbers
    menuNormalWeight: number
    menuBoldWeight: number

    menuSpaceScale: number
    // space scale OR hard coded space values
    menuSpace: number
    menuLargeSpace: number
    menuLargestSpace: number
    menuSmallSpace: number
    menuSmallestSpace: number
  }
  colors: {
    background: string
    textColor: string
    headingColor: string
    lineColor: string
    primary: string
    accent: string
  }
  fonts: {
    family: string // valid font family
    weight: 'light' | 'normal' | 'bold'
    fontScale: 'large' | 'medium' | 'small'
  }
  layouts: {
    layout: 'normal' | 'compact' | 'spacious'
    alignment: 'left' | 'center' | 'right'
    corners: 'square' | 'slight-round' | 'round'
    shadows: 'none' | 'shallow' | 'deep'
    category: {
      hasAccordion: boolean // determine if accordion is used or if items always show
    }
  }
}

// TODO Finish logic for both custom and premade themes below

export const menuTheme = ({ theme }) => css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');

  --menuMaxWidth: ${theme?.custom?.menuMaxWidth || '940px'};
  --menuBgColor: ${theme?.custom?.menuBgColor || theme?.colors?.background || '#fff'};
  --menuTextColor: ${theme?.custom?.menuTextColor || theme?.colors?.textColor || '#000'};
  --menuHeadingColor: ${theme?.colors?.headingColor || '#000'};
  --menuLineColor: ${theme?.custom?.menuLineColor || theme?.colors?.lineColor || '#000'};
  --menuLineSize: ${theme?.custom?.menuLineSize || '1px'};
  --menuLineStyle: ${theme?.custom?.menuLineStyle || 'solid'};

  --menuRadius: ${theme?.custom?.menuRadius || '3px'};

  --menuTitleSize: 2.4rem;
  --menuDescriptionSize: 1.2rem;
  --categoryNameSize: 1.7rem;
  --priceSize: 1.1rem;
  --itemNameSize: 1.2rem;
  --itemDescriptionSize: 1rem;
  --noteSize: 0.8rem;

  --menuFontFamily: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --menuNormalWeight: 300;
  --menuBoldWeight: 700;
  --menuBaseSpaceSize: 1em;
  --menuSpaceScale: 1.5;
  --menuSpace: var(--menuBaseSpaceSize);
  --menuLargeSpace: calc(var(--menuSpace) * var(--menuSpaceScale));
  --menuLargestSpace: calc(var(--menuLargeSpace) * var(--menuSpaceScale));
  --menuSmallSpace: calc(var(--menuBaseSpaceSize) / var(--menuSpaceScale));
  --menuSmallestSpace: calc(var(--menuSmallSpace) / var(--menuSpaceScale));

  --maxTextWidth: none;

  &.menu {
    color: var(--menuTextColor);
    background-color: var(--menuBgColor);
    font-size: var(--menuBaseFontSize);
    font-family: var(--menuFontFamily);
    font-weight: var(--menuNormalWeight);

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--menuHeadingColor);
      font-family: var(--menuFontFamily);
      font-weight: var(--menuBoldWeight);
    }
    select {
      color: var(--menuHeadingColor);
      background-color: var(--menuBgColor);
    }
  }
`
