import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center justify-center scroll-mt-24"
    id="hero"
  >
    {/* 3D Globe Canvas */}
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-auto">
      <div className="w-[600px] h-[600px] opacity-80">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere={true}
          atmosphereColor="#3b82f6"
          atmosphereAltitude={0.18}
          width={600}
          height={600}
          animateIn={true}
        />
      </div>
    </div>
    {/* Overlayed Intro Content */}
    <div className="relative z-10 flex flex-col items-center text-center gap-8">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
        Explore My World
      </h1>
      <p className="text-xl text-zinc-200 max-w-xl mx-auto">
        Hi, I’m{" "}
        <span className="text-cyan-400 font-semibold">Asher</span> — a fullstack
        developer passionate about building global, interactive, and beautiful web
        experiences.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-8"
        >
          <a href="#projects">
            View Projects{" "}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-cyan-600 text-cyan-400 font-semibold px-8 hover:bg-cyan-950"
        >
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
      <div className="flex gap-6 justify-center mt-4">
        {/* Add your social icons here if needed */}
      </div>
    </div>
  </section>
);

export default HeroSection;
