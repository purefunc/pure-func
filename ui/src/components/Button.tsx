import styled, { css } from 'styled-components'

const whiteButtonStyle = css`
  --buttonTextColor: var(--white);
  --buttonBg: var(--white);
  --buttonShadow: var(--elevation-2);
  --buttonHoverBg: transparent;
  --buttonHoverColor: var(--white);
  --buttonHoverShadow: var(--elevation-3);
  --buttonBorder: 2px solid var(--white);
`
const outlineButtonStyle = css`
  --buttonBorder: 2px solid var(--white);
  color: var(--white);
  --buttonBg: transparent;
  --buttonShadow: none;
  --buttonHoverBorderColor: var(--white);
  --buttonHoverBg: var(--white);
  --buttonHoverColor: var(--primaryColor);
`

const dashboardWhiteButtonStyle = css`
  --buttonTextColor: var(--white);
  --buttonBg: var(--white);
  --buttonShadow: var(--elevation-2);
  --buttonHoverColor: var(--primary);
  --buttonHoverShadow: var(--elevation-3);
  --buttonBorder: 2px solid var(--white);
`

const gradientButtonStyle = css`
  background: var(--buttonGradient);
  color: var(--white);
  --hoverTransition: 0.5s fade;
  &:hover {
    color: var(--white);
    background: #5c1373;
  }
`

export const baseButtonStyle = css`
  padding: 4px 25px;
  min-width: none;
  display: inline-block;
  text-align: center;
  appearance: none;
  background-color: var(--buttonBg);
  border: var(--buttonBorder);
  border-radius: var(--buttonRadius);
  box-shadow: var(--buttonShadow);
  transition: var(--hoverTransition);
  outline: none;
  &:hover {
    color: var(--buttonHoverColor);
    background-color: var(--buttonHoverBg);
    border-color: var(--buttonHoverBorderColor);
    box-shadow: var(--buttonHoverShadow);
  }
  &[disabled] {
    opacity: 0.4;
  }
`

export const Button = styled.button<{
  color?: string
}>`
  ${baseButtonStyle};
  ${({ color }) => {
    if (color === 'dashboard') return dashboardWhiteButtonStyle
    if (color === 'outline') return outlineButtonStyle
    if (color === 'white') return whiteButtonStyle
    if (color === 'gradient') return gradientButtonStyle
    return whiteButtonStyle
  }};
`
