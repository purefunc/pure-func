import { css } from 'styled-components'

export const menuTheme = css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');

  &.menu {
    --menuMaxWidth: 940px;

    --menuBgColor: #fff;
    --menuColor: #000;
    --menuHeaderColor: #000;
    --menuLineColor: #000;
    --menuLine: 1px solid var(--menuLineColor);

    --menuRadius: 3px;
    --isMenuCentered: 0;

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

    color: var(--menuColor);
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
      color: var(--menuHeaderColor);
      font-family: var(--menuFontFamily);
      font-weight: var(--menuBoldWeight);
    }
    select {
      color: var(--menuHeaderColor);
      background-color: var(--menuBgColor);
    }

    &-theme {
      &__light {
      }
      &__dark {
        --menuBgColor: #000;
        --menuColor: #fff;
        --menuHeaderColor: #fff;
        --menuLineColor: #eee;
        --menuLine: 1px solid var(--menuLineColor);
      }
      &_centered {
        --isMenuCentered: 1;
        text-align: center;
      }
    }
  }
`
