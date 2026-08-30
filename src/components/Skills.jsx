import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaPhp,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGoogle,
  FaGitAlt,
  FaBolt,
  FaWind,
  FaBrain,
  FaMicrochip,
  FaChartLine,
  FaDatabase,
  FaCode,
  FaLaravel,
  FaWordpress,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa6";

const capabilityGroups = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "Building complete web applications and APIs across frontend, backend and databases.",
    icon: FaCode,
    groups: [
      {
        label: "Languages",
        items: [
          ["Python", FaPython],
          ["PHP", FaPhp],
          ["JavaScript", FaJs],
        ],
      },
      {
        label: "Frontend",
        items: [
          ["React", FaReact],
          ["React Native", FaReact],
          ["Next.js", FaReact],
          ["Tailwind CSS", FaWind],
          ["Bootstrap", FaBootstrap],
          ["jQuery", FaJs],
          ["AJAX", FaJs],
          ["Axios", FaJs],
          ["HTML", FaHtml5],
          ["CSS", FaCss3Alt],
        ],
      },
      {
        label: "Backend",
        items: [
          ["Django", FaCode],
          ["FastAPI", FaBolt],
          ["Express.js", FaNodeJs],
          ["Laravel", FaLaravel],
          ["Streamlit", FaCode],
        ],
      },
      {
        label: "Database & ORM",
        items: [
          ["MySQL", FaDatabase],
          ["PostgreSQL", FaDatabase],
          ["MongoDB", FaDatabase],
          ["Django ORM", FaDatabase],
          ["Drizzle ORM", FaDatabase],
          ["Eloquent ORM", FaDatabase],
        ],
      },
      {
        label: "CMS & Tools",
        items: [
          ["WordPress", FaWordpress],
          ["Git", FaGitAlt],
          ["GitHub", FaGithub],
          ["Postman", FaCode],
        ],
      },
    ],
  },
  {
    number: "02",
    title: "AI, ML & Intelligent Systems",
    description:
      "Working across machine learning, generative AI, language, vision and intelligent automation.",
    icon: FaBrain,
    groups: [
      {
        label: "Machine Learning",
        items: [
          ["Scikit-learn", FaBrain],
          ["TensorFlow", FaBrain],
          ["PyTorch", FaMicrochip],
          ["Keras", FaBrain],
          ["Pandas", FaChartLine],
          ["NumPy", FaChartLine],
          ["Matplotlib", FaChartLine],
          ["Seaborn", FaChartLine],
        ],
      },
      {
        label: "Generative AI",
        items: [
          ["Generative AI", FaBrain],
          ["LLMs", FaBrain],
          ["RAG", FaBrain],
          ["AI Agents", FaBrain],
          ["AI Automation", FaBrain],
          ["Multimodal AI", FaBrain],
          ["Prompt Engineering", FaBrain],
        ],
      },
      {
        label: "LLM Engineering",
        items: [
          ["Fine-Tuning", FaBrain],
          ["LoRA", FaBrain],
          ["QLoRA", FaBrain],
          ["PEFT", FaBrain],
          ["DPO", FaBrain],
          ["RLHF", FaBrain],
        ],
      },
      {
        label: "AI Frameworks",
        items: [
          ["Hugging Face", FaBrain],
          ["LangChain", FaBrain],
          ["CrewAI", FaBrain],
          ["pgvector", FaDatabase],
        ],
      },
      {
        label: "Vision & NLP",
        items: [
          ["NLP", FaBrain],
          ["Computer Vision", FaBrain],
          ["Object Detection", FaBrain],
          ["OpenCV", FaBrain],
          ["Anomaly Detection", FaBrain],
          ["Time-Series Forecasting", FaChartLine],
        ],
      },
    ],
  },
];

const marqueeSkills = [
  ["Python", FaPython],
  ["PHP", FaPhp],
  ["JavaScript", FaJs],
  ["HTML", FaHtml5],
  ["CSS", FaCss3Alt],
  ["React", FaReact],
  ["React Native", FaReact],
  ["Next.js", FaReact],
  ["Django", FaCode],
  ["FastAPI", FaBolt],
  ["Express.js", FaNodeJs],
  ["Laravel", FaLaravel],
  ["Tailwind CSS", FaWind],
  ["Bootstrap", FaBootstrap],
  ["WordPress", FaWordpress],
  ["MySQL", FaDatabase],
  ["PostgreSQL", FaDatabase],
  ["MongoDB", FaDatabase],
  ["AWS", FaAws],
  ["GCP", FaGoogle],
  ["Git", FaGitAlt],
  ["GitHub", FaGithub],
  ["Postman", FaCode],
  ["TensorFlow", FaBrain],
  ["PyTorch", FaMicrochip],
  ["Scikit-learn", FaBrain],
  ["Pandas", FaChartLine],
  ["NumPy", FaChartLine],
  ["Matplotlib", FaChartLine],
  ["Seaborn", FaChartLine],
  ["Hugging Face", FaBrain],
  ["LangChain", FaBrain],
  ["CrewAI", FaBrain],
  ["BigQuery", FaDatabase],
  ["Databricks", FaDatabase],
  ["Power BI", FaChartLine],
  ["Tableau", FaChartLine],
  ["Jupyter", FaCode],
  ["Google Colab", FaGoogle],
  ["Kaggle", FaCode],
  ["Streamlit", FaCode],
];

const Technology = ({ name, icon: Icon }) => (
  <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm">
    <Icon className="text-sm text-gray-500" />
    {name}
  </span>
);

const CapabilityCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group rounded-2xl border border-gray-200 bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] md:p-8"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-lg text-gray-900 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
          <Icon />
        </div>

        <span className="text-xs font-medium tracking-[0.2em] text-gray-300">
          {item.number}
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-gray-950 md:text-[26px]">
        {item.title}
      </h3>

      <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
        {item.description}
      </p>

      <div className="mt-8 space-y-6">
        {item.groups.map((group) => (
          <div key={group.label}>
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              {group.label}
            </p>

            <div className="flex flex-wrap gap-2">
              {group.items.map(([name, icon]) => (
                <Technology key={name} name={name} icon={icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
};

const SkillCard = ({ skill }) => {
  const [name, Icon] = skill;

  return (
    <div className="group flex h-[72px] min-w-[185px] items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 transition-all duration-300 hover:border-gray-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-lg text-gray-800 transition-all duration-300 group-hover:bg-gray-100">
        <Icon />
      </div>

      <p className="text-sm font-semibold tracking-tight text-gray-900">
        {name}
      </p>
    </div>
  );
};

const MarqueeRow = ({ direction = 1, skills }) => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-1">
      <div className="marquee-edge-fade pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent md:w-40" />

      <div className="marquee-edge-fade pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent md:w-40" />

      <motion.div
        className="flex w-max gap-3"
        animate={{
          x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: 90,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {duplicatedSkills.map(([name, icon], index) => (
          <SkillCard key={`${name}-${index}`} skill={[name, icon]} />
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const firstRow = marqueeSkills.slice(0, 20);
  const secondRow = marqueeSkills.slice(20);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gray-50 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-64 -top-64 h-[650px] w-[650px] rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[650px] w-[650px] rounded-full bg-gray-100 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="px-6">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="section-dot h-1.5 w-1.5 rounded-full bg-gray-950" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                Skills / Expertise
              </p>
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.045em] text-gray-950 md:text-6xl">
              The tools I use to{" "}
              <span className="text-gray-400">build things.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-5 px-6 lg:grid-cols-2">
          {capabilityGroups.map((item) => (
            <CapabilityCard key={item.number} item={item} />
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-5 flex items-center justify-between px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
              Technologies
            </p>
          </div>

          <div className="space-y-3">
            <MarqueeRow direction={1} skills={firstRow} />
            <MarqueeRow direction={-1} skills={secondRow} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
