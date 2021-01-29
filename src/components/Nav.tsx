import React from "react"
import styled from "react-router-dom"
import { Link } from "react-router-dom"
import { below } from "react-router-dom"
import { Button } from "./Button"

type LinkType = {
  to: string
  text: string
}

type Props = {
  links: LinkType[]
}

const Nav = ({ links }: Props) => (
  <NavBar>
    <ul>
      {links.map(({ to, text }) => (
        <li key={text}>
          <Link to={to} className="nav-link" aria-label={text}>
            {text}
          </Link>
        </li>
      ))}
      <li>
        <Button
          as={Link}
          to="/contact/"
          size="small"
          style={{ color: "var(--white)" }}
        >
          Contact Us
        </Button>
      </li>
    </ul>
  </NavBar>
)

export default Nav

const NavBar = styled.nav`
  li {
    font-family: var(--headingFont);
    display: inline-block;
    font-weight: 700;
    margin-left: 4rem;
    a {
      color: var(--navPurp);
      font-size: 1.5rem;
      &:hover {
        color: var(--gray);
      }
      &.button:hover {
        color: var(--white);
      }
    }
  }
  ${below.medium`
    display: none;
  `}
`
