"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star } from "lucide-react";
import { achievements } from "@/data/portfolio-data";

const GallerySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="photogallery"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-950/50" />
      <div className="absolute inset-0 cyber-grid animate-grid-move opacity-[0.03]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        animate={{
          y: [-30, 30, -30],
          x: [-20, 20, -20],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          y: [20, -20, 20],
          x: [15, -15, 15],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
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
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-primary/40 bg-slate-900/60 backdrop-blur-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34,197,94,0.4)",
              borderColor: "rgba(34,197,94,0.6)",
            }}
          >
            <Trophy className="w-6 h-6 text-white animate-pulse" />
            <span className="text-sm font-mono text-white uppercase tracking-wider">
              Achievement Gallery
            </span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-white via-primary to-slate-300 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            Photo<span className="neon-text">Gallery</span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Achievements, certifications, and memorable moments that define my
            journey
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div className="space-y-12" variants={containerVariants}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-purple-500/30 to-primary/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <Card className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-primary/40 transition-all duration-500 overflow-hidden rounded-2xl">
                  <CardContent className="p-0">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                      }`}
                    >
                      {/* Image Section */}
                      <motion.div
                        className={`relative aspect-video lg:aspect-square overflow-hidden ${
                          index % 2 === 1 ? "lg:col-start-2" : ""
                        }`}
                        whileHover="hover"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <motion.div
                          variants={imageVariants}
                          className="relative w-full h-full"
                        >
                          <Image
                            src={achievement.image}
                            alt={achievement.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </motion.div>

                        {/* Overlay with particles */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-primary rounded-full"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`,
                              }}
                              animate={{
                                y: [-10, -30, -10],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                              }}
                            />
                          ))}
                        </div>

                        {/* Achievement number badge */}
                        <motion.div
                          className="absolute top-4 left-4 px-3 py-2 bg-slate-900/80 backdrop-blur-sm rounded-full border border-primary/40"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            type: "spring",
                          }}
                        >
                          <span className="text-primary font-mono text-sm font-bold">
                            #{achievement.id}
                          </span>
                        </motion.div>
                      </motion.div>

                      {/* Content Section */}
                      <motion.div
                        className={`p-8 lg:p-12 flex items-center relative ${
                          index % 2 === 1 ? "lg:col-start-1" : ""
                        }`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        {/* Background decoration */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-r-2xl"
                          animate={{
                            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                          }}
                          transition={{ duration: 8, repeat: Infinity }}
                        />

                        <div className="space-y-6 relative z-10">
                          <motion.div
                            className="flex items-start gap-4"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <motion.div
                              className="p-3 rounded-xl bg-primary/20 border border-primary/40 backdrop-blur-sm"
                              whileHover={{
                                rotate: 360,
                                scale: 1.1,
                                boxShadow: "0 0 25px rgba(34,197,94,0.5)",
                              }}
                              transition={{ duration: 0.6 }}
                            >
                              <Award className="h-6 w-6 text-white" />
                            </motion.div>

                            <div className="flex-1">
                              <motion.h3
                                className="text-2xl lg:text-3xl font-bold leading-relaxed text-white mb-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                {achievement.title}
                              </motion.h3>

                              <motion.div
                                className="flex items-center gap-2 text-primary font-mono text-sm"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <Star className="w-4 h-4 fill-current" />
                                {/* <span>Achievement Unlocked</span> */}
                              </motion.div>
                            </div>
                          </motion.div>

                          {/* Animated progress bar */}
                          <motion.div
                            className="w-full h-1 bg-slate-700 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{
                                delay: 0.8,
                                duration: 2,
                                ease: "easeOut",
                              }}
                            />
                          </motion.div>

                          {/* Decorative elements */}
                          <motion.div
                            className="flex items-center justify-between text-slate-400 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                          >
                            {/* <span className="font-mono">Status: Completed</span> */}
                            <motion.div
                              className="flex gap-1"
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-2 h-2 bg-primary rounded-full animate-pulse"
                                  style={{ animationDelay: `${i * 0.2}s` }}
                                />
                              ))}
                            </motion.div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
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

export default GallerySection;
