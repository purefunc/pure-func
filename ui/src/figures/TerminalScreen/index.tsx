import React from 'react'
import './terminal-screen.scss'

export function TerminalScreen() {
  return (
    <figure className="terminal-screen">
      <code className="terminal-screen__code padding">
        <pre>
          <span>1</span>
          <br />
          <span>2</span>
          <br />
          <span>3</span>
          <br />
          <span>4</span>
          <br />
          <span>5</span>
          <br />
          <span>6</span>
          <br />
          <span>7</span>
          <br />
          <span>8</span>
          <br />
          <span>9</span>
          <br />
          <span>10</span>
          <br />
          <span>11</span>
          <br />
          <span>12</span>
          <br />
          <span>13</span>
          <br />
          <span>14</span>
          <br />
        </pre>
      </code>
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
