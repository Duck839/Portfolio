import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import { Model } from "./Wrorobot";
import { useState } from "react";

const HeroExprience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [interacted, setInteracted] = useState(false);
  return (
    <Canvas
      camera={{ position: [-350, 350, -350], fov: 30 }}
      onPointerDown={() => setInteracted(true)}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        maxDistance={600}
        minDistance={50}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
        minAzimuthAngle={-Infinity}
        maxAzimuthAngle={Infinity}
        enableDamping={true}
        dampingFactor={0.1}
        autoRotate={!interacted}
        autoRotateSpeed={1.5}
      />
      <HeroLights />
      <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]}>
        <Model />
      </group>
    </Canvas>
  );
};

export default HeroExprience;
