import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaUsers,
  FaArrowUpRightFromSquare,
  FaCode,
  FaCheck,
} from "react-icons/fa6";

const achievements = [
  {
    number: "01",
    date: "Oct 2023",
    title: "BIO-CODE@THON 2023",
    award: "Winner",
    role: "Team Lead",
    team: "Team of 4",
    organization:
      "Praediko by Amity Institute of Biotechnology, Noida",
    icon: FaTrophy,
  },
  {
    number: "02",
    date: "May 2024",
    title: "Best Project in Track",
    award: "First Runner-Up",
    role: "Key Contributor",
    team: "Team of 4",
    organization: "TensorFlow User Group Lucknow",
    icon: FaMedal,
  },
  {
    number: "03",
    date: "Aug 2024",
    title: "AI-Fusion Hackathon",
    award: "Winner",
    role: "Key Contributor",
    team: "Team of 3",
    organization: "SGT University",
    icon: FaTrophy,
  },
];

const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_4px_25px_rgba(0,0,0,0.025)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-800 transition-all duration-300 group-hover:bg-gray-950 group-hover:text-white">
          <Icon />
        </div>

        <span className="text-xs font-medium tracking-[0.2em] text-gray-200">
          {achievement.number}
        </span>
      </div>

      <div className="mt-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
          {achievement.date}
        </p>

        <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.035em] text-gray-950">
          {achievement.title}
        </h3>

        <div className="mt-4 inline-flex rounded-full bg-gray-950 px-3 py-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
            {achievement.award}
          </span>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-100 pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-xs text-gray-600">
            <FaCode />
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
              Role
            </p>

            <p className="mt-0.5 text-sm font-semibold text-gray-800">
              {achievement.role}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-xs text-gray-600">
            <FaUsers />
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
              Team
            </p>

            <p className="mt-0.5 text-sm font-semibold text-gray-800">
              {achievement.team}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto flex items-end justify-between gap-5 pt-7">
        <p className="max-w-[240px] text-xs leading-5 text-gray-400">
          {achievement.organization}
        </p>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-gray-300 group-hover:bg-gray-950 group-hover:text-white">
          <FaCheck className="text-[10px]" />
        </div>
      </div>
    </motion.article>
  );
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-64 top-0 h-[600px] w-[600px] rounded-full bg-gray-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-64 bottom-0 h-[600px] w-[600px] rounded-full bg-gray-50 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(#000_1px,transparent_1px), linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
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
              Achievements
            </p>
          </div>

          <h2 className="text-4xl font-bold leading-[1] tracking-[-0.05em] text-gray-950 md:text-6xl">
            Built.
            <span className="text-gray-400"> Competed.</span>
            <br />
            Won.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.number}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid grid-cols-2 border-y border-gray-200 sm:grid-cols-4"
        >
          <div className="px-5 py-6 sm:px-8">
            <p className="text-3xl font-bold tracking-[-0.04em] text-gray-950">
              6
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Competitions
            </p>
          </div>

          <div className="border-l border-gray-200 px-5 py-6 sm:px-8">
            <p className="text-3xl font-bold tracking-[-0.04em] text-gray-950">
              2
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Wins
            </p>
          </div>

          <div className="border-t border-gray-200 px-5 py-6 sm:border-l sm:border-t-0 sm:px-8">
            <p className="text-3xl font-bold tracking-[-0.04em] text-gray-950">
              1
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Runner-Up
            </p>
          </div>

          <div className="border-l border-t border-gray-200 px-5 py-6 sm:border-t-0 sm:px-8">
            <p className="text-3xl font-bold tracking-[-0.04em] text-gray-950">
              4
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Different Teams
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

