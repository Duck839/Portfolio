import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

// register plugin once
gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".tech-card",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Tools & Technologies"
          sub="Programming and engineering tools I use"
        />

        <div className="tech-grid">
          {techStackImgs.map((tech) => (
            <div
              key={tech.name}
              className="card-border tech-card overflow-hidden group xl:rounded-5xl rounded-lg"
            >
              <div className="tech-card-animated-bg" />

              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={tech.imgPath} alt={tech.name} />
                </div>

                <div className="padding-x w-full">
                  <p className="text-xl">{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;