/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/model/360_sphere_robot.glb 
Author: mikeramos (https://sketchfab.com/mikeramos)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/360-sphere-robot-a0bd28b7133648848427a5c27975611b
Title: 360 Sphere Robot
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./model/360_sphere_robot.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.017}>
          <group name="8cfcbf279e5145b29fef01b31cc1d658fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="sphere_body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="sphere_body_glossy_paint_white_0" geometry={nodes.sphere_body_glossy_paint_white_0.geometry} material={materials.glossy_paint_white} />
                  <mesh name="sphere_body_black_matte_0" geometry={nodes.sphere_body_black_matte_0.geometry} material={materials.black_matte} />
                  <mesh name="sphere_body_metal_0" geometry={nodes.sphere_body_metal_0.geometry} material={materials.metal} />
                  <mesh name="sphere_body_eyes_light_0" geometry={nodes.sphere_body_eyes_light_0.geometry} material={materials.eyes_light} />
                  <mesh name="sphere_body_dark_glass_0" geometry={nodes.sphere_body_dark_glass_0.geometry} material={materials.dark_glass} />
                  <mesh name="sphere_body_black_matter_blender_0" geometry={nodes.sphere_body_black_matter_blender_0.geometry} material={materials.black_matter_blender} />
                  <mesh name="sphere_body_thruster_light_0" geometry={nodes.sphere_body_thruster_light_0.geometry} material={materials.thruster_light} />
                  <mesh name="sphere_body_blender_glass_0" geometry={nodes.sphere_body_blender_glass_0.geometry} material={materials.blender_glass} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./model/360_sphere_robot.glb')
