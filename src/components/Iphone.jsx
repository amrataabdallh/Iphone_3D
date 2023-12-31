/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.8 iphone.gltf
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/iphone-13-pro-0c34a039d50e42f4b46738ec26929c15
Title: iPhone 13 Pro
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/iphone.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={400}>
          <mesh
            geometry={nodes.Frame001_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Frame001_Port_0.geometry}
            material={materials.Port}
          />
          <mesh
            geometry={nodes.Frame001_Antenna_0.geometry}
            material={materials.Antenna}
          />
          <mesh
            geometry={nodes.Frame001_Frame2_0.geometry}
            material={materials.Frame2}
          />
          <mesh
            geometry={nodes.Frame001_Mic_0.geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Body002_Mic_0.geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Body002_Bezel_0.geometry}
            material={materials.Bezel}
          />
          <mesh
            geometry={nodes.Body002_Body_0.geometry}
            material={materials.Body}
          />
          <mesh
            geometry={nodes.Body002_Wallpaper_0.geometry}
            material={materials.Wallpaper}
          />
          <mesh
            geometry={nodes.Body002_Camera_Glass_0.geometry}
            material={materials.Camera_Glass}
          />
          <mesh
            geometry={nodes.Body002_Lens_0.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Body002_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes.Camera002_Body_0.geometry}
            material={materials.Body}
          />
          <mesh
            geometry={nodes.Camera002_Glass_0.geometry}
            material={materials.Glass}
          />
          <mesh
            geometry={nodes.Camera002_Camera_Frame001_0.geometry}
            material={materials["Camera_Frame.001"]}
          />
          <mesh
            geometry={nodes.Camera002_Mic_0.geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Body003_Screen_Glass_0.geometry}
            material={materials.Screen_Glass}
          />
          <mesh
            geometry={nodes.Button001_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Circle001_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Apple_Logo001_Logo_0.geometry}
            material={materials.Logo}
          />
          <mesh
            geometry={nodes.Camera004_Body_0.geometry}
            material={materials.Body}
          />
          <mesh
            geometry={nodes.Camera004_Gray_Glass_0.geometry}
            material={materials.Gray_Glass}
          />
          <mesh
            geometry={nodes.Camera004_Flash_0.geometry}
            material={materials.Flash}
          />
          <mesh
            geometry={nodes.Camera004_Port_0.geometry}
            material={materials.Port}
          />
          <mesh
            geometry={nodes.Camera004_Camera_Frame_0.geometry}
            material={materials.Camera_Frame}
          />
          <mesh
            geometry={nodes.Camera004_Camera_Glass_0.geometry}
            material={materials.Camera_Glass}
          />
          <mesh
            geometry={nodes.Camera004_Lens_0.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Camera004_Black_Glass_0.geometry}
            material={materials.Black_Glass}
          />
          <mesh
            geometry={nodes.Camera005_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/iphone.gltf");
