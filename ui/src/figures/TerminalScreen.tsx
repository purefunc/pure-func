import React, { useEffect } from 'react'
import styled from 'styled-components'
// import Prism from 'prismjs'

import { Code } from '../utilities/Code/Code'

// marked.setOptions({
//   highlight: (code, lang) => {
//     if (Prism.languages[lang])
//       return Prism.highlight(code, Prism.languages[lang || 'markup'], lang)
//     return code
//   },
// })

const code = `
const createUniversalPortal = (children: ReactNode) => {
  if (!(typeof window !== 'undefined' && window.document && window.document.createElement)) {
    return null
  }
  let modalRoot = document.getElementById('modal-root')
  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
  }
  return ReactDOM.createPortal(children, modalRoot)
}

const Portal = ({ children }: { children: ReactNode }) => createUniversalPortal(children)

`

export function TerminalScreen() {
  const rowCount = 14
  const rows = Array.from(Array(rowCount), (_, i) => i++)

  const lines = ['']

  // useEffect(() => {
  //   setTimeout(() => Prism.highlightAll(), 0)
  // }, [])

  return (
    <TerminalWrapper className="terminal-screen">
      <Code code={code} plugins={['line-numbers']} />
      <div className="terminal-screen__bottom-nav text-small">
        <div>
          <span className="terminal-screen__bottom-nav__tag">MAIN</span>
          <span>index.js</span>
        </div>
        <div className="terminal-screen__bottom-nav__menu">
          <span>javascript v.1.2.0</span>
        </div>
      </div>
    </TerminalWrapper>
  )
}

const TerminalWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--deepPurple);
  border-radius: var(--cardRadius);
  box-shadow: var(--elevation-3);
  overflow: hidden;
  max-width: 100%;
  transform: perspective(500px) rotateY(-20deg) translateY(-15px) rotateX(3deg) scale(1);
  .terminal-screen__bottom-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 var(--cardRadius) var(--cardRadius);
    background: var(--black);
    color: var(--brandColor);
    overflow: hidden;
    .terminal-screen__bottom-nav__tag {
      background: var(--brandColor);
      padding: 10px;
      color: var(--textColor);
      margin-right: var(--smallestSpace);
    }
    .terminal-screen__bottom-nav__menu {
      padding: 4px;
      color: var(--gray);
    }
  }
  @media only screen and (max-width: 800px) {
    transform: perspective(800px) rotateY(30deg) translateY(15px) rotateX(3deg) scale(1);
  }
`
