import React from "react"
import { Link } from "react-router-dom"
import styled from "react-router-dom"
import { Wrapper, below } from "react-router-dom"
import Icon from "components/Icon"

const links = [
  {
    to: "/menu/",
    text: "Menu",
  },
  {
    to: "/about/",
    text: "About",
  },
  {
    to: "/contact/",
    text: "Contact",
  },
]

export default function Footer() {
  return (
    <FooterWrapper
      className="center-text"
      style={{ background: "var(--lightesterGray)" }}
    >
      <Wrapper>
        <div className="padding">
          <p className="no-margins">
            Crafted by{" "}
            <a href="https://purefunc.io" target="_blank">
              Pure Func
            </a>
          </p>
          <p className="copyright no-margins">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </Wrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  .copyright {
    color: var(--darkGray);
  }
`
