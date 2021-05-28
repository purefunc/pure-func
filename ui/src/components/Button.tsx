import styled, { css } from 'styled-components'

const whiteGhostButton = css`
--buttonBorder: 2px solid var(--white);
--buttonTextColor: var(--white);
--buttonBg: transparent;
--buttonShadow: none;
--buttonHoverBorderColor: var(--white);
--buttonHoverBg: var(--white);
--buttonHoverColor: var(--primaryColor);
  padding: 2px 15px;
  min-width: none;
  display: inline-block;
  text-align: center;
  appearance: none;
  color: var(--buttonTextColor);
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
`
const whiteSmallButton = css`
  --buttonTextColor: var(--primaryColor);
  --buttonBg: var(--white);
  --buttonShadow: var(--elevation-2);
  --buttonHoverBg: var(--primaryLight);
  --buttonHoverColor: var(--white);
  --buttonHoverShadow: var(--elevation-3);
  --buttonBorder: 2px solid var(--white);
  
  padding: 2px 15px;
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
const orangeButtonStyle = css`
  
`

export const baseButtonStyle = css`

`

const outlineButtonStyle = css`

`

export const Button = styled.button<{
  color?: string
}>`
  ${baseButtonStyle};
  ${({ color }) => {
    if (color === 'white') return whiteGhostButton
    if (color === 'outline') return outlineButtonStyle
    if (color === 'orange') return orangeButtonStyle
    return whiteSmallButton
  }};
`
