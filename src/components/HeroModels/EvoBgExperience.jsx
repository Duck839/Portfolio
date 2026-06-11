import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EvoModel } from "./EvoModel.jsx";
import HeroLights from "./HeroLights.jsx";

gsap.registerPlugin(ScrollTrigger);

const RotatingEvo = ({ scale, speedRef }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speedRef.current;
    }
  });

  return (
    <group ref={groupRef} scale={scale} position={[0, 0, 0]}>
      <EvoModel />
    </group>
  );
};

const EvoBgExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const speedRef = useRef(0.004);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#evo-hero",
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        speedRef.current = 0.004 * (1 - self.progress);
      },
    });
    return () => trigger.kill();
  }, []);

  return (
    <Canvas camera={{ position: [-250, 200, -250], fov: 45 }}>
      <HeroLights />

      <RotatingEvo scale={isMobile ? 1.5 : 2} speedRef={speedRef} /> 
    </Canvas>
  );
};

export default EvoBgExperience;
