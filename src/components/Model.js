import React from 'react'
import {OrbitControls} from '@react-three/drei'
import { Con_three } from '../3Dmodels/Con_three'
import { Suspense } from 'react'
const Model = () => {
  return (
    <>
    <ambientLight intensity={1}/>
    <directionalLight intensity={5} />
    <Suspense fallback={null}></Suspense>
    {/* <animateMotion/> */}
    <OrbitControls autoRotate maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/4} enableZoom={false}/>
      <mesh>
        <Con_three/>
        <meshNormalMaterial/>
      </mesh>
    </>
  )
}

export default Model
