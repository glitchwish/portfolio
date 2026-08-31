import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaLaptopCode,
  FaCircleCheck,
} from "react-icons/fa6";

const experiences = [
  {
    number: "01",
    period: "Aug 2025 — Present",
    role: "Software Developer",
    company: "SISL Infotech Pvt. Limited.",
    location: "Lucknow",
    description:
      "Developed and deployed a digital module enabling issuance of 2,500+ digital verification certificates.",
    highlights: [
      "Developed and deployed a digital module enabling issuance of 2,500+ digital verification certificates.",
      "Developed and deployed a local HSM access module to remove every browser based dependency for DSC usage proposed to be used by 200+ government officers.",
      "Gathered requirements and prepared Functional Requirement Specifications (FRS), built internal automation tools, and prepared technical documentation, UAT reports, and implementation proposals.",
      "Conducted UAT, trained 200+ government officers, and represented the technical team in meetings with senior government officials on digital transformation initiatives and new governance schemes.",
    ],
    technologies: [
      "PHP",
      "JavaScript",
      "FastAPI",
      "Apache server",
      "Xampp",
      "Ajax",
      "Axios",
      "jQuery",
      "Laravel",
      "PostgreSQL",
      "Python",
      "Google AI Studio",
    ],
    icon: FaBuilding,
  },
  {
    number: "02",
    period: "May 2024 — Jul 2024",
    role: "Machine Learning and App Dev Intern",
    company: "Yoko Solutions Private Limited",
    location: "Remote",
    description:
      "Led a two-member team to build an AI-powered matchmaking app, developing key matchmaking design, recommendation system, and AI avatar generation for the organization.",
    highlights: [
      "Led a two-member team to build an AI-powered matchmaking app.",
      "Developed matchmaking design for the application.",
      "Worked on AI avatar generation for the organization.",
    ],
    technologies: [
      "Python",
      "Machine Learning (Clustering)",
      "NLP",
      "Deep Learning",
      "React Native",
      "TypeScript",
      "TensorFlow Lite",
      "Figma",
    ],
    icon: FaLaptopCode,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gray-50 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-64 -top-64 h-[650px] w-[650px] rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute -bottom-64 -left-64 h-[650px] w-[650px] rounded-full bg-gray-100 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="section-dot h-1.5 w-1.5 rounded-full bg-gray-950" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
              Experience
            </p>
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.045em] text-gray-950 md:text-6xl">
            Where I've{" "}
            <span className="text-gray-400">worked.</span>
          </h2>
        </motion.div>

        <div className="relative mt-16 md:mt-20">
          <div className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-gray-200 md:block" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative md:pl-14"
                >
                  <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-50 md:flex">
                    <span className="section-dot h-2.5 w-2.5 rounded-full bg-gray-950" />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                          {experience.period}
                        </span>

                        <span className="h-px w-6 bg-gray-300" />

                        <span className="text-xs uppercase tracking-[0.18em] text-gray-400">
                          {experience.location}
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-gray-950 md:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-gray-600">
                        {experience.company}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 sm:mt-1">
                      <Icon />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.025)] md:p-8">
                    <p className="max-w-3xl text-sm leading-6 text-gray-500 md:text-base md:leading-7">
                      <span className="font-bold text-gray-700">
                        Key Highlight:{" "}
                      </span>
                      {experience.description}
                    </p>

                    <div className="mt-7 space-y-4">
                      {experience.highlights.map(
                        (highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className="flex gap-3"
                          >
                            <FaCircleCheck className="mt-1 shrink-0 text-[12px] text-gray-700" />

                            <p className="text-sm leading-6 text-gray-600">
                              {highlight}
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    <div className="mt-7 border-t border-gray-100 pt-5">
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md bg-gray-50 px-2.5 py-1.5 text-[11px] font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
