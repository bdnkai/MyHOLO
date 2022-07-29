import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/architecture-transformed.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line175.geometry}
        material={materials["Material #8368"]}
        position={[6.51, 0.4, 1.27]}
        scale={0.31}
      />
      <group position={[3.26, 0.4, -2.05]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials["Material #10767"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials["Material #7673"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line171.geometry}
        material={materials["Material #9171"]}
        position={[1.59, 0.4, 7.19]}
        scale={0.31}
      />
      <group position={[6.09, 1.07, -1.92]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials["Material #14956"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials["Material #9307"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials["Material #8756"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials["Material #7673"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials["Material #9279"]}
        />
      </group>
      <group position={[-2.02, 1.36, -1.4]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004_1.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004_2.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004_3.geometry}
          material={materials["Material #20620"]}
        />
      </group>
      <group position={[0.19, 2.98, -4.19]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005.geometry}
          material={materials["Material #10767"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_1.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_2.geometry}
          material={materials["Material #8368"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_3.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_4.geometry}
          material={materials["Material #2279"]}
        />
      </group>
      <group position={[2.87, 1.36, -0.86]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006.geometry}
          material={materials["Material #21252"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_1.geometry}
          material={materials["Material #8425"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_2.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_3.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_4.geometry}
          material={materials["Material #23584"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_5.geometry}
          material={materials["Material #9130"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_6.geometry}
          material={materials["Material #8368"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_7.geometry}
          material={materials["Material #6342"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_8.geometry}
          material={materials["01 - Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_9.geometry}
          material={materials["Material #9348"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line210.geometry}
        material={materials["Material #6590"]}
        position={[-2.93, 1.05, 6.93]}
        scale={0.31}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line212.geometry}
        material={materials["Material #8368"]}
        position={[-0.03, 0.79, 4.64]}
        scale={0.31}
      />
      <group position={[-1.67, 1.36, 1.42]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_1.geometry}
          material={materials["Material #6680"]}
        />
      </group>
      <group position={[-2.08, 1.45, 0.63]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008.geometry}
          material={materials["Material #10767"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_1.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_2.geometry}
          material={materials["Material #621"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_3.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_4.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_5.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_6.geometry}
          material={materials["Material #14956"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_7.geometry}
          material={materials["Material #8368"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_8.geometry}
          material={materials["Material #6404"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_9.geometry}
          material={materials["Material #23584"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_10.geometry}
          material={materials["Material #7671"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_11.geometry}
          material={materials["Material #7844"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_12.geometry}
          material={materials["Material #7673"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_13.geometry}
          material={materials["Material #7829"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_14.geometry}
          material={materials["Material #7830"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_15.geometry}
          material={materials["Material #6680"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_16.geometry}
          material={materials["Material #7781"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_17.geometry}
          material={materials["Material #7675"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_18.geometry}
          material={materials["Material #7672"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_19.geometry}
          material={materials["Material #7564"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_20.geometry}
          material={materials["Material #6342"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_21.geometry}
          material={materials["Material #7549"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_22.geometry}
          material={materials["Material #8757"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere183.geometry}
        material={materials["Material #9277"]}
        position={[-1.24, 0.86, 4.8]}
        scale={0.31}
      />
      <group position={[-0.72, 0.82, 4.75]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011.geometry}
          material={materials["Material #6404"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_1.geometry}
          material={materials["Material #8371"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_2.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_3.geometry}
          material={materials["Material #8756"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_4.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_5.geometry}
          material={materials["Material #8425"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_6.geometry}
          material={materials["Material #8757"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_7.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_8.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_9.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_10.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_11.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_12.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_13.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_14.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_15.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_16.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_17.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_18.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_19.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_20.geometry}
          material={materials["Material #9348"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_21.geometry}
          material={materials["01 - Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_22.geometry}
          material={materials["Material #563"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_23.geometry}
          material={materials["Material #560"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_24.geometry}
          material={materials["Material #9130"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_25.geometry}
          material={materials["Material #8368"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material #9131"]}
        position={[1.97, 0.9, 0.9]}
        scale={0.31}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere162.geometry}
        material={materials["Material #9277"]}
        position={[2.26, 0.83, 1.14]}
        scale={0.31}
      />
      <group position={[7.18, 0.56, 3.5]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_1.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_2.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_3.geometry}
          material={materials["Material #563"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line235.geometry}
        material={materials["Standardmaterial.001"]}
        position={[4.2, 1.05, 2.35]}
        scale={0.31}
      />
      <group position={[5.7, 0.83, 1.71]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018.geometry}
          material={materials["Material #8756"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_1.geometry}
          material={materials["Material #10445"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_2.geometry}
          material={materials["Material #10767"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_3.geometry}
          material={materials["Material #9307"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_4.geometry}
          material={materials["Material #332"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_5.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_6.geometry}
          material={materials["Material #24544"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_7.geometry}
          material={materials["Material #319"]}
        />
      </group>
      <group position={[6.83, 1.46, 1.44]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_1.geometry}
          material={materials["Material #6680"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_2.geometry}
          material={materials["Material #10767"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_3.geometry}
          material={materials["Material #10726"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_4.geometry}
          material={materials["Material #10724"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_5.geometry}
          material={materials["Material #10725"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_6.geometry}
          material={materials["Material #8757"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_7.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_8.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_9.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_10.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_11.geometry}
          material={materials["Material #8756"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_12.geometry}
          material={materials["Material #7673"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_13.geometry}
          material={materials["Material #9279"]}
        />
      </group>
      <group position={[5.91, 0.57, 6.38]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021.geometry}
          material={materials["Material #20167"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021_1.geometry}
          material={materials["Material #8756"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021_2.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021_3.geometry}
          material={materials["Material #6680"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021_4.geometry}
          material={materials["Material #21266"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021_5.geometry}
          material={materials["Material #23442"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object179.geometry}
        material={materials["01 - Default"]}
        position={[4.47, 0.97, 0.21]}
        scale={0.31}
      />
      <group position={[4.17, 1.73, -1.48]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023.geometry}
          material={materials["Material #10445"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_1.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_2.geometry}
          material={materials["Material #563"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_3.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_4.geometry}
          material={materials["Material #621"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_5.geometry}
          material={materials["Material #23584"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_6.geometry}
          material={materials["Material #6421"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_7.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_8.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_9.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_10.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
      </group>
      <group position={[4.53, 0.4, 7.99]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025.geometry}
          material={materials["Material #563"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_1.geometry}
          material={materials["Material #560"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_2.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_3.geometry}
          material={materials["Material #8425"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_4.geometry}
          material={materials["Material #9130"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_5.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_6.geometry}
          material={materials["Material #11539"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_7.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_8.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_9.geometry}
          material={materials["Material #8757"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_10.geometry}
          material={materials["Material #9307"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_11.geometry}
          material={materials["Material #14956"]}
        />
      </group>
      <group position={[1.05, 0.65, 1.88]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh024.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh024_1.geometry}
          material={materials["Material #9130"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh024_2.geometry}
          material={materials["Material #621"]}
        />
      </group>
      <group position={[5.91, 1.16, -2.42]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026.geometry}
          material={materials["Material #621"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_1.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_2.geometry}
          material={materials["Material #8425"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_3.geometry}
          material={materials["Material #9130"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_4.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_5.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_6.geometry}
          material={materials["Material #563"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_7.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_8.geometry}
          material={materials["Material #7673"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_9.geometry}
          material={materials["Material #19916"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_10.geometry}
          material={materials["Material #560"]}
        />
      </group>
      <group position={[-3.92, 0.92, 5.19]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh028.geometry}
          material={materials["Material #563"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_1.geometry}
          material={materials["Material #560"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_2.geometry}
          material={materials["Material #2279"]}
        />
      </group>
      <group position={[5.01, 0.64, 5.04]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_1.geometry}
          material={materials["Material #11210"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_2.geometry}
          material={materials["Material #7673"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_3.geometry}
          material={materials["Material #9279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_4.geometry}
          material={materials["Material #14956"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_5.geometry}
          material={materials["Material #6680"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_6.geometry}
          material={materials["Material #8759"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_7.geometry}
          material={materials["Material #8751"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_8.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_9.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_10.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_11.geometry}
          material={materials["Material #8757"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_12.geometry}
          material={materials["Material #8750"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_13.geometry}
          material={materials["Material #10767"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_14.geometry}
          material={materials["Material #8749"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_15.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_16.geometry}
          material={materials["Material #8748"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_17.geometry}
          material={materials["Material #10445"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_18.geometry}
          material={materials["01 - Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_19.geometry}
          material={materials["Material #8756"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_20.geometry}
          material={materials["Material #7671"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_21.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_22.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_23.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_24.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_25.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_26.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_27.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_28.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_29.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_30.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_31.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
      </group>
      <group position={[3.66, 2.67, -5.73]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027.geometry}
          material={materials["Material #8425"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_1.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_2.geometry}
          material={materials["01 - Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_3.geometry}
          material={materials["Material #22529"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_4.geometry}
          material={materials["Material #20167"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_5.geometry}
          material={materials["Material #22530"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_6.geometry}
          material={materials["Material #21400"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_7.geometry}
          material={materials["Material #6117"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_8.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_9.geometry}
          material={materials["Material #21252"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_10.geometry}
          material={materials["Material #21253"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_11.geometry}
          material={materials["Material #21266"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_12.geometry}
          material={materials["Material #7673"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_13.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_14.geometry}
          material={materials["Material #21007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_15.geometry}
          material={materials["Material #23482"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_16.geometry}
          material={materials["Material #20964"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_17.geometry}
          material={materials["Material #20963"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_18.geometry}
          material={materials["Material #20965"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_19.geometry}
          material={materials["Material #24544"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_20.geometry}
          material={materials["Material #621"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_21.geometry}
          material={materials["Material #6404"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_22.geometry}
          material={materials["Material #8368"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_23.geometry}
          material={materials["Material #563"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_24.geometry}
          material={materials["Material #560"]}
        />
      </group>
      <group position={[-0.16, 0.4, -0.73]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh032.geometry}
          material={materials["Material #10767"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh032_1.geometry}
          material={materials["Material #7673"]}
        />
      </group>
      <group position={[-1.91, 0.35, 6.18]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh033.geometry}
          material={materials["Material #10445"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh033_1.geometry}
          material={materials["Material #9278"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh033_2.geometry}
          material={materials["Material #6680"]}
        />
      </group>
      <group position={[-0.04, 2.57, -7.79]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029.geometry}
          material={materials["Material #6117"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_1.geometry}
          material={materials["Material #10445"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_2.geometry}
          material={materials["Material #7671"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_3.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_4.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_5.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_6.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_7.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_8.geometry}
          material={materials["Material #8759"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_9.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_10.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_11.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_12.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_13.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_14.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_15.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_16.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_17.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_18.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_19.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_20.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_21.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_22.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_23.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_24.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_25.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_26.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_27.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_28.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_29.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_30.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_31.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_32.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_33.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_34.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_35.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_36.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_37.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_38.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_39.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_40.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_41.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_42.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_43.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_44.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_45.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
      </group>
      <group position={[-3.5, 0.56, 8.6]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh030.geometry}
          material={materials["Material #6680"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh030_1.geometry}
          material={materials["Material #6117"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh030_2.geometry}
          material={materials["Material #23584"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh030_3.geometry}
          material={materials["Material #9171"]}
        />
      </group>
      <group position={[-5.37, 1.19, 3.55]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031.geometry}
          material={materials["Material #7673"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_1.geometry}
          material={materials["Material #2518"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_2.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_3.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_4.geometry}
          material={materials["Material #6342"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_5.geometry}
          material={materials["01 - Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_6.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_7.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_8.geometry}
          material={materials["Material #10445"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object219.geometry}
        material={materials["Material #17533"]}
        position={[6.08, 1.07, -1.93]}
        scale={0.31}
      />
      <group position={[-3.13, 2.54, 3.63]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034.geometry}
          material={materials["Material #7673"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_1.geometry}
          material={materials["Material #7009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_2.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_3.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_4.geometry}
          material={materials["Material #6680"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_5.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_6.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_7.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_8.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_9.geometry}
          material={materials["Material #6133"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_10.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_11.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_12.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_13.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_14.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_15.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_16.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_17.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_18.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_19.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_20.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_21.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_22.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_23.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_24.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_25.geometry}
          material={materials["Material #2518"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_26.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_27.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_28.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_29.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_30.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh034_31.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object212.geometry}
        material={materials["Material #6342"]}
        position={[-1.94, 3.51, -6.9]}
        scale={0.31}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object213.geometry}
        material={materials["Material #2279"]}
        position={[-5.73, 2.68, -4.59]}
        scale={0.31}
      />
      <group position={[-1.81, 0.39, -7.62]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh035.geometry}
          material={materials["Material #20167"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh035_1.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh035_2.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh035_3.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh035_4.geometry}
          material={materials["Material #563"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh035_5.geometry}
          material={materials["Material #8368"]}
        />
      </group>
      <group position={[4.2, 1.05, 2.35]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh040.geometry}
          material={materials["MultiMat_31 Slot #2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh040_1.geometry}
          material={materials["Material #9130"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh040_2.geometry}
          material={materials["Material #17533"]}
        />
      </group>
      <group position={[-3.45, 2.44, -4.25]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036.geometry}
          material={materials["Material #8759"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_1.geometry}
          material={materials["Material #7673"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_2.geometry}
          material={materials["Material #17533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_3.geometry}
          material={materials["Material #17695"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_4.geometry}
          material={materials["Material #9130"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_5.geometry}
          material={materials["Material #7671"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_6.geometry}
          material={materials["Material #621"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_7.geometry}
          material={materials["Material #23442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_8.geometry}
          material={materials["Material #16949"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_9.geometry}
          material={materials["Material #16634"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_10.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_11.geometry}
          material={materials["Material #16461"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_12.geometry}
          material={materials["Material #16462"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_13.geometry}
          material={materials["Material #16488"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_14.geometry}
          material={materials["Material #3568"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_15.geometry}
          material={materials["Material #16503"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_16.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_17.geometry}
          material={materials["Material #6342"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_18.geometry}
          material={materials["Material #23584"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_19.geometry}
          material={materials["Material #16069"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_20.geometry}
          material={materials["Material #15819"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_21.geometry}
          material={materials["Material #8368"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_22.geometry}
          material={materials["Material #6421"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_23.geometry}
          material={materials["Material #15618"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_24.geometry}
          material={materials["Material #14956"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_25.geometry}
          material={materials["Material #10445"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_26.geometry}
          material={materials["Material #9279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_27.geometry}
          material={materials["Material #14827"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_28.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_29.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_30.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_31.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_32.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_33.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_34.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_35.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_36.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_37.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_38.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_39.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_40.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_41.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_42.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_43.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_44.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_45.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_46.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_47.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_48.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_49.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_50.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_51.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_52.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_53.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_54.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_55.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_56.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_57.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_58.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_59.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_60.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_61.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_62.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh036_63.geometry}
          material={materials["MultiMat_7 Slot #27"]}
        />
      </group>
      <group position={[0.19, 2.98, -4.19]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh039.geometry}
          material={materials["01 - Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh039_1.geometry}
          material={materials["Material #2279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh039_2.geometry}
          material={materials["Material #17533"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/architecture-transformed.glb");
