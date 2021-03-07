import React from 'react'
import { Logo } from '../../components'
import tuneImg from 'images/tune-header.png'
import './laptop.scss'

export function Laptop() {
  return (
    <div className="macbook">
      <div className="inner">
        <div className="screen">
          <div className="face-one">
            <div className="camera"></div>
            <div className="display">
              <img src={tuneImg} alt="" />
              <div className="shade"></div>
            </div>
            <span>Pure Func</span>
          </div>
          <Logo isShort isWhite />
        </div>
        <div className="body">
          <div className="face-one">
            <div className="touchpad"></div>
            <div className="keyboard">
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key space"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
            </div>
          </div>
          <div className="pad one"></div>
          <div className="pad two"></div>
          <div className="pad three"></div>
          <div className="pad four"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  )
}
