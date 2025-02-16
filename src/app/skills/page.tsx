"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const skills = [
  { name: "Next.js", icon: "/next-img.png" },
  { name: "Photoshop", icon: "/ps-bg.png" },
  { name: "React", icon: "/react.png" },
  { name: "typescript", icon: "/type.png" },
  { name: "Javascript", icon: "/java.png" },
  { name: "CSS", icon: "/css-3.svg" },
  { name: "Illustrator", icon: "/ill-2.png" },
  { name: "Figma", icon: "/figm.png" },
  { name: "Tailwind", icon: "/tailwind.png" },
  { name: "HTML", icon: "/html-copy.png" }
];

export default function SkillsOrbit() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.02);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center py-6">
        <h2 className="text-3xl font-bold text-white border-b-2 w-fit">My Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full items-center px-6 md:px-32">

        <div className="flex flex-col items-center md:items-start justify-center w-full">
          {[
            { name: "Next.js/React.js", percentage: "65%", color: "bg-blue-600" },
            { name: "Typescript/Javascript", percentage: "60%", color: "bg-blue-500" },
            { name: "Tailwind CSS", percentage: "70%", color: "bg-cyan-500" },
            { name: "Figma", percentage: "70%", color: "bg-green-600" },
            { name: "HTML", percentage: "90%", color: "bg-orange-500" },
            { name: "CSS", percentage: "80%", color: "bg-blue-400" },
            { name: "Adobe Photoshop", percentage: "80%", color: "bg-blue-950" },
            { name: "Adobe Illustrator", percentage: "75%", color: "bg-orange-900" }
          ].map((skill, index) => (
            <div key={index} className="text-white w-full max-w-sm mb-3">
              <div className="flex justify-between p-2">
                <h2>{skill.name}</h2>
                <h3>{skill.percentage}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: skill.percentage }}
                  transition={{ duration: 1.5 }}
                  className={`h-2 ${skill.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Rotating Circle */}
        <div className="relative mt-10 w-full h-[300px] md:h-full flex items-center justify-center">
          {skills.map((skill, index) => {
            const radius = 150; // Distance from center
            const offset = (index * Math.PI * 2) / skills.length;
            const x = Math.cos(angle + offset) * radius;
            const y = Math.sin(angle + offset) * radius;

            return (
              <motion.div
                key={index}
                animate={{ x, y }}
                transition={{ ease: "linear", duration: 0.01 }}
                className="absolute w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
              >
                <Image src={skill.icon} alt="img" width={100} height={100} className="w-full h-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
