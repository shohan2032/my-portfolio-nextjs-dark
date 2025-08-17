"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FolderOpen, Code, Rocket, Zap } from "lucide-react";
import { projects } from "@/data/portfolio-data";

const ProjectsSection = () => {
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="portfolio"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/20 to-slate-950/40" />
      <div className="absolute inset-0 cyber-grid animate-grid-move opacity-[0.02]" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-40 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-white inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-primary/40 bg-slate-900/60 backdrop-blur-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34,197,94,0.4)",
              borderColor: "rgba(34,197,94,0.6)",
            }}
          >
            <Rocket className="w-6 h-6  animate-bounce" />
            <span className="text-sm font-mono uppercase tracking-wider">
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-white via-primary to-slate-300 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            My <span className="neon-text">Projects</span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Innovative solutions and creative implementations showcasing my
            technical expertise
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -15,
                rotateY: 5,
                scale: 1.05,
              }}
              className="group"
            >
              <motion.div
                className="relative h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Glowing border effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-purple-500/30 to-primary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <Card className="relative h-full bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-primary/40 transition-all duration-500 overflow-hidden rounded-xl">
                  {/* Image Section with Enhanced Hover Effect */}
                  <motion.div
                    className="relative overflow-hidden group/image"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />

                      {/* Overlay with particles */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                        animate={{
                          background: [
                            "linear-gradient(45deg, rgba(34,197,94,0.2) 0%, transparent 50%, rgba(168,85,247,0.2) 100%)",
                            "linear-gradient(225deg, rgba(34,197,94,0.2) 0%, transparent 50%, rgba(168,85,247,0.2) 100%)",
                            "linear-gradient(45deg, rgba(34,197,94,0.2) 0%, transparent 50%, rgba(168,85,247,0.2) 100%)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      {/* Floating particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                            style={{
                              left: `${15 + i * 12}%`,
                              top: `${20 + (i % 3) * 20}%`,
                            }}
                            animate={{
                              y: [-10, -30, -10],
                              opacity: [0, 1, 0],
                              scale: [0.5, 1.2, 0.5],
                            }}
                            transition={{
                              duration: 2.5,
                              delay: i * 0.15,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </div>

                      {/* Live Demo Button Overlay */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        <Link href={project.demoLink} target="_blank">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="lg"
                              className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-slate-900 transition-all duration-300"
                              disabled={project.demoLink === "#"}
                            >
                              <ExternalLink className="mr-2 h-5 w-5" />
                              {project.demoLink === "#"
                                ? "Coming Soon"
                                : "Live Demo"}
                            </Button>
                          </motion.div>
                        </Link>
                      </motion.div>

                      {/* Project number badge */}
                      <motion.div
                        className="absolute top-3 left-3 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full border border-primary/40"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.2 + index * 0.1,
                          type: "spring",
                        }}
                      >
                        <span className="text-blue-400 font-mono text-xs font-bold">
                          #{project.id}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <CardHeader className="relative">
                    {/* Background decoration */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    <motion.div
                      className="relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <CardTitle className="flex items-center gap-3 text-slate-300 mb-2">
                        <motion.div
                          whileHover={{ rotate: 90, scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FolderOpen className="h-5 w-5 text-primary" />
                        </motion.div>
                        <span className="font-mono text-sm">
                          Project {project.id}
                        </span>
                      </CardTitle>

                      <motion.h3
                        className="text-xl font-bold text-white mb-2 group-hover:text-slate-500 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="relative pt-0">
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <motion.div
                            className="space-y-3"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <div className="flex items-center gap-2">
                              <Code className="w-4 h-4 text-slate-500" />
                              <h4 className="text-sm font-semibold text-slate-300">
                                Tech Stack:
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  transition={{
                                    delay: 0.6 + index * 0.1 + techIndex * 0.05,
                                    duration: 0.3,
                                  }}
                                >
                                  <Badge
                                    variant="outline"
                                    className="text-xs bg-slate-800/50 border-slate-600 text-slate-300 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-pointer"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                      {/* Action Button */}
                      <motion.div
                        className="pt-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <Link
                          href={project.demoLink}
                          target="_blank"
                          className="block w-full"
                        >
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant="outline"
                              className="w-full bg-slate-800/50 border-slate-600 text-slate-300 
             hover:bg-primary hover:border-primary hover:text-slate-500 
             transition-all duration-300 group/btn shadow-md hover:shadow-primary/40"
                              disabled={project.demoLink === "#"}
                            >
                              <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ x: 3 }}
                              >
                                <Zap className="w-4 h-4 group-hover/btn:animate-pulse" />
                                {project.demoLink === "#"
                                  ? "Coming Soon"
                                  : "Explore Project"}
                              </motion.div>
                            </Button>
                          </motion.div>
                        </Link>
                      </motion.div>
                    </motion.div>

                    {/* Decorative corner accent */}
                    <motion.div
                      className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
