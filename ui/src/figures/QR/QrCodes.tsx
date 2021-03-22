import React from 'react'
import { QrOne } from './Qr1'
import { QrTwo } from './Qr2'
import { QrThree } from './Qr3'
import './qr.scss'

export function QrCodes() {
  return (
    <div className="qr">
      <QrOne />
      <QrTwo />
      <QrThree />
    </div>
  )
}
