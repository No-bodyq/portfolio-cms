"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

// Animated stary background (brighter, more visible, larger, more stars)
const StarBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <svg className="w-full h-full" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {Array.from({ length: 250 }).map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const r = Math.random() * 2.5 + 0.7;
        const dur = 1.2 + Math.random() * 2.5;
        const delay = Math.random() * 3;
        const opacity = 0.7 + Math.random() * 0.3;
        return (
          <circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={r}
            fill="url(#star-glow)"
            opacity={opacity}
          >
            <animate
              attributeName="opacity"
              values={`0;${opacity};0`}
              dur={`${dur}s`}
              begin={`${delay}s`} repeatCount="indefinite"
            />
          </circle>
        );
      })}
    </svg>
  </div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden">
      <StarBackground />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

// Add global style for smooth scrolling
if (typeof window !== "undefined") {
  document.documentElement.style.scrollBehavior = "smooth";
}
