"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { type Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles Loaded!");
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full"
        options={{
          background: { color: "#20002c" },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: ["#ff6384", "#ff9f68", "#cbb4d4"] },
            shape: { type: "circle" },
            opacity: { value: 0.8, random: true },
            size: { value: 5, random: true },
            move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
          },
        }}
      />
    </div>
  );
};

export default Background;
