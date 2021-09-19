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
    menuDisclaimerSize: string
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
  colors?: {
    background: string
    textColor: string
    headingColor: string
    lineColor: string
    primary: string
    accent: string
  }
  fonts?: {
    family: string // valid font family
    weight: 'light' | 'normal' | 'bold'
    fontScale: 'large' | 'medium' | 'small'
  }
  layouts?: {
    layout: 'normal' | 'compact' | 'spacious'
    alignment: 'left' | 'center' | 'right'
    corners: 'square' | 'slight-round' | 'round'
    category: {
      hasAccordion: boolean // determine if accordion is used or if items always show
    }
  }
}

// TODO Finish logic for both custom and pre-made themes below

export const menuTheme = ({ theme }) => css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');

  --menuMaxWidth: ${theme?.custom?.menuMaxWidth || '940px'};
  --menuBgColor: ${theme?.custom?.menuBgColor || theme?.colors?.background || '#fff'};
  --menuTextColor: ${theme?.custom?.menuTextColor || theme?.colors?.textColor || '#000'};
  --menuHeadingColor: ${theme?.colors?.headingColor || '#000'};
  --menuLineColor: ${theme?.custom?.menuLineColor || theme?.colors?.lineColor || '#ccc'};
  --menuLineSize: ${theme?.custom?.menuLineSize || '1px'};
  --menuLineStyle: ${theme?.custom?.menuLineStyle || 'solid'};

  --menuRadius: ${() => {
    if (theme?.custom?.menuRadius) return theme?.custom?.menuRadius
    if (theme?.layouts?.corners === 'slight-round') return '6px'
    if (theme?.layouts?.corners === 'round') return '30px'
    return '0'
  }};

  --menuTitleSize: ${theme?.custom?.menuTitleSize || '2.4rem'};
  --menuDescriptionSize: ${theme?.custom?.menuDescriptionSize || '1.2rem'};
  --menuDisclaimerSize: ${theme?.custom?.menuDisclaimerSize || '1.2rem'};
  --categoryNameSize: ${theme?.custom?.categoryNameSize || '1.7rem'};
  --priceSize: ${theme?.custom?.priceSize || '1.1rem'};
  --itemNameSize: ${theme?.custom?.itemNameSize || '1.2rem'};
  --itemDescriptionSize: ${theme?.custom?.itemDescriptionSize || '1rem'};
  --noteSize: ${theme?.custom?.noteSize || '0.8rem'};

  --menuFontFamily: ${theme?.custom?.menuFontFamily || `'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`};
  --menuNormalWeight: ${theme?.custom?.menuNormalWeight || '300'};
  --menuBoldWeight: ${theme?.custom?.menuBoldWeight || '700'};
  --menuBaseSpaceSize: ${theme?.custom?.menuBaseSpaceSize || '1em'};
  --menuSpaceScale: ${theme?.custom?.menuSpaceScale || '1.5'};
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
