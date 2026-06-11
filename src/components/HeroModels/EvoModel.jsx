import React from 'react'
import { useGLTF } from '@react-three/drei'

export function EvoModel(props) {
  const { nodes, materials } = useGLTF('/models/EvoModel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      <mesh geometry={nodes.EVOmodel_1.geometry} material={materials['Plastic_-_Translucent_Glossy_(Red)']} position={[0.106, 0.432, 0.3]} scale={52} />
      <mesh geometry={nodes.EVOmodel_2.geometry} material={materials['Display_-_7_Segments_-_LED']} position={[0.106, 21.432, 0.002]} scale={20.699} />
      <mesh geometry={nodes.EVOmodel_3.geometry} material={materials['ABS_(White)_(1)']} position={[-3.294, 20.033, -2.552]} scale={26.499} />
      <mesh geometry={nodes.EVOmodel_4.geometry} material={materials['ABS_(White)']} position={[0.106, 2.833, 0.3]} scale={52} />
    </group>
  )
}

useGLTF.preload('/models/EvoModel.glb')
