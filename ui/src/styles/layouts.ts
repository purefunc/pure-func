import styled, { css } from 'styled-components'
import { media } from './breakpoints'

// Page Layouts
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Grids & Utilities
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ? When To Use
// Anytime you need a grid of anything.
// Cards, Images, nearly anything
// * cols: [1,2,3], 1
export const Grid = styled.div<{ cols: number | number[] }>`
  display: grid;
  grid-gap: 20px;
  margin: 0 auto;

  ${({ cols = [] }) => {
    if (typeof cols === 'object') {
      return cols.map((_, index) => {
        // This nifty map goes over each col and adds style to a breakpoint
        const key = Object.keys(media)[index]
        return media[key]`
         grid-template-columns: repeat(${cols[index]}, 1fr);
      `
      })
    }
    return css`
      grid-template-columns: repeat(${cols}, 1fr);
    `
  }}
`

// Used anytime we need padding and max width in a layout
// if bg has color, needs to be wrapped in a div with a background color
//  * width: "tight" or width in px
export const Wrapper = styled.div`
  max-width: var(--layoutWidthMax);
  padding: 0 var(--gutterWidth);
  margin: 0 auto;
  ${media.large`
    max-width: ${({ width }: { width: string }) => (width === 'tight' ? '940px' : width)};
  `};
`
