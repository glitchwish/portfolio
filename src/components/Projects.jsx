import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaBrain,
  FaChartLine,
  FaImage,
  FaShieldHalved,
  FaLanguage,
  FaUtensils,
  FaCode,
} from "react-icons/fa6";

const githubUser = "VishalMathur01";

const openGithub = (repo) => {
  const url = ["https:", "", "github.com", githubUser, repo].join("/");
  window.open(url, "_blank", "noopener,noreferrer");
};

const projects = [
  {
    number: "01",
    featured: true,
    category: "AI / MULTIMODAL",
    title: "Multi-Modal AI Cooking Assistant",
    shortTitle: "Smart Recipe Generator",
    description:
      "An AI-powered cooking assistant that combines image understanding and language models to identify dishes or ingredients and generate personalized recipes.",
    details:
      "Users can upload dish or ingredient images, generate recipes from text, apply dietary preferences, request recipes by dish name and export generated recipes as PDF.",
    technologies: [
      "Python",
      "Streamlit",
      "Computer Vision",
      "LLM",
      "Vision Models",
      "OpenRouter",
    ],
    icon: FaUtensils,
    repo: "Major_Project_Website",
    accent: "AI",
  },
  {
    number: "02",
    category: "MACHINE LEARNING",
    title: "MediX11",
    description:
      "A multi-disease machine learning and deep learning system covering prediction, early detection, medical image analysis and research-paper summarization.",
    details:
      "The project brings together 11 medical prediction and analysis workflows, including diabetes, dementia, Parkinson's, cardiovascular risk, eye disease and patient survival.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "BART", "Streamlit"],
    icon: FaBrain,
    repo: "MediX11",
  },
  {
    number: "03",
    category: "DATA & VISUALIZATION",
    title: "NobelDash",
    description:
      "An interactive dashboard that scrapes Nobel Prize data, processes it and turns historical information into visual insights.",
    details:
      "Built with Streamlit, Pandas and visualization libraries, with data collected from Wikipedia and presented through an interactive dashboard.",
    technologies: ["Python", "Streamlit", "Pandas", "BeautifulSoup", "Plotly"],
    icon: FaChartLine,
    repo: "NobleDash",
  },
  {
    number: "04",
    category: "GENERATIVE AI",
    title: "AI Image Generation",
    description:
      "A Stable Diffusion-based image generation project exploring generative AI and deep learning for synthetic image creation.",
    details:
      "The project experiments with Stable Diffusion models and image generation using Python-based deep learning tooling.",
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Stable Diffusion",
      "Computer Vision",
    ],
    icon: FaImage,
    repo: "AI-Image-Generation",
  },
  {
    number: "05",
    category: "FINTECH / ML",
    title: "Financial Fraud & Analytics",
    description:
      "Machine learning workflows for fraudulent transaction detection and customer churn prediction.",
    details:
      "Includes credit-card fraud detection approaches and customer churn analysis using multiple supervised learning algorithms.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "Pandas",
    ],
    icon: FaShieldHalved,
    repo: "Financial-Fraud-Customer-Analytics",
  },
  {
    number: "06",
    category: "NLP / CLASSIFICATION",
    title: "Website & Text Classification",
    description:
      "Machine learning and NLP experiments for website categorization and spam detection.",
    details:
      "Uses traditional machine learning and NLP techniques to classify website content and identify spam messages.",
    technologies: ["Python", "NLP", "NLTK", "SpaCy", "SVM", "Naive Bayes"],
    icon: FaLanguage,
    repo: "Website-Text-Classification",
  },
];

const FeaturedProject = ({ project }) => {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_8px_35px_rgba(0,0,0,0.035)]"
    >
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[420px] overflow-hidden bg-gray-950 p-8 md:p-10">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gray-800 blur-3xl" />

          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-gray-800/60 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:50px_50px]" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400">
              Featured Project
            </span>

            <span className="text-xs font-bold tracking-[0.2em] text-gray-600">
              {project.number}
            </span>
          </div>

          <div className="relative z-10 mt-16">
            <div className="mx-auto max-w-sm rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-gray-950">
                    <Icon />
                  </div>

                  <div>
                    <div className="h-2 w-20 rounded-full bg-white/80" />
                    <div className="mt-2 h-1.5 w-12 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="h-7 w-7 rounded-full border border-white/10" />
              </div>

              <div className="mt-5 rounded-xl bg-white/[0.05] p-4">
                <div className="h-2 w-24 rounded-full bg-white/70" />

                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-[85%] rounded-full bg-white/10" />
                  <div className="h-2 w-[65%] rounded-full bg-white/10" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-lg bg-white/[0.05]" />
                <div className="h-16 rounded-lg bg-white/[0.05]" />
                <div className="h-16 rounded-lg bg-white/[0.05]" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 right-8 z-10 flex items-end justify-between md:bottom-10 md:left-10 md:right-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Multimodal
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Vision + Language
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400">
              <FaBrain className="text-xs" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                {project.category}
              </span>

              <span className="text-xs font-bold text-gray-200">
                {project.number}
              </span>
            </div>

            <h3 className="mt-6 max-w-lg text-3xl font-bold leading-tight tracking-[-0.045em] text-gray-950 md:text-4xl">
              {project.title}
            </h3>

            <p className="mt-5 text-base leading-7 text-gray-500">
              {project.description}
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              {project.details}
            </p>

            <div className="mt-8">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                Built with
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => openGithub(project.repo)}
            className="group/button mt-10 flex w-fit items-center gap-3 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800"
          >
            <FaGithub />
            View on GitHub
            <FaArrowUpRightFromSquare className="text-[10px] transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="group flex min-h-[430px] flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_3px_20px_rgba(0,0,0,0.025)] transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-800 transition-all duration-300 group-hover:bg-gray-950 group-hover:text-white">
          <Icon />
        </div>

        <span className="text-xs font-bold tracking-[0.2em] text-gray-200">
          {project.number}
        </span>
      </div>

      <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
        {project.category}
      </p>

      <h3 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-gray-950">
        {project.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-gray-500">
        {project.description}
      </p>

      <p className="mt-3 text-xs leading-5 text-gray-400">{project.details}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-gray-50 px-2.5 py-1 text-[10px] font-medium text-gray-500"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-7">
        <button
          onClick={() => openGithub(project.repo)}
          className="flex items-center gap-2 text-xs font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-950"
        >
          <FaGithub />
          View repository
          <FaArrowUpRightFromSquare className="text-[9px] transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gray-50 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -left-48 top-0 h-[600px] w-[600px] rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-gray-100 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="section-dot h-2 w-2 rounded-full bg-gray-950" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Projects
            </p>
          </div>

          <h2 className="text-4xl font-bold leading-[1] tracking-[-0.05em] text-gray-950 md:text-6xl">
            Things I've
            <span className="text-gray-400"> built.</span>
          </h2>

          
        </motion.div>

        <div className="mt-16">
          <FeaturedProject project={featuredProject} />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {remainingProjects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col gap-5 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-semibold text-gray-900">
              More experiments & repositories
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Explore the complete collection on GitHub.
            </p>
          </div>

          <button
            onClick={() => {
              const url = ["https:", "", "github.com", githubUser].join("/");

              window.open(url, "_blank", "noopener,noreferrer");
            }}
            className="inline-flex w-fit items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:bg-gray-950 hover:text-white"
          >
            <FaGithub />
            View all repositories
            <FaArrowUpRightFromSquare className="text-[10px]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
