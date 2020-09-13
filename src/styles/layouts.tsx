import styled, { css } from "styled-components"
import { media } from "./breakpoints"
// Grids & Utilities
// 🔒 Not configurable
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Used anytime you need a grid of anything.
// Cards, Images, nearly anything
// * cols: [1,2,3], 1
export const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  gap: var(--columnPadding);
  ${({ cols = [] }) => {
    if (typeof cols === "object") {
      return cols.map((_, index: number) => {
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
  }};
`

// This is a standard layout only to be used as a main page layout
// Anytime you want the uneven two col layout.
export const Cols = styled.div`
  display: grid;
  grid-gap: 0;
  ${media.medium`
    grid-template-columns: ${({ isReverse }: { isReverse: boolean }) =>
      isReverse ? "var(--columnWidth) 1fr" : "1fr var(--columnWidth)"};
  `};
`
