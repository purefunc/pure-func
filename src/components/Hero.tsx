import React, { useState, useRef, Suspense } from "react"
import { OrbitControls } from "react-router-dom"
import { TextureLoader } from "react-router-dom"
import {
  Canvas,
  useThree,
  extend,
  useFrame,
  useLoader,
} from "react-router-dom"
import { a, useSpring } from "react-router-dom"
import imageUrl from "../images/codemymenu-qr.svg"
// import bumpUrl from "../images/qr-nobg.svg"

function Cube(props) {
  // const [isBig, setIsBig] = useState(false)
  // const [isHovered, setIsHovered] = useState(false)
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  const { size, x } = useSpring({
    // size: isBig ? [2, 2, 2] : [1, 1, 1],
    size: [1.8, 1.8, 1.8],
    // x: isBig ? 2 : 0,
    x: 0,
  })

  const texture = useLoader(TextureLoader, imageUrl)
  // const bump = useLoader(TextureLoader, bumpUrl)

  // const color = isHovered ? "pink" : "salmon"

  return (
    <a.mesh
      {...props}
      ref={ref}
      scale={size}
      position-x={x}
      castShadow={true}
      receiveShadow={true}
      // onClick={() => setIsBig(!isBig)}
      // onPointerOut={() => setIsHovered(false)}
      // onPointerOver={() => setIsHovered(true)}
    >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2, 40, 40, 40]} />
      <meshPhongMaterial
        map={texture}
        // displacementMap={bump}
        // displacementScale={0.05}
        flatShading={true}
        roughness={1}
        metalness={0.5}
        shininess={90}
        attach="material"
      />
    </a.mesh>
  )
}
// box args = [width, height, depth ]
// sphere args = [width, height, depth ]

// function Plane() {
//   return (
//     <mesh
//       receiveShadow={true}
//       rotation={[-Math.PI / 2, 0, 0]}
//       position={[0, -2, -5]}
//     >
//       <planeBufferGeometry attach="geometry" args={[20, 20]} />
//       {/* <meshPhongMaterial attach="material" color="#D3D3D3" /> */}
//     </mesh>
//   )
// }

function Scene() {
  return (
    <>
      <ambientLight />
      <spotLight castShadow={true} intensity={0.6} position={[0, 10, 4]} />
      <Suspense fallback={null}>
        <Cube rotation={[10, 10, 0]} />
      </Suspense>
      <OrbitControls enabled={false} />
    </>
  )
}

export function HeroCube() {
  return (
    <>
      <Canvas style={{ position: "absolute" }}>
        <Scene />
      </Canvas>
    </>
  )
}
