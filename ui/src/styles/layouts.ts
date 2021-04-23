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
