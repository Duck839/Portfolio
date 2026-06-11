import React from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExperienceSection = () => {
  useGSAP(() => {
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.set(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Journey & Achievements"
          sub="Robotics and engineering progress"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="flex xl:flex-row flex-col items-center justify-between gap-10">
                  {/* Left: existing content */}
                  <div className="xl:w-4/6 w-full">
                    <div className="flex items-start">
                      <div className="timeline-wrapper">
                        <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>
                      <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div className="timeline-logo">
                          <img
                            src={card.logoPath}
                            alt="logo"
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-3xl">
                            {card.title}
                          </h1>
                          <p className="my-5 text-white-50">📅{card.date}</p>
                          <p className="text-[#839cb5] italic">Highlights</p>
                          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                            {card.responsibilities.map((responsibility) => (
                              <li key={responsibility} className="text-lg">
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  {card.image && (
                    <div className="expText xl:w-2/6 w-full flex items-center justify-center mt-6 xl:mt-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full max-w-sm object-contain rounded-xl shadow-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
