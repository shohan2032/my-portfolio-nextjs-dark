"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  X,
  Zap,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { name: "About Me", href: "#hero" },
    { name: "Resume", href: "#resume" },
    { name: "My Projects", href: "#portfolio" },
    { name: "My Photogallery", href: "#photogallery" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: personalInfo.social.linkedin, icon: Linkedin },
    { name: "Facebook", href: personalInfo.social.facebook, icon: Facebook },
    { name: "Instagram", href: personalInfo.social.instagram, icon: Instagram },
    { name: "GitHub", href: personalInfo.social.github, icon: Github },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const headerVariants = {
    initial: {
      backgroundColor: "rgba(2, 6, 23, 0.4)",
      backdropFilter: "blur(8px)",
      borderColor: "rgba(51, 65, 85, 0.3)",
    },
    scrolled: {
      backgroundColor: "rgba(2, 6, 23, 0.9)",
      backdropFilter: "blur(20px)",
      borderColor: "rgba(34, 197, 94, 0.4)",
    },
  };

  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500"
        initial="initial"
        animate={scrolled ? "scrolled" : "initial"}
        variants={headerVariants}
        style={{
          backgroundColor: scrolled
            ? "rgba(2, 6, 23, 0.9)"
            : "rgba(2, 6, 23, 0.4)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          borderColor: scrolled
            ? "rgba(34, 197, 94, 0.4)"
            : "rgba(51, 65, 85, 0.3)",
        }}
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 cyber-grid animate-grid-move opacity-[0.02]" />

        {/* Glowing border effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{
            opacity: scrolled ? [0.3, 0.8, 0.3] : [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="#hero"
              className="group relative"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
            >
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Logo Icon */}
                <motion.div
                  className="text-white relative p-2 rounded-xl bg-slate-900/50 border border-slate-700/50 group-hover:border-primary/50 transition-colors duration-300"
                  whileHover={{
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Zap className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>

                {/* Logo Text */}
                <motion.span
                  className="text-transparent text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-700 bg-clip-text group-hover:from-primary group-hover:to-slate-300 transition-all duration-300"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  {personalInfo.tagline}
                </motion.span>
              </motion.div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Link>

            {/* Desktop Navigation */}
            <motion.nav
              className="hidden md:flex items-center space-x-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group relative px-4 py-2 rounded-xl transition-all duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-slate-800/0 group-hover:bg-slate-800/50 rounded-xl border border-transparent group-hover:border-primary/30 transition-all duration-300"
                      whileHover={{
                        backgroundColor: "rgba(34, 197, 94, 0.1)",
                        borderColor: "rgba(34, 197, 94, 0.4)",
                      }}
                    />

                    <span className="relative text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>

                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Social Links (Desktop) */}
            <motion.div
              className="hidden md:flex items-center space-x-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-2 rounded-xl"
                    >
                      <motion.div
                        className="absolute inset-0 bg-slate-800/0 group-hover:bg-slate-800/50 rounded-xl border border-transparent group-hover:border-primary/30 transition-all duration-300"
                        whileHover={{
                          backgroundColor: "rgba(34, 197, 94, 0.1)",
                          borderColor: "rgba(34, 197, 94, 0.4)",
                          boxShadow: "0 0 15px rgba(34, 197, 94, 0.3)",
                        }}
                      />

                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconComponent className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors duration-300 relative z-10" />
                      </motion.div>
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative bg-slate-800/50 border border-slate-700/50 hover:border-primary/50 hover:bg-slate-800/80 transition-all duration-300"
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={isOpen ? "close" : "open"}
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isOpen ? (
                            <X className="h-5 w-5 text-primary" />
                          ) : (
                            <Menu className="h-5 w-5 text-slate-400" />
                          )}
                        </motion.div>
                      </AnimatePresence>
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </motion.div>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] bg-slate-950/95 backdrop-blur-xl border-l border-slate-800/50"
                >
                  {/* Mobile menu background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-950/80" />
                  <div className="absolute inset-0 cyber-grid animate-grid-move opacity-[0.02]" />

                  {/* Floating orb */}
                  <motion.div
                    className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.nav
                    className="flex flex-col space-y-2 relative z-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="text-lg font-semibold mb-6 text-white flex items-center gap-3"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <motion.div
                        className="p-2 rounded-lg bg-primary/20 border border-primary/40"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Zap className="w-5 h-5 text-primary" />
                      </motion.div>
                      Menu
                    </motion.div>

                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <Link
                          href={item.href}
                          className="group relative block p-4 rounded-xl transition-all duration-300"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.href);
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-slate-800/0 group-hover:bg-slate-800/50 rounded-xl border border-transparent group-hover:border-primary/30 transition-all duration-300"
                            whileHover={{
                              backgroundColor: "rgba(34, 197, 94, 0.1)",
                              borderColor: "rgba(34, 197, 94, 0.4)",
                            }}
                          />

                          <span className="relative text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
                            {item.name}
                          </span>
                        </Link>
                      </motion.div>
                    ))}

                    <motion.div
                      className="border-t border-slate-700/50 pt-6 mt-6"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="text-sm font-semibold mb-4 text-white flex items-center gap-3">
                        <div className="p-1 rounded bg-purple-500/20 border border-purple-500/40">
                          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                        </div>
                        Social
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {socialLinks.map((link, index) => {
                          const IconComponent = link.icon;
                          return (
                            <motion.div
                              key={link.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              <Link
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                              >
                                <motion.div
                                  className="absolute inset-0 bg-slate-800/0 group-hover:bg-slate-800/50 rounded-xl border border-transparent group-hover:border-primary/30 transition-all duration-300"
                                  whileHover={{
                                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                                    borderColor: "rgba(34, 197, 94, 0.4)",
                                  }}
                                />

                                <motion.div
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  className="relative z-10"
                                >
                                  <IconComponent className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                                </motion.div>

                                <span className="text-sm text-slate-400 group-hover:text-white transition-colors duration-300 relative z-10">
                                  {link.name}
                                </span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </motion.nav>
                </SheetContent>
              </Sheet>
            </motion.div>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
              style={{
                left: `${20 + i * 30}%`,
                top: "50%",
              }}
              animate={{
                y: [-5, -15, -5],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.header>
    </>
  );
};

export default Header;
