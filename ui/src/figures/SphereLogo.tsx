import React from 'react'
import { EyeLogo } from '../components'

export function SphereLogo() {
  return (
    <SphereWrapper className="sphere-logo">
      <figure className="ball">
        <span className="shadow"></span>
        <span className="iris">
          <EyeLogo />
        </span>
      </figure>
    </SphereWrapper>
  )
}

const SphereWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: 20px;
  perspective: 1200px;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  transform: rotateY(0.01deg);
  .ball {
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 50%;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #fcfcfc, #efeff1 66%, #9b5050 100%);
    &:after {
      content: '';
      position: absolute;
      top: 5%;
      left: 10%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(
        circle at 50% 50%,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8) 14%,
        rgba(255, 255, 255, 0) 24%
      );
      transform: translateX(-80px) translateY(-90px) skewX(-20deg);
    }
    .iris {
      width: 40%;
      height: 40%;
      margin: 30%;
      border-radius: 50%;
      background: var(--radialGradient);
      transform: translateX(68px) translateY(-60px) skewX(15deg) skewY(2deg);
      position: absolute;
      animation: move-eye-skew 5s ease-out infinite;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 90%;
        height: 90%;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 31.25%;
        height: 31.25%;
        border-radius: 50%;
        top: 18.75%;
        left: 18.75%;
        background: rgba(255, 255, 255, 0.2);
      }
    }
    .shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 20px;
      background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 50%);
      transform: rotateX(90deg) translateZ(-150px);
      z-index: -1;
    }
  }
  @keyframes move-eye-skew {
    0% {
      transform: none;
    }
    20% {
      transform: translateX(-68px) translateY(30px) skewX(15deg) skewY(-10deg) scale(0.95);
    }
    25%,
    44% {
      transform: none;
    }
    50%,
    60% {
      transform: translateX(68px) translateY(-40px) skewX(5deg) skewY(2deg) scaleX(0.95);
    }
    66%,
    100% {
      transform: none;
    }
  }
`
