import React from "react";
import { counterItems, words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" },
    );
  }, []);
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="images/bg.png" alt="Background" />
      </div>
      <div className="hero-layout">
        {/*LEFT: Hero content*/}
        <header className="flex flex-col justify-center md:justify-start md:w-[55%] xl:w-full w-screen md:px-10 xl:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>I am</h1>
              <h1>
                a
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-lg">
              I design custom 3D-printed mechanisms, write control logic in C++
              and Python, and compete in robotics and algorithms at a national
              level. I design the parts, print them, wire them up, and write
              the code that drives them.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
        {/*Right: 3d model*/}
      </div>
      <AnimatedCounter constant={counterItems} />
    </section>
  );
};

export default Hero;
