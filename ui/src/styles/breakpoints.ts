/* BREAKPOINT DEFINITIONS */

import { css } from 'styled-components'

interface BreakpointSizes {
  xSmall: number
  small: number
  medium: number
  tablet: number
  large: number
  xLarge: number
}

interface BreakpointPixelValues {
  xSmall: string
  small: string
  medium: string
  tablet: string
  large: string
  xLarge: string
}

interface BreakpointMethods {
  below: BreakpointPixelValues
  above: BreakpointPixelValues
}

export const sizes: BreakpointSizes = {
  xSmall: 414,
  small: 600,
  medium: 880,
  tablet: 1024,
  large: 1280,
  xLarge: 1440,
}

export const breakpoints: BreakpointMethods = {
  below: {
    xSmall: `max-width: ${sizes.xSmall}px`,
    small: `max-width: ${sizes.small}px`,
    medium: `max-width: ${sizes.medium}px`,
    tablet: `max-width: ${sizes.tablet}px`,
    large: `max-width: ${sizes.large}px`,
    xLarge: `max-width: ${sizes.xLarge}px`,
  },
  above: {
    xSmall: `min-width: ${sizes.xSmall}px`,
    small: `min-width: ${sizes.small}px`,
    medium: `min-width: ${sizes.medium}px`,
    tablet: `max-width: ${sizes.tablet}px`,
    large: `min-width: ${sizes.large}px`,
    xLarge: `min-width: ${sizes.xLarge}px`,
  },
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  // @ts-ignore we're going with a new way of breakpoints
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => {
    const emSize = sizes[label] / 16
    return css`
      @media (min-width: ${emSize}em) {
        ${css(literals, ...placeholders)};
      }
    `
  }

  return acc
}, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>)

export const below = Object.keys(sizes).reduce((acc, label) => {
  // @ts-ignore we're going with a new way of breakpoints
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => {
    const emSize = sizes[label] / 16
    return css`
      @media (max-width: ${emSize}em) {
        ${css(literals, ...placeholders)};
      }
    `
  }

  return acc
}, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>)
