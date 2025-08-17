"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Download,
  Code,
  Terminal,
  Zap,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

// Enhanced animated particle component
const AnimatedParticle = ({ delay = 0, size = "small" }) => {
  const sizeClasses = {
    small: "w-1 h-1",
    medium: "w-1.5 h-1.5",
    large: "w-2 h-2",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [-20, -100, -180],
        x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 8 + 2,
        ease: "easeOut",
      }}
      className={`absolute ${
        sizeClasses[size as keyof typeof sizeClasses]
      } bg-primary/80 rounded-full shadow-lg shadow-primary/50`}
    />
  );
};

// Enhanced Matrix rain effect
const MatrixRain = () => {
  const [characters, setCharacters] = useState<any>([]);

  useEffect(() => {
    // Fix: Remove .split("") since it's already an array
    const chars = ["0", "1", "{", "}", "<", ">", "/", "*", "+", "-", "="];
    const drops = [];

    for (let i = 0; i < 60; i++) {
      drops.push({
        id: i,
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 4 + Math.random() * 3,
        size: Math.random() > 0.7 ? "text-base" : "text-sm",
      });
    }
    setCharacters(drops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {characters.map((drop: any) => (
        <motion.div
          key={drop.id}
          initial={{ y: -100, opacity: 0, rotateX: 0 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
            opacity: [0, 0.8, 0.8, 0],
            rotateX: [0, 180, 360],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute text-primary/40 font-mono ${drop.size} font-bold`}
          style={{ left: `${drop.x}%` }}
        >
          {drop.char}
        </motion.div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNextSection = () => {
    const element = document.querySelector("#resume");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Prevent hydration mismatch by not rendering animations until client-side
  if (!mounted) {
    return (
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden"
        suppressHydrationWarning={true}
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white">
                  HI! I am{" "}
                  <span className="text-primary">
                    {personalInfo.name.split(" ")[1]}
                  </span>
                  .
                </h2>
                <h3 className="text-xl md:text-2xl text-slate-400 font-medium">
                  {personalInfo.title}
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  {personalInfo.description}
                </p>
              </div>
              <div className="pt-4">
                <Link href={personalInfo.cvLink} target="_blank">
                  <Button size="lg" className="text-lg px-8 py-6">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-slate-900 p-2 rounded-2xl">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    width={400}
                    height={500}
                    className="rounded-xl object-cover w-full max-w-sm"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Enhanced Matrix rain background */}
      <MatrixRain />

      {/* Cyber grid overlay with improved opacity */}
      <div className="absolute inset-0 cyber-grid animate-grid-move opacity-[0.03]" />

      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <AnimatedParticle
              delay={i * 0.3}
              size={i % 3 === 0 ? "large" : i % 2 === 0 ? "medium" : "small"}
            />
          </div>
        ))}
      </div>

      {/* Enhanced glowing orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.4, 0.15],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1],
          x: [15, -15, 15],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Additional ambient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl"
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          {/* Enhanced Intro Section */}
          <motion.div
            className="text-center mb-24"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.div
              className=" text-white inline-flex items-center gap-4 mb-8 px-6 py-3 rounded-full glass border border-primary/30 bg-slate-900/60 backdrop-blur-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(34, 197, 94, 0.4)",
                borderColor: "rgba(34, 197, 94, 0.6)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.2)",
                  "0 0 30px rgba(34, 197, 94, 0.4)",
                  "0 0 20px rgba(34, 197, 94, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Terminal className="w-6 h-6 text-primary" />
              </motion.div>
              <span className="text-sm font-mono text-white font-bold uppercase tracking-wider">
                {"<Full Stack Developer />"}
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-7xl md:text-9xl lg:text-[10rem] font-black mb-8 neon-text"
              data-text="PORTFOLIO"
              animate={{
                textShadow: [
                  "0 0 2px rgba(34, 197, 94, 0.2)",
                  "0 0 4px rgba(34, 197, 94, 0.4)",
                ],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <motion.span
                className="bg-gradient-to-r from-white via-primary to-slate-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                PORTFOLIO
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-slate-400 mb-12 font-light max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Next-Generation Developer Experience & Innovation
            </motion.p>
          </motion.div>

          {/* Enhanced Main Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            {/* Left: Enhanced Text Content */}
            <motion.div
              className="space-y-10"
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <div className="space-y-8">
                <motion.h2
                  className="text-6xl md:text-8xl font-bold leading-tight"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                    Hi, I&apos;m{" "}
                  </span>
                  <motion.span
                    className="text-primary relative inline-block"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(34, 197, 94, 0.5)",
                        "0 0 30px rgba(34, 197, 94, 0.8)",
                        "0 0 10px rgba(34, 197, 94, 0.5)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 40px rgba(34, 197, 94, 1)",
                    }}
                  >
                    {personalInfo.name.split(" ")[1]}
                    {/* Decorative underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 2, duration: 1.2 }}
                    />
                  </motion.span>
                </motion.h2>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-4 text-xl  font-mono group text-green-400"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="group-hover:animate-pulse"
                    >
                      <Code className="w-7 h-7" />
                    </motion.div>
                    <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text  text-white font-bold">
                      {personalInfo.title}
                    </span>
                  </motion.div>

                  <motion.p
                    className="text-xl text-slate-300 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.3, duration: 0.8 }}
                  >
                    {personalInfo.description}
                  </motion.p>
                </div>
              </div>

              {/* Enhanced Tech Stack Icons */}
              <motion.div
                className="flex items-center gap-6 pt-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.8 }}
              >
                {[Terminal, Code, Zap].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="relative group/icon"
                    whileHover={{
                      scale: 1.2,
                      rotateY: 180,
                      z: 50,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <div className="relative p-4 rounded-xl glass border border-primary/30 hover:border-primary/60 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 group-hover/icon:bg-primary/10">
                      <Icon className="w-8 h-8 text-primary group-hover/icon:text-white transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
              >
                <Link href={personalInfo.cvLink} target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ["0%", "100%", "0%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <Button
                      size="lg"
                      className="relative text-xl px-12 py-8 bg-slate-900/60 border border-primary/40 hover:border-primary text-white hover:text-slate-50 transition-all duration-300 backdrop-blur-sm font-bold"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="mr-3"
                      >
                        <Download className="h-6 w-6" />
                      </motion.div>
                      Download CV
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Enhanced Profile Image with Advanced Effects */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.6 }}
              >
                {/* Multiple rotating borders */}
                <motion.div
                  className="absolute -inset-6 rounded-3xl opacity-60"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(34, 197, 94, 0.4), rgba(168, 85, 247, 0.4), rgba(34, 197, 94, 0.4))",
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full bg-slate-950 rounded-3xl" />
                </motion.div>

                <motion.div
                  className="absolute -inset-3 rounded-2xl opacity-40"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(34, 197, 94, 0.3), rgba(168, 85, 247, 0.3))",
                    padding: "2px",
                  }}
                >
                  <div className="w-full h-full bg-slate-950 rounded-2xl" />
                </motion.div>

                {/* Enhanced glowing effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-2xl"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Main image container with enhanced styling */}
                <motion.div
                  className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-2xl glass border border-primary/30 backdrop-blur-lg"
                  whileHover={{
                    boxShadow: "0 40px 80px rgba(34, 197, 94, 0.3)",
                    borderColor: "rgba(34, 197, 94, 0.8)",
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    width={500}
                    height={600}
                    className="rounded-xl object-cover w-full max-w-md hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Enhanced overlay effect */}
                  <motion.div
                    className="absolute inset-4 rounded-xl bg-gradient-to-tr from-transparent via-primary/10 to-transparent pointer-events-none"
                    animate={{
                      opacity: [0, 0.5, 0],
                      background: [
                        "linear-gradient(45deg, transparent, rgba(34,197,94,0.1), transparent)",
                        "linear-gradient(225deg, transparent, rgba(168,85,247,0.1), transparent)",
                        "linear-gradient(45deg, transparent, rgba(34,197,94,0.1), transparent)",
                      ],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                </motion.div>

                {/* Enhanced floating elements around image */}
                <motion.div
                  className="absolute -top-6 -left-6 w-6 h-6 bg-primary rounded-full shadow-lg shadow-primary/50"
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-8 h-8 border-3 border-primary rounded-full shadow-lg shadow-primary/30"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
                  animate={{
                    x: [-10, 10, -10],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center mt-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <motion.button
              onClick={scrollToNextSection}
              className="group flex flex-col items-center gap-4 text-slate-400 hover:text-green-400 transition-colors"
              whileHover={{ scale: 1.1, y: -5 }}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm font-mono uppercase tracking-wider font-bold">
                Explore More
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-8 h-8 group-hover:animate-bounce" />
              </motion.div>
              <motion.div
                className="w-px h-24 bg-gradient-to-b from-primary via-purple-500 to-transparent"
                animate={{
                  scaleY: [0.5, 1, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
