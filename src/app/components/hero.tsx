"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";  
import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-white pt-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 my-10 md:my-20">
      {/* Left Section - Text */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-4xl">Hi, I&quot;m Kashaf</h1>
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          I&quot;m a{" "}
          <span className="text-[#ffc0cb]">
            <Typewriter
              words={["Web Developer", "Graphics Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <div className="mt-5 space-x-4 flex flex-col md:flex-row items-center md:items-start gap-3">
          <Link href={"https://www.dropbox.com/scl/fi/gkg9kthgipd3my1atgcis/Blue-and-Gray-Simple-Professional-CV-Resume.pdf?rlkey=6k9kmb4wn1i43g1gxeiile6gh&st=qxq4y0a8&dl=0"} target="_blank">
            <button className="px-6 py-2 bg-purple-950 text-white rounded-lg w-full md:w-auto">
              Download CV
            </button>
          </Link>
          <Link href={"./contact"}>
            <button className="px-6 py-2 bg-purple-950 text-white rounded-lg w-full md:w-auto">
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative mt-10 md:mt-0"
      >
        <Image
          src={"/updated-profile.png"} 
          alt="Profile"
          width={300}
          height={300}
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full object-cover border-4"
        />
      </motion.div>
    </div>
  );
}
