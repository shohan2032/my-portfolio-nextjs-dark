"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Heart,
  Code,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", href: personalInfo.social.linkedin, icon: Linkedin },
    { name: "Facebook", href: personalInfo.social.facebook, icon: Facebook },
    { name: "Instagram", href: personalInfo.social.instagram, icon: Instagram },
    { name: "GitHub", href: personalInfo.social.github, icon: Github },
  ];

  const contactInfo = [
    {
      title: "Address",
      value: personalInfo.contact.address,
      icon: MapPin,
      delay: 0.1,
    },
    {
      title: "Phone",
      value: personalInfo.contact.phone,
      icon: Phone,
      delay: 0.2,
    },
    {
      title: "Email",
      value: personalInfo.contact.email,
      icon: Mail,
      delay: 0.3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
      <div className="absolute inset-0 cyber-grid animate-grid-move opacity-[0.02]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-10 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
        >
          {/* Contact Information */}
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className="group"
                style={{
                  transition: `all 0.3s ease ${info.delay}s`,
                }}
              >
                <motion.div
                  className="h-full relative p-6 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:border-primary/40 transition-all duration-500"
                  whileHover={{
                    boxShadow: "0 10px 30px rgba(34,197,94,0.1)",
                    borderColor: "rgba(34,197,94,0.4)",
                  }}
                >
                  {/* Background glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center gap-3 mb-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 group-hover:border-primary/50 transition-colors"
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                          backgroundColor: "rgba(34,197,94,0.1)",
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="h-5 w-5 text-green-400 group-hover:text-primary transition-colors" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-slate-500 transition-colors">
                        {info.title}
                      </h3>
                    </motion.div>

                    <motion.p
                      className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors "
                      whileHover={{ scale: 1.02 }}
                    >
                      {info.value}
                    </motion.p>
                  </div>

                  {/* Decorative corner */}
                  <motion.div
                    className="text-blue-400 absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Social Links Section */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group"
          >
            <motion.div
              className="relative p-6 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:border-primary/40 transition-all duration-500 h-full"
              whileHover={{
                boxShadow: "0 10px 30px rgba(34,197,94,0.1)",
                borderColor: "rgba(34,197,94,0.4)",
              }}
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                }}
              />

              <div className="relative z-10 h-full flex flex-col">
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 group-hover:border-primary/50 transition-colors"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      backgroundColor: "rgba(34,197,94,0.1)",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code className="h-5 w-5 text-green-400" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-slate-500 transition-colors">
                    Connect
                  </h3>
                </motion.div>

                <div className="flex-1 flex items-center">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {socialLinks.map((link, index) => {
                      const IconComponent = link.icon;
                      return (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <motion.div
                              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-primary/50 hover:bg-slate-800/60 transition-all duration-300 group/link"
                              whileHover={{
                                scale: 1.05,
                                y: -2,
                                boxShadow: "0 5px 20px rgba(34,197,94,0.2)",
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <IconComponent className="h-5 w-5 text-slate-400 group-hover/link:text-primary transition-colors" />
                              <span className="text-sm text-slate-400 group-hover/link:text-white transition-colors">
                                {link.name}
                              </span>
                            </motion.div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="relative mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-primary/50 to-purple-500/50"
            animate={{
              x: ["-50%", "50%", "-50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/40 backdrop-blur-sm border border-slate-800/50"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(34,197,94,0.4)",
              backgroundColor: "rgba(34,197,94,0.05)",
            }}
            transition={{ duration: 0.3 }}
          >
            <p
              className="text-slate-400 text-sm"
              suppressHydrationWarning={true}
            >
              © {new Date().getFullYear()} {personalInfo.name}. Made with
            </p>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <p className="text-slate-400 text-sm">and lots of coffee.</p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="flex justify-center mt-6 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-primary/60 rounded-full"
                animate={{
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </motion.footer>
  );
};

export default Footer;
