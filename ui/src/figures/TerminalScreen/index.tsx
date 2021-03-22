import React, { useEffect } from 'react'
// import Prism from 'prismjs'

import './terminal-screen.scss'
import { Code } from '../../utilities/Code/Code'

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
    <figure className="terminal-screen">
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
    </figure>
  )
}
