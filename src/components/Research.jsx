import React from "react";
import { motion } from "framer-motion";
import {
  FaFileLines,
  FaArrowUpRightFromSquare,
  FaAward,
  FaMicrochip,
  FaMagnifyingGlass,
  FaLock,
  FaLink,
} from "react-icons/fa6";

const publications = [
  {
    number: "01",
    year: "2025",
    type: "CONFERENCE PAPER",
    award: "BEST PAPER IN TRACK",
    title: "Multi-Modal Personalization in AI-Driven Cooking Assistants",
    subtitle: "Integrating Text, Images, and User Feedback",
    conference:
      "3rd International Conference on Women Researchers in Electronics and Computing (WREC'25)",
    venue:
      "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar, Punjab, India",
    date: "18–19 April 2025",
    pages: null,
    isbn: null,
    doi: null,
    description:
      "Research on multimodal personalization in AI-driven cooking assistants, integrating text, images and user feedback to create more adaptive and personalized AI-assisted experiences.",
    authors: [
      "Vishal Sarup Mathur",
      "Pawan Singh",
      "Mukta Sharma",
      "Ahmed Alkhayyat",
      "Ankit Vidhyarthi",
    ],
    topics: [
      "Multimodal AI",
      "Computer Vision",
      "NLP",
      "Personalization",
      "AI Assistants",
    ],
    icon: FaMicrochip,
    link: "https://in.linkedin.com/in/vishal-mathur25",
    linkLabel: "View certificate",
    linkType: "LinkedIn",
    featured: true,
  },
  {
    number: "02",
    year: "2025",
    type: "CONFERENCE PAPER",
    award: null,
    title:
      "AI Powered Efficient Text File Analysis and Intelligent Q&A Automation",
    subtitle: null,
    conference:
      "International Conference on Recent Trends in Intelligent Computing and Communication (ICRTICC-2025)",
    venue:
      "Galgotias College of Engineering and Technology, Greater Noida, Uttar Pradesh, India",
    date: "20–21 February 2025",
    pages: "440",
    isbn: "9781040451595",
    doi: "10.1201/9781003593034-70",
    description:
      "Research exploring AI-assisted text-file analysis and intelligent question-answering automation for extracting useful information from textual documents and enabling efficient interaction with document content.",
    authors: ["Vishal Sarup Mathur", "Pawan Singh"],
    topics: [
      "Artificial Intelligence",
      "NLP",
      "Text Analysis",
      "Question Answering",
      "Automation",
    ],
    icon: FaMagnifyingGlass,
    link:
      "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003593034-70/ai-powered-efficient-text-file-analysis-intelligent-automation-vishal-sarup-mathur-pawan-singh",
    linkLabel: "View publication",
    linkType: "Taylor & Francis",
    featured: false,
  },
  {
    number: "03",
    year: "2024",
    type: "BOOK CHAPTER",
    award: null,
    title:
      "Cryptanalysis along with Intention Decoding in the Encrypted Corpus of Text",
    subtitle: "Using Attention Transformer Mechanism",
    conference:
      "Recent Advances in Sciences, Engineering, Information Technology & Management",
    venue: "CRC Press / Taylor & Francis",
    date: "December 2024",
    pages: "90–97",
    isbn: null,
    doi: "10.1201/9781003598152-13",
    description:
      "Research exploring cryptanalysis and intention decoding in encrypted text using attention-based transformer mechanisms, treating encrypted-text analysis as a sequence-to-sequence intelligence problem.",
    authors: [
      "Shalini Agarwal",
      "Suyash Pandey",
      "Vishal Sarup Mathur",
      "Aditya Singh",
    ],
    topics: [
      "Transformers",
      "NLP",
      "Cryptanalysis",
      "Attention Mechanisms",
      "Text Intelligence",
    ],
    icon: FaLock,
    link:
      "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003598152-13/cryptanalysis-along-intention-decoding-encrypted-corpus-text-using-attention-transformer-mechanism-shalini-agarwal-suyash-pandey-vishal-sarup-mathur-aditya-singh",
    linkLabel: "View publication",
    linkType: "Taylor & Francis",
    featured: false,
  },
];

const MetaLabel = ({ children }) => (
  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
    {children}
  </p>
);

const PublicationCard = ({ publication, index }) => {
  const Icon = publication.icon;

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
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_4px_25px_rgba(0,0,0,0.025)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] md:p-8"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-800 transition-all duration-300 group-hover:bg-gray-950 group-hover:text-white">
            <Icon />
          </div>

          <div>
            <MetaLabel>{publication.type}</MetaLabel>

            <p className="mt-1 text-xs font-semibold text-gray-700">
              {publication.year}
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold tracking-[0.2em] text-gray-200">
          {publication.number}
        </span>
      </div>

      {publication.award && (
        <div className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gray-950 px-3 py-1.5">
          <FaAward className="text-[10px] text-white" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
            {publication.award}
          </span>
        </div>
      )}

      <div className={publication.award ? "mt-5" : "mt-8"}>
        <h3
          className={`font-bold leading-[1.08] tracking-[-0.04em] text-gray-950 ${
            publication.featured
              ? "text-3xl md:text-[34px]"
              : "text-2xl md:text-[26px]"
          }`}
        >
          {publication.title}
        </h3>

        {publication.subtitle && (
          <p className="mt-2 text-sm font-medium leading-6 text-gray-400 md:text-base">
            {publication.subtitle}
          </p>
        )}
      </div>

      <div className="mt-7 space-y-5">
        <div>
          <MetaLabel>Conference / Publication</MetaLabel>

          <p className="mt-1.5 text-sm font-semibold leading-5 text-gray-700">
            {publication.conference}
          </p>
        </div>

        <div>
          <MetaLabel>Venue / Publisher</MetaLabel>

          <p className="mt-1.5 text-xs leading-5 text-gray-500">
            {publication.venue}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-gray-100 pt-5">
          <div>
            <MetaLabel>Date</MetaLabel>

            <p className="mt-1 text-xs font-medium text-gray-600">
              {publication.date}
            </p>
          </div>

          {publication.pages && (
            <div>
              <MetaLabel>Pages</MetaLabel>

              <p className="mt-1 text-xs font-medium text-gray-600">
                {publication.pages}
              </p>
            </div>
          )}

          {publication.isbn && (
            <div>
              <MetaLabel>ISBN</MetaLabel>

              <p className="mt-1 text-xs font-medium text-gray-600">
                {publication.isbn}
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="mt-7 text-sm leading-6 text-gray-500">
        {publication.description}
      </p>

      <div className="mt-7">
        <MetaLabel>Research Areas</MetaLabel>

        <div className="mt-3 flex flex-wrap gap-2">
          {publication.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-[10px] font-medium text-gray-600"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-gray-100 pt-6">
        <MetaLabel>Authors</MetaLabel>

        <p className="mt-3 text-xs leading-5 text-gray-500">
          {publication.authors.map((author, authorIndex) => (
            <React.Fragment key={author}>
              <span
                className={
                  author === "Vishal Sarup Mathur"
                    ? "font-semibold text-gray-900"
                    : ""
                }
              >
                {author}
              </span>

              {authorIndex !== publication.authors.length - 1 && (
                <span className="text-gray-300"> · </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>

      {publication.doi && (
        <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-gray-600">
              <FaLink className="text-[10px]" />
            </div>

            <div className="min-w-0">
              <MetaLabel>DOI</MetaLabel>

              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block break-all text-xs font-medium text-gray-700 transition-colors hover:text-gray-950"
              >
                {publication.doi}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-5 pt-7">
        <a
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 transition-colors duration-300 hover:text-gray-950"
        >
          <FaFileLines />
          {publication.linkLabel}
          <FaArrowUpRightFromSquare className="text-[9px] transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>

        {publication.doi && (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 transition-colors duration-300 hover:text-gray-950"
          >
            <FaLink className="text-[10px]" />
            DOI
            <FaArrowUpRightFromSquare className="text-[9px]" />
          </a>
        )}
      </div>
    </motion.article>
  );
};

const Research = () => {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-48 top-0 h-[600px] w-[600px] rounded-full bg-gray-50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-gray-50 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:80px_80px]"
      />

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
              Research
            </p>
          </div>

          <h2 className="text-4xl font-bold leading-[1] tracking-[-0.05em] text-gray-950 md:text-6xl">
            Ideas turned into{" "}
            <span className="text-gray-400">research.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 md:text-lg md:leading-8">
            Research exploring multimodal AI, intelligent document analysis,
            natural language processing, cryptanalysis and human-centered AI
            systems.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {publications.map((publication, index) => (
            <PublicationCard
              key={publication.number}
              publication={publication}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 border-y border-gray-200 sm:grid-cols-3 items-center"
        >
          <div className="px-5 py-6 sm:px-8">
            <p className="text-3xl font-bold tracking-[-0.04em] text-gray-950">
              03
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Publications
            </p>
          </div>

          

          <div className="border-t border-gray-200 px-5 py-6 sm:border-l sm:border-t-0 sm:px-8">
            <p className="text-3xl font-bold tracking-[-0.04em] text-gray-950">
              01
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Best Paper
            </p>
          </div>

          <div className="border-l border-t border-gray-200 px-5 py-6 sm:border-t-0 sm:px-8">
            <p className="text-3xl font-bold tracking-[-0.04em] text-gray-950">
              AI
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Research Focus
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
