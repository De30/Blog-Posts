/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa
title: Earth
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Earth() {
  const meshRef = useRef(null);

  useFrame(() => (meshRef.current.rotation.z += 0.003));

  const { nodes, materials } = useGLTF("/earth/earth.gltf");

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            ref={meshRef}
            geometry={nodes.Sphere_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/earth/earth.gltf");