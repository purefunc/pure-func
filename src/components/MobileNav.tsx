import React from "react"
import styled from "react-router-dom"
import { Link } from "react-router-dom"
import { Button } from "./Button"

type LinkType = {
  to: string
  text: string
}

type Props = {
  links: LinkType[]
  closeMenu: () => void
}

const MobileNav = ({ links, closeMenu }: Props) => (
  <NavBar>
    <ul>
      {links.map(({ to, text }) => (
        <li key={text}>
          <Link
            to={to}
            className="nav-link"
            onClick={closeMenu}
            aria-label={text}
          >
            {text}
          </Link>
        </li>
      ))}
      <li>
        <Button size="small" as={Link} to="/contact/" color="teal">
          Contact Us
        </Button>
      </li>
    </ul>
  </NavBar>
)

export default MobileNav

const NavBar = styled.nav`
  ul {
    margin: 0;
    text-align: center;
    li {
      list-style: none;
      display: block;
      margin: 30px 0;
      font-weight: 400;
      .nav-link {
        font-size: var(--heading-four);
        color: var(--white);
      }
      a {
        margin-left: 0;
      }
    }
  }
`
