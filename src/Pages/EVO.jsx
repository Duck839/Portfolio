import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TitleHeader from "../components/TitleHeader";
import EvoBgExperience from "../components/HeroModels/EvoBgExperience";
import { evoNavLinks, ports, contributions, robotSetup } from "../constants";
import FeatureCards from "../sections/FeatureCards";
import AnimatedCounter from "../components/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);



const EVO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // Page fade in
    gsap.fromTo(
      ".evo-page",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.inOut" }
    );

    // Hero text
    gsap.fromTo(
      ".evo-hero-line",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out", delay: 0.4 }
    );

    // Port cards
    gsap.fromTo(
      ".port-card",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.07,
        scrollTrigger: { trigger: "#hardware", start: "top 75%" },
      }
    );

    // Contribution cards
    gsap.fromTo(
      ".contribution-card",
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12,
        scrollTrigger: { trigger: "#contributions", start: "top 75%" },
      }
    );

    // Robot setup cards
    gsap.fromTo(
      ".robot-setup-card",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: "#robot-setup", start: "top 80%" },
      }
    );
  }, []);

  return (
    <div className="evo-page text-white bg-black min-h-screen">
      <NavBar constant={evoNavLinks} showBack={true} />

      {/* HERO */}
      <section id="evo-hero" className="relative min-h-screen overflow-hidden">
        {/* Background canvas */}
        <div className="absolute inset-0 z-0">
          <EvoBgExperience />
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(to top right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* Bottom-left text */}
        <div className="absolute bottom-12 md:bottom-16 left-6 md:left-20 z-10 max-w-2xl">
          <div className="flex gap-2 flex-wrap mb-5">
            <span className="evo-hero-line hero-badge">Custom Microcontroller</span>
            <span className="evo-hero-line hero-badge">ESP32-S3</span>
          </div>

          <h1 className="evo-hero-line text-6xl md:text-8xl font-bold leading-tight mb-4">
            EVO
          </h1>

          <p className="evo-hero-line text-white-50 md:text-xl max-w-lg mb-6">
            A custom robotics microcontroller built to go beyond the limits of
            LEGO controllers — more ports, more sensors, more control.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="evo-hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
              ESP32-S3
            </span>
            <span className="evo-hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
              Software Versatility
            </span>
            <span className="evo-hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
               Modular Design
            </span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 md:right-20 z-10 text-white-50 text-sm flex items-center gap-2 animate-bounce">
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </section>

      {/* WHAT IS EVO */}
      <section id="what" className="section-padding padding-x-lg">
        <TitleHeader title="What is EVO?" sub="Background" />
        <div className="mt-16 grid-2-cols items-center gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-white-50 text-lg leading-relaxed">
              EVO is a custom microcontroller designed by my CCA coach specifically for competitive robotics. Built on the ESP32-S3, it was created to overcome the port limitations of standard LEGO controllers like the EV3 and SPIKE Prime — which cap out at 4 motors and 4 sensors, or 6 combined ports.
            </p>
            <p className="text-white-50 text-lg leading-relaxed">
              In 2025, WRO opened the category to allow open electronics alongside LEGO components. EVO was built to take full advantage of this — enabling teams to connect far more sensors, servos, and motors than any LEGO controller allows, while remaining WRO legal.
            </p>
            <p className="text-white-50 text-lg leading-relaxed">
              Within the club, EVO was made available to advanced teams. I was among the first to use it in competition, contributing to its development and testing as part of the AstroNuts WRO 2025 campaign.
            </p>
          </div>

          {/* Board photo */}
          <div className="flex items-center justify-center">
            <img
              src="images/EVO.png"
              alt="EVO Microcontroller Board"
              className="w-full max-w-md rounded-xl border border-black-50 shadow-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* HARDWARE OVERVIEW */}
      <section id="hardware" className="section-padding padding-x-lg space-y-10">
        <TitleHeader title="Hardware Overview" sub="Ports & Specs" />
        <AnimatedCounter constant={ports} />
      </section>

      {/* CONTRIBUTIONS */}
      <section id="contributions" className="section-padding padding-x-lg">
        <TitleHeader title="My Contributions" sub="Development & Testing" />
        <div className="mt-16 flex flex-col gap-6">
          {contributions.map((item) => (
            <div key={item.number} className="contribution-card card-border rounded-xl p-6 md:p-8 flex gap-6 items-start">
              <span className="text-white-50 text-sm font-mono mt-1 flex-none">{item.number}</span>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-white-50 text-lg leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT POWERED MY ROBOT */}
      <section id="robot-setup" className="section-padding padding-x-lg">
        <TitleHeader title="In Competition" sub="How EVO powered AstroNuts" />
        <div className="mt-16">
          <p className="text-white-50 text-lg leading-relaxed max-w-2xl mb-10 mx-auto">
            EVO was the brain of the AstroNuts WRO 2025 robot. Its expanded port count made it possible to run a sensor configuration that wouldn't fit on any standard LEGO controller — directly contributing to the team's National Championship and International Silver Medal.
          </p>
          <FeatureCards constant={robotSetup} cols="4" />
          <div className="mt-8">
            <Link
              to="/robot"
              className="ml-5 md:ml-20 inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white-50 transition-colors"
            >
              View the WRO Robot ↗
            </Link>
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section id="links" className="section-padding padding-x-lg">
        <TitleHeader title="Resources" sub="Docs & Source" />
        <div className="mt-16 grid-2-cols gap-6">
          <a
            href="https://evo.readthedocs.io/en/latest/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-border rounded-xl p-8 flex flex-col gap-3 hover:border-white/30 transition-colors group"
          >
            <span className="text-3xl">📖</span>
            <h3 className="text-white font-semibold text-xl">Documentation</h3>
            <p className="text-white-50 text-sm">Official EVO docs on ReadTheDocs — hardware specs, API reference, and usage guides.</p>
            <span className="text-white-50 text-sm group-hover:text-white transition-colors mt-2">evo.readthedocs.io ↗</span>
          </a>
          <a
            href="https://github.com/ljk1331ljk/EVO-arduino/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="card-border rounded-xl p-8 flex flex-col gap-3 hover:border-white/30 transition-colors group"
          >
            <span className="text-3xl">⚙️</span>
            <h3 className="text-white font-semibold text-xl">GitHub Releases</h3>
            <p className="text-white-50 text-sm">Arduino library releases for EVO — from early beta versions through to v1.0.0.</p>
            <span className="text-white-50 text-sm group-hover:text-white transition-colors mt-2">github.com ↗</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EVO;