"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Code,
  GraduationCap,
  Briefcase,
  Zap,
  Award,
  Target,
  Globe,
  Cpu,
  Trophy,
  Download,
  FileText,
} from "lucide-react";
import {
  ojHandles,
  education,
  developmentSkills,
  devopsSkills,
  languages,
  experience,
  personalInfo,
} from "@/data/portfolio-data";

const ResumeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 2,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.section
      id="resume"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-950/50" />
      <div className="absolute inset-0 cyber-grid animate-grid-move opacity-[0.025]" />

      {/* Enhanced Floating Orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
        animate={{
          y: [-30, 30, -30],
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"
        animate={{
          y: [25, -25, 25],
          opacity: [0.1, 0.35, 0.1],
          scale: [1.1, 1, 1.1],
          x: [15, -15, 15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Additional ambient effects */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-24"
          variants={itemVariants as Variants}
        >
          <motion.div
            className="text-white inline-flex items-center gap-4 mb-8 px-6 py-3 rounded-full border border-primary/40 bg-slate-900/60 backdrop-blur-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(34,197,94,0.4)",
              borderColor: "rgba(34,197,94,0.6)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(34,197,94,0.2)",
                "0 0 35px rgba(34,197,94,0.4)",
                "0 0 20px rgba(34,197,94,0.2)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Briefcase className="w-6 h-6 text-primary" />
            </motion.div>
            <span className="text-sm font-mono text-white uppercase tracking-wider font-bold ">
              Professional Journey
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Trophy className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-white via-primary to-slate-300 bg-clip-text text-transparent">
              {/* My <span className="neon-text">Resume</span> */}
              My <span>Resume</span>
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A comprehensive overview of my professional experience, technical
            expertise, and educational journey
          </motion.p>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              href={personalInfo.cvLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="text-white bg-primary/20 hover:bg-primary/30 border border-primary/40 hover:border-primary/60  hover:text-white backdrop-blur-sm transition-all duration-300 px-8 py-3 text-lg"
                  size="lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mr-2"
                  >
                    <Download className="w-5 h-5" />
                  </motion.div>
                  Download CV
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2"
                  >
                    <FileText className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="space-y-24" variants={containerVariants}>
          {/* Enhanced Experience Section */}
          <motion.div variants={itemVariants as Variants}>
            <motion.div
              className="text-center mb-16"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-white inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-slate-900/50 border border-primary/40 backdrop-blur">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <Target className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="text-sm font-mono text-primary uppercase tracking-wider">
                  Work Experience
                </span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Professional Experience
              </h3>
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  variants={cardHoverVariants as Variants}
                  whileHover="hover"
                  className="group"
                >
                  <motion.div className="relative">
                    {/* Enhanced glowing border effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: { duration: 3, repeat: Infinity },
                      }}
                    />

                    <Card className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                      <CardContent className="p-10">
                        {/* Background decoration */}
                        <motion.div
                          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full"
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                          <div className="mb-6 lg:mb-0 flex-1">
                            <motion.h4
                              className="text-3xl font-bold text-green-200 mb-3 group-hover:text-white transition-colors"
                              whileHover={{ x: 10, scale: 1.05 }}
                            >
                              {exp.position}
                            </motion.h4>
                            <p className="text-2xl font-semibold text-white mb-2">
                              {exp.company}
                            </p>
                            <motion.p
                              className="text-slate-400 flex items-center gap-2 text-lg"
                              whileHover={{ x: 5 }}
                            >
                              <span className="text-xl">📍</span> {exp.location}
                            </motion.p>
                          </div>
                          <div className="flex flex-col items-start lg:items-end gap-3">
                            <motion.div whileHover={{ scale: 1.1, rotate: 3 }}>
                              <Badge
                                variant="outline"
                                className="bg-slate-800/60 border-primary/50 text-blue-400 text-sm px-4 py-2"
                              >
                                {exp.period}
                              </Badge>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1, rotate: -3 }}>
                              <Badge
                                variant="secondary"
                                className="bg-slate-700/60 hover:bg-slate-600 text-sm text-slate-500 px-4 py-2"
                              >
                                {exp.type}
                              </Badge>
                            </motion.div>
                          </div>
                        </div>

                        <motion.p
                          className="text-slate-300 mb-8 text-lg leading-relaxed"
                          initial={{ opacity: 0.8 }}
                          whileInView={{ opacity: 1 }}
                          whileHover={{ scale: 1.01 }}
                        >
                          {exp.description}
                        </motion.p>

                        <div className="mb-8">
                          <div className="flex items-center gap-3 mb-5">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Zap className="w-6 h-6 text-green-400" />
                            </motion.div>
                            <h5 className="text-xl font-semibold text-white">
                              Key Technologies
                            </h5>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                whileHover={{
                                  scale: 1.1,
                                  y: -5,
                                  boxShadow: "0 5px 20px rgba(34,197,94,0.3)",
                                }}
                                transition={{
                                  delay: techIndex * 0.1,
                                  duration: 0.4,
                                }}
                              >
                                <Badge
                                  variant="outline"
                                  className="text-slate-400 bg-slate-900/60 hover:bg-primary/20 hover:border-primary/60 transition-colors cursor-pointer text-sm px-3 py-1"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-3 mb-5">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Award className="w-6 h-6 text-blue-400" />
                            </motion.div>
                            <h5 className="text-xl font-semibold text-white">
                              Key Achievements
                            </h5>
                          </div>
                          <ul className="space-y-4">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                className="text-slate-300 flex items-start gap-4 group/item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ x: 10, scale: 1.02 }}
                                transition={{
                                  delay: achIndex * 0.1,
                                  duration: 0.4,
                                }}
                              >
                                <motion.span
                                  className="text-primary text-xl mt-1 group-hover/item:scale-125 group-hover/item:rotate-90 transition-all"
                                  animate={{ rotate: [0, 5, -5, 0] }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: achIndex * 0.5,
                                  }}
                                >
                                  →
                                </motion.span>
                                <span className="leading-relaxed text-lg">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Decorative corner elements */}
                        <motion.div
                          className="text-blue-500 absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Skills Section */}
          <motion.div
            variants={itemVariants as Variants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Development Skills */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="group">
              <motion.div
                className="relative"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(34,197,94,0.15)",
                }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <Card className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-primary/40 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Code className="h-7 w-7 text-slate-500" />
                      </motion.div>
                      <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                        Development Skills
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {developmentSkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{
                            scale: 1.1,
                            y: -3,
                            boxShadow: "0 5px 15px rgba(34,197,94,0.2)",
                          }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-white bg-slate-800/50 hover:bg-primary/20 hover:border-primary/60 transition-colors cursor-pointer text-sm px-4 py-2"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* DevOps Skills */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="group">
              <motion.div
                className="relative"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(168,85,247,0.15)",
                }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  animate={{ rotate: [360, 0] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <Card className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/40 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Cpu className="h-7 w-7 text-purple-400" />
                      </motion.div>
                      <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                        DevOps & Tools
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {devopsSkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{
                            scale: 1.1,
                            y: -3,
                            boxShadow: "0 5px 15px rgba(168,85,247,0.2)",
                          }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-white bg-slate-800/50 hover:bg-purple-500/20 hover:border-purple-500/60 transition-colors cursor-pointer text-sm px-4 py-2"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Education & Other Sections */}
          <motion.div
            variants={itemVariants as Variants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Education */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="group">
              <motion.div
                className="relative h-full"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(34,197,94,0.15)",
                }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <Card className="relative h-full bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-primary/40 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <GraduationCap className="h-6 w-6 text-slate-500" />
                      </motion.div>
                      <span className="text-slate-500">Education</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        className="space-y-2 p-4 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-primary/30 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="font-semibold text-white text-sm leading-tight">
                          {edu.degree}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-slate-400 font-mono">
                          {edu.period}
                        </p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {edu.description}
                        </p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* OJ Handles */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="group">
              <motion.div
                className="relative h-full"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(34,197,94,0.15)",
                }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <Card className="relative h-full bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Code className="h-6 w-6 text-cyan-400" />
                      </motion.div>
                      <span className="text-cyan-400">
                        Competitive Programming
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {ojHandles.map((handle, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={handle.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.div
                            className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 hover:bg-slate-700/40 transition-colors group/link border border-slate-700/30 hover:border-cyan-500/40"
                            whileHover={{
                              boxShadow: "0 5px 20px rgba(34,197,94,0.2)",
                              borderColor: "rgba(34,197,94,0.4)",
                            }}
                          >
                            <div className="space-y-1">
                              <span className="text-white group-hover/link:text-cyan-300 transition-colors font-medium">
                                {handle.name}
                              </span>
                              <p className="text-xs text-slate-500 group-hover/link:text-slate-400 transition-colors">
                                {handle.period}
                              </p>
                            </div>
                            <motion.div whileHover={{ scale: 1.2, rotate: 45 }}>
                              <ExternalLink className="h-4 w-4 text-slate-400 group-hover/link:text-cyan-400 transition-colors" />
                            </motion.div>
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Languages */}
            {/* <motion.div whileHover={{ scale: 1.02, y: -5 }} className="group">
              <motion.div
                className="relative h-full"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(168,85,247,0.15)",
                }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  animate={{ rotate: [360, 0] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <Card className="relative h-full bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/40 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Globe className="h-6 w-6 text-purple-400" />
                      </motion.div>
                      <span className="text-purple-400">Languages</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={index}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">
                            {lang.name}
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                          >
                            {lang.level}%
                          </Badge>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-purple-500 to-purple-300 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.level}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div> */}

            {/* Languages */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="group">
              <motion.div
                className="relative h-full"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(168,85,247,0.15)",
                }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  animate={{ rotate: [360, 0] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <Card className="relative h-full bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/40 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Globe className="h-6 w-6 text-purple-400" />
                      </motion.div>
                      <span className="text-purple-400">Languages</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {languages.map((lang, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-4 py-2 rounded-full shadow hover:shadow-lg transition"
                          >
                            {lang.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResumeSection;
