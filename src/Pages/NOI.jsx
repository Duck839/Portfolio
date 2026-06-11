import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TitleHeader from "../components/TitleHeader";
import { noiNavLinks, algorithms } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const NOI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".noi-page",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.inOut" },
    );

    gsap.fromTo(
      ".noi-hero-line",
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

    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: el, start: "top 80%" },
        },
      );
    });

    gsap.fromTo(
      ".algo-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: { trigger: "#algorithms", start: "top 75%" },
      },
    );
  }, []);

  return (
    <div className="noi-page text-white bg-black min-h-screen">
      <NavBar constant={noiNavLinks} showBack={true} />

      {/* HERO */}
      <section id="noi-hero" className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 z-0">
          <img
            className="w-screen h-screen object-cover"
            src="/images/bg.avif"
            alt=""
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-1 bg-black/60" />

        {/* Bottom-left text */}
        <div className="absolute bottom-12 md:bottom-16 left-6 md:left-20 z-10 max-w-2xl">
          <div className="flex gap-2 flex-wrap mb-5">
            <span className="noi-hero-line hero-badge">NOI 2026 Finalist</span>
            <span className="noi-hero-line hero-badge">Self-Taught</span>
          </div>

          <h1 className="noi-hero-line text-5xl md:text-7xl font-bold leading-tight mb-4">
            Algorithms
            <br />
            from Scratch.
          </h1>

          <p className="noi-hero-line text-white-50 md:text-xl max-w-lg mb-6">
            No formal computing classes. Self-taught C++ and competitive
            programming algorithms from scratch — then qualified for the
            National Olympiad in Informatics 2026.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="noi-hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
              C++
            </span>
            <span className="noi-hero-line px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
              Competitive Programming
            </span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 md:right-20 z-10 text-white-50 text-sm flex items-center gap-2 animate-bounce">
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="section-padding padding-x-lg">
        <TitleHeader title="How It Started" sub="The Journey" />
        <div className="mt-16 max-w-3xl mx-auto flex flex-col gap-6">
          <p className="fade-up text-white-50 text-lg leading-relaxed">
            I don't take the subject Computing. My programming background came
            entirely from robotics, writing logic in Python via PyBricks, and
            C++ through working on EVO, a custom microcontroller built by my CCA
            coach.
          </p>
          <p className="fade-up text-white-50 text-lg leading-relaxed">
            One day, a friend from school who takes computing mentioned he was
            joining the National Olympiad in Informatics and asked if I wanted
            to join. I had the language foundations but zero knowledge of
            algorithms or competitive programming. I decided to go for it
            anyway.
          </p>
          <p className="fade-up text-white-50 text-lg leading-relaxed">
            From there, I decided to self-study, teaching myself algorithmic
            thinking through LeetCode, YouTube, and making my own notes. This
            dedication paid off when I competed in NOI 2026 and qualified as a
            Finalist.
          </p>
        </div>
      </section>

      {/* PREPARATION */}
      <section id="preparation" className="section-padding padding-x-lg">
        <TitleHeader title="How I Prepared" sub="Self-Directed Learning" />
        <div className="mt-16 grid-2-cols items-center gap-10">
          <div className="flex flex-col gap-8">
            {[
              {
                icon: "📺",
                title: "YouTube",
                desc: "Learned algorithmic concepts through video explanations — building intuition before implementing.",
              },
              {
                icon: "💻",
                title: "LeetCode",
                desc: "Practiced problems to apply concepts hands-on, focusing on understanding patterns over grinding volume.",
              },
              {
                icon: "📄",
                title: "Printed Notes",
                desc: "Compiled and printed a personal reference sheet of templates and algorithms. Since NOI is open book, having a well-organised reference was part of the strategy.",
              },
            ].map((item) => (
              <div key={item.title} className="fade-up flex gap-5 items-start">
                <span className="text-3xl flex-none">{item.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white-50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="fade-up flex flex-col items-center justify-center gap-4">
  <div className="w-full max-w-2xl rounded-2xl border border-black-50 shadow-2xl overflow-hidden bg-black-100">
    {/* Header bar */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-black-50">
      <div className="flex items-center gap-2">
        <div className="size-3 rounded-full bg-red-500" />
        <div className="size-3 rounded-full bg-yellow-500" />
        <div className="size-3 rounded-full bg-green-500" />
      </div>
      <span className="text-sm text-white-500 font-mono">noi-notes.pdf</span>
      <a
        href="/images/noi-notes.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-white-500 hover:text-white transition-colors"
      >
        Open ↗
      </a>
    </div>

    {/* PDF iframe */}
    <iframe
      src="/images/noi-notes.pdf"
      title="NOI preparation notes"
      className="w-full h-600px"
    />
  </div>
</div>
        </div>
      </section>

      {/* ALGORITHMS */}
      <section id="algorithms" className="section-padding padding-x-lg">
        <TitleHeader title="Algorithms Studied" sub="What I Learned" />
        <div className="mt-16 grid-4-cols">
          {algorithms.map((algo) => (
            <div
              key={algo.name}
              className="algo-card card-border rounded-xl p-6 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-white font-semibold text-lg">
                  {algo.name}
                </h3>
              </div>
              <p className="text-white-50 text-sm leading-relaxed">
                {algo.desc}
              </p>
              {algo.code && (
                <pre className="bg-black-200 rounded-lg p-3 text-xs text-cyan-300 font-mono overflow-x-auto mt-2 leading-relaxed">
                  {algo.code}
                </pre>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* REFLECTION */}
      <section id="reflection" className="section-padding padding-x-lg">
        <TitleHeader title="Reflection" sub="What It Changed" />
        <div className="mt-16 max-w-3xl mx-auto flex flex-col gap-6">
          <p className="fade-up text-white-50 text-lg leading-relaxed">
            Going through NOI was one of the more challenging things I've done
            independently. Unlike robotics, where I had teammates and a coach to
            fall back on, competitive programming was entirely on my own — I had
            to self-teach C++ from scratch, figure out which algorithms to
            study, and manage my own progress with no external structure. There
            were definitely moments where I questioned whether I was ready to
            compete at that level.
          </p>
          <p className="fade-up text-white-50 text-lg leading-relaxed">
            It taught me that struggle is part of the process, not a sign that
            you're in the wrong place. Every problem I couldn't solve pushed me
            to go back, read more, and try again — and over time that cycle
            became less frustrating and more natural. I came out of it with a
            different relationship with difficulty than I had going in."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NOI;
