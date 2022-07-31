import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/holodisplay.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.15, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Holo_Display_1.geometry}
          material={materials.Shell}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Holo_Display_2.geometry}
          material={materials["Inner Glow"]}
        /> 
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Holo_Display_3.geometry}
          material={materials.Display}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Holo_Display_4.geometry}
          material={materials["Outer Glow"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Holo_Display_5.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/holodisplay.glb");
