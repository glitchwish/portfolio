import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaCheck,
  FaCircleExclamation,
} from "react-icons/fa6";

const API_URL = import.meta.env.VITE_CONTACT_API_URL;

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    if (!API_URL) {
      setStatus("error");
      setErrorMessage(
        "The contact service is not configured. Please try again later."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const controller = new AbortController();

    // Render's free service can take a little time to wake up.
    const timeout = setTimeout(() => {
      controller.abort();
    }, 60000);

    try {
      const response = await fetch(`${API_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "omit",
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Unable to send your message. Please try again."
        );
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error.name === "AbortError") {
        setErrorMessage(
          "The server took too long to respond. Please try again."
        );
      } else {
        setErrorMessage(
          error.message ||
            "Something went wrong. Please try again."
        );
      }

      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-50 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-48 top-0 h-[600px] w-[600px] rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-gray-100 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 flex items-center gap-3"
          >
            <span className="section-dot h-2 w-2 rounded-full bg-gray-950" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Contact
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-gray-950 md:text-6xl lg:text-7xl"
          >
            Let's build something
            <span className="text-gray-400">
              {" "}
              worth talking about.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-7 text-gray-500 md:text-lg md:leading-8"
          >
            Have an interesting project, an opportunity, or just want to talk
            about technology? I'd be happy to hear from you.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-6">
          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-7 md:p-9"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                Get in touch
              </p>

              <h3 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-gray-950">
                Have an idea?
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
                I'm always open to discussing software engineering, AI/ML
                projects, interesting products, research, and new
                opportunities.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                Email
              </p>

              <a
                className="mt-3 flex items-center gap-3 text-sm font-semibold text-gray-800 transition-colors hover:text-gray-950"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                  <FaEnvelope className="text-sm" />
                </span>

                official.vishal.sarup.mathur.1@gmail.com

              </a>
            </div>

            <div className="mt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                Elsewhere
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.linkedin.com/in/vishal-mathur25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-950 hover:text-white"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/VishalMathur01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-950 hover:text-white"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>

                <span className="text-xs font-medium text-gray-500">
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-2xl border border-gray-200 bg-white p-7 md:p-9"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Send a message
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-gray-950">
                  Start a conversation.
                </h3>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-700 sm:flex">
                <FaPaperPlane className="text-sm" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={isSubmitting}
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-300 focus:border-gray-400 focus:bg-white focus:ring-4 focus:ring-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    disabled={isSubmitting}
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-300 focus:border-gray-400 focus:bg-white focus:ring-4 focus:ring-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={200}
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-300 focus:border-gray-400 focus:bg-white focus:ring-4 focus:ring-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={5000}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your project..."
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-4 text-sm leading-6 text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-300 focus:border-gray-400 focus:bg-white focus:ring-4 focus:ring-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending message...
                  </>
                ) : status === "success" ? (
                  <>
                    <FaCheck />
                    Message sent
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send message
                    <FaArrowUpRightFromSquare className="text-[9px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="mt-4 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-center text-xs font-medium text-green-700">
                  Thanks for reaching out. Your message has been sent
                  successfully.
                </div>
              )}

              {status === "error" && (
                <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-medium leading-5 text-red-700">
                  <FaCircleExclamation className="mt-0.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <p className="mt-4 text-center text-[10px] leading-5 text-gray-400">
                I'll get back to you as soon as possible.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
