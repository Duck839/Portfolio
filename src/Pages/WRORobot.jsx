import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TitleHeader from "../components/TitleHeader";
import RobotBgExperience from "../components/HeroModels/RobotBgExperience";
import {
  wroNavLinks,
  robotStats,
  techSpecs,
  mechanisms,
  results,
  nationalPhotos,
  internationalPhotos,
} from "../constants";
import FeatureCards from "../sections/FeatureCards";
import AnimatedCounter from "../components/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const WRORobot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // Page fade in
    gsap.fromTo(
      ".wro-page",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.inOut" },
    );

    // Hero text stagger up
    gsap.fromTo(
      ".hero-line",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.4,
      },
    );

    // Stats
    gsap.fromTo(
      ".stat-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: { trigger: ".stats-section", start: "top 80%" },
      },
    );

    // Spec cards
    gsap.fromTo(
      ".spec-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: { trigger: "#specs", start: "top 75%" },
      },
    );

    // Mechanisms
    gsap.utils.toArray(".mechanism-item").forEach((item) => {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: { trigger: item, start: "top 75%" },
        },
      );
    });

    // Results
    gsap.fromTo(
      ".result-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: { trigger: "#results", start: "top 80%" },
      },
    );
  }, []);

  return (
    <div className="wro-page text-white bg-black min-h-screen">
      <NavBar constant={wroNavLinks} showBack={true} />

      {/* HERO */}
      <section id="wro-hero" className="relative min-h-screen overflow-hidden">
        {/* Full background canvas */}
        <div className="absolute inset-0 z-0">
          <RobotBgExperience />
        </div>

        {/* Gradient overlay — dark at bottom-left, transparent at top-right */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to top right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* Bottom-left text */}
        <div className="absolute bottom-12 md:bottom-16 left-6 md:left-20 z-10 max-w-2xl">
          {/* Top badges */}
          <div className="flex gap-2 flex-wrap mb-5">
            <span className="hero-line hero-badge">AstroNuts</span>
            <span className="hero-line hero-badge">WRO RoboMission 2025</span>
          </div>

          {/* Heading */}
          <h1 className="hero-line text-5xl md:text-7xl font-bold leading-tight mb-4">
            Built for
            <br />
            Competition.
          </h1>

          {/* Description */}
          <p className="hero-line text-white-50 md:text-xl max-w-lg mb-6">
            Designed from the ground up for reliability, adaptability,
            precision, and performance. All{" "}
            <span className="text-[#68c0ff]">blue structural parts</span> were
            3D printed🛠️ to fit our custom RoboMission build. Went through
            countless modifications over 800+ hours of development.
          </p>

          {/* Award badges */}
          <div className="flex flex-wrap gap-3">
            <span className="hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
              🥇 National Champion
            </span>
            <span className="hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
              🏆 Best Robot Performance
            </span>
            <span className="hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
              🥈 International Silver
            </span>
          </div>
        </div>

        {/* Scroll hint — bottom right */}
        <div className="absolute bottom-8 right-8 md:right-20 z-10 text-white-50 text-sm flex items-center gap-2 animate-bounce">
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-padding padding-x-lg">
        <TitleHeader title="The Mission" sub="WRO RoboMission 2025" />
        <div className="mt-16 grid-2-cols items-center gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-white-50 text-lg leading-relaxed">
              WRO RoboMission is a fully autonomous robot challenge where teams
              design, build, and program robots to complete missions on a themed
              game board — with no human control once the run starts.
            </p>
            <p className="text-white-50 text-lg leading-relaxed">
              In 2025, AstroNuts competed across national and international
              stages. The robot was developed through 5 major iterations from
              April to December, with a focus on sensor reliability, modular
              attachment design, and PID-controlled movement precision.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Team", value: "AstroNuts" },
              { label: "Category", value: "RoboMission Junior" },
              { label: "Controller", value: "EVO (ESP32-S3)" },
              { label: "Season", value: "2025" },
            ].map((item) => (
              <div key={item.label} className="card-border rounded-xl p-5">
                <p className="text-white-50 text-sm">{item.label}</p>
                <p className="text-white font-semibold text-lg mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section padding-x-lg mt-10">
        <AnimatedCounter constant={robotStats} />
      </div>

      {/* TECH SPECS */}
      <section id="specs" className="section-padding padding-x-lg space-y-10">
        <TitleHeader
          className="mb-20"
          title="Hardware System"
          sub="Tech Specs"
        />
        <FeatureCards constant={techSpecs} />
      </section>

      {/* MECHANISMS */}
      <section id="mechanisms" className="section-padding padding-x-lg">
        <TitleHeader title="Mechanisms" sub="How it works" />
        <div className="mt-20 flex flex-col gap-32">
          {mechanisms.map((mech, index) => (
            <div
              key={mech.id}
              className={`mechanism-item flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-10 items-center`}
            >
              {/* Text — always on top on mobile */}
              <div className="md:w-1/2 w-full flex flex-col gap-5">
                <span className="hero-badge w-fit">{mech.id}</span>
                <h3 className="text-3xl font-bold">{mech.name}</h3>
                <ol className="flex flex-col gap-3 list-none">
                  {mech.desc.map((line, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-white-50 text-lg leading-relaxed"
                    >
                      <span className="text-white font-mono text-sm mt-1 flex-none">
                        {i + 1}.
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ol>
              </div>
              {/* Video — always on bottom on mobile */}
              <div className="md:w-1/2 w-full">
                <img
                  src={mech.videoSrc}
                  alt={mech.title}
                  className="w-full rounded-xl border border-black-50 bg-zinc-900"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPETITION RUNS */}
      <section id="videos" className="section-padding padding-x-lg">
        <TitleHeader title="Competition Runs" sub="Full Autonomous Runs" />
        <div className="mt-16 grid-2-cols gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">National Finals 2025</h3>
            <p className="text-white-50 text-sm">Singapore</p>
            <video
              src="images/national-run.mp4"
              controls
              playsInline
              className="w-full rounded-xl border border-black-50 bg-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">International Finals 2025</h3>
            <p className="text-white-50 text-sm">Singapore</p>
            <video
              src="images/international-run.mp4"
              controls
              playsInline
              className="w-full rounded-xl border border-black-50 bg-zinc-900"
            />
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="mt-20 md:mt-40">
        <div className="padding-x-lg mb-10">
          <TitleHeader title="On the Ground" sub="Competition Gallery" />
        </div>
        {[
          { label: "Nationals — Singapore", photos: nationalPhotos },
          { label: "Internationals — Singapore", photos: internationalPhotos },
        ].map(({ label, photos }) => (
          <div key={label} className="mb-12">
            <p className="padding-x-lg text-white-50 mb-4 text-3xl">{label}</p>
            <div className="marquee h-52">
              <div className="marquee-box gap-4">
                {photos.map((photo, i) => (
                  <div
                    key={i}
                    className="flex-none w-72 h-52 rounded-xl overflow-hidden border border-black-50"
                  >
                    <img
                      src={photo.imgPath}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {photos.map((photo, i) => (
                  <div
                    key={`dup-${i}`}
                    className="flex-none w-72 h-52 rounded-xl overflow-hidden border border-black-50"
                  >
                    <img
                      src={photo.imgPath}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* RESULTS */}
      <section id="results" className="section-padding padding-x-lg">
        <TitleHeader title="Results" sub="Competition Outcomes" />
        <div className="mt-16 grid-2-cols">
          {results.map((result) => (
            <div
              key={result.event}
              className="result-card card-border rounded-xl p-8 flex flex-col gap-6"
            >
              <div>
                <p className="text-white-50 text-sm">{result.year}</p>
                <h3 className="text-xl font-semibold mt-2">{result.event}</h3>
              </div>
              <div className="flex flex-col gap-4">
                {result.achievements.map((ach) => (
                  <div key={ach.label} className="flex items-center gap-3">
                    <span className="text-2xl">{ach.icon}</span>
                    <span className="text-white-50 text-lg">{ach.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WRORobot;
