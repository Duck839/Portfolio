import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import { Model } from "./Wrorobot";

const HeroExprience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [-350, 350, -350], fov: 45 }}>
      

      <OrbitControls
        enablePan={false} // Keeps the robot locked right in the center
        enableZoom={true}
        maxDistance={600} 
        minDistance={50} 
        minPolarAngle={0} 
        maxPolarAngle={Math.PI} 
        minAzimuthAngle={-Infinity} 
        maxAzimuthAngle={Infinity}
        enableDamping={true} 
        dampingFactor={0.1}
      />
      <HeroLights />
      <group
      scale={isMobile?0.7:1}
      position={[0, -3.5, 0]}>
      <Model />
      </group>
    </Canvas>
  );
};

export default HeroExprience;
