import styled, { css } from "react-router-dom"
import { below } from "react-router-dom"

const tealButtonStyle = css`
  background: var(--teal);
  color: var(--purple);
  border: 2px solid var(--teal);
  &:hover {
    background: var(--teal);
    border-color: var(--teal);
    color: var(--purple);
    box-shadow: var(--elevation-2);
  }
`

const purpButtonStyle = css`
  background: var(--purple);
  color: var(--white);
  border: 2px solid var(--purple);
  &:hover {
    background: var(--purple);
    border-color: var(--purple);
    color: var(--purple);
    box-shadow: var(--elevation-2);
  }
`

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  font-weight: bold;
  border-radius: var(--buttonRadius);
  font-size: var(--largeFontSize);
  font-family: var(--headingFont);
  padding: 1.9rem 4.7rem;
  transition: 0.3s ease all;
  line-height: 1;

  &:disabled {
    background: var(--grey);
    cursor: auto;
  }
  & + & {
    margin-left: 20px;
  }
  ${({ size }: { size?: string }) =>
    size === "small" &&
    css`
      padding: 1.5rem 3.5rem;
      font-size: var(--baseFontSize);
    `};
  ${({ color }: { color?: string }) => {
    if (color === "teal") return tealButtonStyle
    return purpButtonStyle
  }};
  ${below.xSmall`
    display: block;
    padding: 1.3rem 2.3rem 1.2rem;
    & + & {
      margin: 20px 0 0 0;
    }
  `}
`
