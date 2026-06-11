import React from "react";

const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={0.7} color="#ffffff" />

      {/* 2. Key Light (Front-Right): Strongest light, casts your shadows */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={2.5}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />

      {/* 3. Rim/Back Light (Back-Left): Highlights the silhouette of the robot */}
      {/* We use a slight blue tint to add a professional "studio" look */}
      <directionalLight
        position={[-10, 5, -5]}
        intensity={3}
        color="#aaccff" 
      />

      {/* 4. Top/Fill Light: Softens the top surfaces to prevent "blown-out" whites */}
      <spotLight
        position={[0, 15, 0]}
        intensity={1.5}
        angle={0.5}
        penumbra={1}
        color="#ffffff"
      />
    </>
  );
};

export default HeroLights;
