import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "About", href: "#hero" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/vishal-mathur25/",
      icon: FaLinkedinIn,
    },
    {
      name: "GitHub",
      href: "https://github.com/VishalMathur01",
      icon: FaGithub,
    },
    {
      name: "Email",
      href: "mailto:official.vishal.sarup.mathur.1@gmail.com",
      icon: FaEnvelope,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-gray-50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gray-50 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <a
              href="#"
              className="inline-flex text-2xl font-semibold tracking-[-0.035em] text-gray-950 md:text-3xl"
            >
              Vishal Sarup Mathur
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
              Software Engineer building secure digital products that last,
              alongside AI-powered systems and full-stack solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Navigation
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-gray-950"
                >
                  <span className="h-1 w-1 rounded-full bg-gray-300 transition-all duration-300 group-hover:w-2 group-hover:bg-gray-950" />
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Connect
            </p>

            <div className="mt-5 flex gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                const isEmail = social.name === "Email";

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-gray-950 hover:bg-gray-950 hover:text-white"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400 sm:flex-row sm:items-center sm:gap-3">
            <span>© {currentYear} Vishal Sarup Mathur</span>

            <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

            <span>All rights reserved</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500 transition-colors duration-300 hover:text-gray-950"
          >
            Back to top

            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
              <FaArrowUp className="text-[10px]" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;