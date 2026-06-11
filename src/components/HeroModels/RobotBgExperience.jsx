import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Robot } from "./Robot";
import HeroLights from "./HeroLights";
import { Model } from "./Wrorobot";

gsap.registerPlugin(ScrollTrigger);

const RotatingRobot = ({ scale, speedRef }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speedRef.current;
    }
  });

  return (
    <group ref={groupRef} scale={scale} position={[0, -3.5, 0]}>
      <Model />
    </group>
  );
};

const RobotBgExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const speedRef = useRef(0.004);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#wro-hero",
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

      <RotatingRobot scale={isMobile ? 0.8 : 1.2} speedRef={speedRef} />
    </Canvas>
  );
};

export default RobotBgExperience;