import { motion, useReducedMotion } from "framer-motion";
import headshot from "../assets/headshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowDown,
  faArrowUpRightFromSquare,
  faCode,
  faBrain,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const floatAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -8, 0],
      };

  const floatTransition = {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white" id="hero">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main ambient glow */}
        <div className="absolute left-[48%] top-[-10%] h-[520px] w-[520px] rounded-full bg-gray-100/80 blur-[120px]" />

        {/* Right ambient glow */}
        <div className="absolute right-[-180px] top-[35%] h-[500px] w-[500px] rounded-full bg-gray-50 blur-[110px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-250px] left-[15%] h-[500px] w-[500px] rounded-full bg-gray-100/50 blur-[120px]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-20">
          {/* =================================================
              LEFT
          ================================================= */}

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-3xl"
          >
            {/* Eyebrow */}

            <motion.div variants={fadeUp}>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/80 px-4 py-2 shadow-[0_3px_15px_rgba(0,0,0,0.04)] backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>

                <span className="text-xs font-semibold tracking-wide text-gray-700 sm:text-sm">
                  Open to opportunities
                </span>
              </div>
            </motion.div>

            {/* Heading */}

           <motion.div
  variants={fadeUp}
  className="max-w-4xl"
>
  {/* Introduction */}
  <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-gray-950 sm:text-6xl md:text-7xl lg:text-[64px] xl:text-[72px]">
    Hi, I'm{" "}
    <span className="text-gray-400">
      Vishal Sarup Mathur.
    </span>
  </h1>

  {/* Rotating Role */}
  <div className="mt-5 flex items-center gap-3 text-2xl font-semibold leading-none tracking-[-0.04em] text-gray-950 sm:text-3xl md:text-3xl">
    <span>I'm a</span>

    <span className="text-rotate text-gray-400 ">
      <span>
        <span>Software Developer</span> 
        <span>Full-Stack Engineer</span>
        <span>AI/ML Specialist</span>
      </span>
    </span>
  </div>

  {/* Value Proposition */}
  <p className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-gray-950 sm:text-3xl md:text-3xl">
    I turn complex{" "}
    <span className="text-gray-400">
      requirements
    </span>{" "}
    into software{" "}
    <span className="text-gray-400">
      that ships.
    </span>
  </p>
</motion.div>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-gray-500
                sm:text-lg
                sm:leading-8
              "
            >
              I engineer full-stack systems, AI/ML applications, and digital
              solutions across the entire delivery cycle—from understanding
              complex requirements and designing the solution to development,
              deployment, UAT, and adoption.
            </motion.p>

            {/* Tech line */}

            {/* <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              
            </motion.div> */}

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <a
                href="/Vishal_Mathur_Resume__.pdf"
                download
                className="aura aura-dual group inline-flex"
              >
                <div className="card bg-gray-950">
                  <div className="card-body !p-0">
                    <div
                      className="
            inline-flex
            items-center
            gap-3
            rounded-xl
            px-6
            py-3.5
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            group-hover:bg-gray-800
          "
                    target="_blank"
                    >
                      Download Resume
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="
              text-xs
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
                      />
                    </div>
                  </div>
                </div>
              </a>

              
            </motion.div>
            {/* =================================================
                SOCIAL / QUICK INFO
            ================================================= */}

            <motion.div
              variants={fadeUp}
              className="
                mt-12
                flex
                flex-wrap
                items-center
                gap-6
                border-t
                border-gray-200
                pt-7
              "
            >
              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/vishal-mathur25/"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  transition-colors
                  hover:text-gray-500
                "
                aria-label="LinkedIn"
                target="_blank"
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-gray-950
                    text-white
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  "
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>

                <span>
                  <span className="block text-sm font-semibold text-gray-900">
                    LinkedIn
                  </span>

                  <span className="block text-xs text-gray-400">
                    Professional Network
                  </span>
                </span>
              </a>

              <div className="hidden h-10 w-px bg-gray-200 sm:block" />

              {/* GitHub */}

              <a
                href="https://github.com/VishalMathur01"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  transition-colors
                  hover:text-gray-500
                "
                aria-label="GitHub"
                target="_blank"
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-gray-950
                    text-white
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  "
                >
                  <FontAwesomeIcon icon={faGithub} />
                </span>

                <span>
                  <span className="block text-sm font-semibold text-gray-900">
                    GitHub
                  </span>

                  <span className="block text-xs text-gray-400">Projects</span>
                </span>
              </a>

              <div className="hidden h-10 w-px bg-gray-200 sm:block" />

              {/* Experience */}

              <a
                href="#contact"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  transition-colors
                  hover:text-gray-500
                "
                aria-label="Mail"
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-gray-950
                    text-white
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  "
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>

                <span>
                  <span className="block text-sm font-semibold text-gray-900">
                    Mail
                  </span>

                  <span className="block text-xs text-gray-400">Let's work together!</span>
                </span>
              </a>

              <div className="hidden h-10 w-px bg-gray-200 sm:block" />
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — HEADSHOT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto flex w-full max-w-[560px] items-center justify-center lg:justify-end"
          >
            {/* Large background shape */}

            <motion.div
              animate={floatAnimation}
              transition={floatTransition}
              className="
                relative
                aspect-[0.82]
                w-[82%]
                max-w-[450px]
                overflow-hidden
                rounded-[2rem]
                border
                border-gray-200
                bg-gray-50
                shadow-[0_30px_80px_rgba(0,0,0,0.08)]
              "
            >
              {/* Inner frame */}

              <div
                className="
                  absolute
                  inset-4
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-gray-200
                  bg-gray-100
                "
              >
                {/* Headshot */}

                <motion.img
                  src={headshot}
                  alt="Vishal Sarup Mathur"
                  initial={{
                    opacity: 0,
                    scale: shouldReduceMotion ? 1 : 1.04,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    grayscale-[12%]
                  "
                  draggable="false"
                />

                {/* Image gradient */}

                <div
                  className="hero-image-gradient
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/10
                    via-transparent
                    to-white/10
                  "
                />
              </div>

              {/* Top label */}

              <div
                className="
                  absolute
                  left-7
                  top-7
                  z-10
                  rounded-full
                  border
                  border-white/70
                  bg-white/80
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-gray-700
                  shadow-sm
                  backdrop-blur-md
                "
              >
                Software Developer
              </div>

              {/* Bottom information */}

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                  z-10
                  flex
                  items-end
                  justify-end
                "
              >
                <div>
                  <p className="dotted_name text-xl font-bold tracking-tight text-gray-400 text-bold">
                    VISHAL SARUP MATHUR
                  </p>
                </div>

                
              </div>
            </motion.div>

            {/* Decorative coordinates */}

            <div className="absolute -bottom-10 right-0 hidden text-right lg:block">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-300">
                 26° 50' 29" N
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-300">
                80° 52' 32" E
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        variants={fadeUp}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          text-xl
          font-semibold
          uppercase
          tracking-[0.25em]
          text-gray-400
          lg:flex
        "
      >
        {["2.5K+ Digital Certificates issued through deployed software", "200+ officers use Local HSM Module ", "1+ Years of Developing production software"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      {item}
                    </span>

                    {index !== 3 && (
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                    )}
                  </div>
                ),
              )}

        <span className="h-8 w-px bg-gray-200" />
      </motion.div>
    </section>
  );
};

export default Hero;
