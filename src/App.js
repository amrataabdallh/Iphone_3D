import "./styles.css";
import styled from "styled-components";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import Box from "./components/Box";
import AnimatedSphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";

import { Canvas } from "@react-three/fiber";
// to give us control by mouse
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas className="canvas">
        {/* For control */}
        <OrbitControls enableZoom={false} />
        {/* Lighting */}
        <ambientLight intensity={(0, 5)} />
        <directionalLight position={[-2, 5, 2]} intensity={6} />
        {/* Box component */}
        <Iphone />
      </Canvas>
      <Canvas className="canvas">
        {/* For control */}
        <OrbitControls enableZoom={false} />
        {/* Lighting */}
        <ambientLight intensity={(0, 5)} />
        <directionalLight position={[-2, 5, 2]} intensity={2} />
        {/* Sphere component */}
        <AnimatedSphere />
      </Canvas>
      <Canvas className="canvas">
        {/* For control */}
        <OrbitControls enableZoom={false} />
        {/* Lighting */}
        <ambientLight intensity={(0, 5)} />
        <directionalLight position={[-2, 5, 2]} intensity={2} />
        {/* Sphere component */}
        <Box />
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: black;

  canvas {
    height: 800px;
  }
`;
