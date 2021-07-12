import styled, { css } from 'styled-components'

const whiteButtonStyle = css`
  --buttonTextColor: var(--primaryColor);
  --buttonBg: var(--white);
  --buttonShadow: var(--elevation-2);
  --buttonHoverBg: transparent;
  --buttonHoverColor: var(--white);
  --buttonHoverShadow: var(--elevation-3);
  --buttonBorder: 2px solid var(--white);
`
const ghostButtonStyle = css`
  --buttonBorder: 2px solid var(--white);
  color: var(--white);
  --buttonBg: transparent;
  --buttonShadow: none;
  --buttonHoverBorderColor: var(--white);
  --buttonHoverBg: var(--white);
  --buttonHoverColor: var(--primaryColor);
`

const outlineButtonStyle = css`
  --buttonTextColor: var(--primaryColor);
  --buttonBg: transparent;
  --buttonBorder: 2px solid var(--primaryColor);
  --buttonHoverBg: var(--primaryColor);
  --buttonHoverColor: var(--white);
  --buttonHoverBorderColor: var(--primaryColor);
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
  --buttonTextColor: var(--white);
  --buttonBg: var(--primaryColor);
  --buttonBorder: none;
  --buttonShadow: var(--elevation-2);
  --buttonHoverBg: var(--primaryLight);
  --buttonHoverColor: var(--white);
  --buttonHoverShadow: var(--elevation-3);
  --buttonPadding: 5px 15px;
  --buttonMinWidth: 8rem;
  --buttonPadding: 5px 15px;
  --buttonMinWidth: 8rem;
  display: inline-block;
  text-align: center;
  appearance: none;
  color: var(--buttonTextColor);
  background-color: var(--buttonBg);
  border: var(--buttonBorder);
  padding: var(--buttonPadding);
  min-width: var(--buttonMinWidth);
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

export const smallButtonStyle = css`
  --buttonPadding: 2px 15px;
  --buttonMinWidth: none;
  font-size: var(--smallText);
`

export const Button = styled.button<{
  color?: string
  size?: string
}>`
  ${baseButtonStyle};
  ${({ size }) => size === 'small' && smallButtonStyle};
  ${({ color }) => {
    if (color === 'ghost') return ghostButtonStyle
    if (color === 'outline') return outlineButtonStyle
    if (color === 'white') return whiteButtonStyle
    if (color === 'gradient') return gradientButtonStyle
  }};
`
