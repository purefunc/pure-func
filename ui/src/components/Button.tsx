import styled, { css } from 'styled-components'

const whiteButtonStyle = css`
 --buttonTextColor: var(--white);
--buttonBg: var(--white);
--buttonShadow: var(--elevation-2);
--buttonHoverBg: var(--primaryLight);
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

const whiteSmallButton = css`
  --buttonTextColor: var(--white);
  --buttonBg: var(--white);
  --buttonShadow: var(--elevation-2);
  --buttonHoverBg: var(--primaryLight);
  --buttonHoverColor: var(--white);
  --buttonHoverShadow: var(--elevation-3);
  --buttonBorder: 2px solid var(--white);
`
const gradientButtonStyle = css`
  background-size: 200% auto;
  background-image: var(--buttonGradient);
  transition: 0.5s;
  color: var(--white);
  &:hover {
    color: var(--white);
    background: var(--funkyGradient);
  }
`

export const baseButtonStyle = css`
  padding: 4px 25px ;
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
    if (color === 'outline') return outlineButtonStyle
    if (color === 'white') return whiteButtonStyle
    if (color === 'gradient') return gradientButtonStyle
    return whiteSmallButton
  }};
`
