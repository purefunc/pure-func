import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import './prism.css'

type Props = {
  code: string
  plugins?: string[]
  language?: string
}

export function Code({ code, plugins = [], language = 'js' }: Props) {
  const ref = useRef()

  const highlight = () => {
    if (ref?.current) {
      Prism.highlightElement(ref.current)
    }
  }

  useEffect(() => {
    highlight()
  }, [])

  return (
    <pre className={!plugins ? '' : plugins.join(' ')}>
      <code ref={ref} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  )
}
