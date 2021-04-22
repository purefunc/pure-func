import React from 'react'
import styled from 'styled-components'
import { QrOne } from './Qr1'
import { QrTwo } from './Qr2'
import { QrThree } from './Qr3'

export function QrCodes() {
  return (
    <Qr className="qr">
      <QrOne />
      <QrTwo />
      <QrThree />
    </Qr>
  )
}

const Qr = styled.div`
  position: relative;
  transition: 0.6s ease all;
  .qr-1,
  .qr-2,
  .qr-3 {
    border-radius: var(--cardRadius);
    box-shadow: var(--elevation-4);
    position: absolute;
    width: 50%;
    height: auto;
    background: rgba(23, 12, 61, 0.3);
  }
  .qr-1 {
    transform: perspective(800px) rotateY(-15deg) translateY(60px) rotateX(10deg) scale(1);
    right: 0;
    bottom: 20%;
  }
  .qr-2 {
    transform: perspective(800px) rotateY(-1deg) translateY(-20px) translateX(-30px) rotateX(10deg) scale(1);
    left: 0;
    right: 0;
    margin: auto;
    bottom: 30%;
  }
  .qr-3 {
    transform: perspective(800px) rotateY(15deg) translateY(0px) rotateX(10deg) scale(1);
    bottom: 0;
  }
  @media (max-width: 880px) {
    .qr-1,
    .qr-2,
    .qr-3 {
      position: relative;
    }
    .qr-3 {
      transform: perspective(800px) rotateY(15deg) translateY(-50%) translateX(50%) rotateX(10deg) scale(1);
      bottom: 0;
    }
  }
`
