"use client";

import SocialMedia from "@/components/SocialMedia";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { ExternalLink, ChevronDown, ChevronUp, Github, Linkedin } from "lucide-react";
import { useMemo, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  const initialProjectCount = 2;
  const visibleProjects = useMemo(
    () => (isProjectsExpanded ? projects : projects.slice(0, initialProjectCount)),
    [isProjectsExpanded]
  );
  const sectionSpacing = "py-6 sm:py-8";

  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-3xl mx-auto px-5 sm:px-6 py-6 sm:py-8 mt-10 sm:mt-16 flex flex-col gap-10 sm:gap-14">
      <AnimateIn variant="fadeUp">
        <section className={sectionSpacing}>
          <div className="relative isolate">
            <div className="pointer-events-none select-none absolute inset-0 flex items-start justify-center pt-6 z-0">
              <span className="text-[120px] sm:text-[160px] md:text-[200px] font-extrabold uppercase tracking-[0.4em] bg-gradient-to-r from-[#1b4d57] via-[#3db8c5] to-[#4dd0e1] text-transparent bg-clip-text opacity-5 dark:opacity-10 animate-lock-in">
                LOCK IN
              </span>
            </div>
            <div className="relative z-10 space-y-6">
              <AnimateIn variant="fadeUp" delay={0.05}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-sky-400/40 via-transparent to-emerald-400/40 blur-2xl opacity-70" />
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border border-zinc-200/70 dark:border-zinc-700/80 shadow-inner shadow-white/30">
                        <Image
                          src="/avatar.jpg"
                          alt="Profile"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                        Hey, I&apos;m Vinay
                      </h1>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        Full Stack Developer · MERN & AI
                      </p>
                    </div>
                  </div>
                  <ThemeToggle />
                </div>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={0.1}>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
                  Full Stack Developer skilled in MERN stack and AI-driven applications, with hands-on experience in Python development and full-stack web projects. Passionate about building scalable, user-focused solutions and leveraging AI, analytics, and modern frameworks to deliver impactful results.
                </p>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={0.15}>
                <div className="flex items-center gap-5">
                  <SocialMedia />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.05}>
        <section className={sectionSpacing}>
          <div className="relative z-20 mt-12 mb-6">
            <h2 className="text-left text-2xl md:text-3xl font-semibold text-white/90 mb-4">
              Projects
            </h2>
          </div>
          <div className="space-y-8">
            <ul className="space-y-8">
              {visibleProjects.map((project, index) => {
                const delay = 0.15 + index * 0.05;
                return (
                  <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                    <li className="group relative rounded-2xl border border-zinc-200/70 dark:border-white/5 bg-white/80 dark:bg-zinc-900/40 p-5 sm:p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                      <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-emerald-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-1">
                            Featured Project
                          </p>
                          <h3 className="text-base sm:text-lg font-medium">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex flex-row gap-3 text-xs font-medium">
                          {project.github ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 decoration-dotted transition-all"
                            >
                              GitHub <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null}
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 decoration-dotted transition-all"
                            >
                              View <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-[0.7rem] uppercase tracking-wide text-zinc-400 dark:text-zinc-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </li>
                  </AnimateIn>
                );
              })}
            </ul>
            {projects.length > initialProjectCount && (
              <button
                onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mx-auto"
              >
                {isProjectsExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More Projects <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.1}>
        <section className={sectionSpacing}>
          <div className="relative z-20 mt-12 mb-6">
            <h2 className="text-left text-2xl md:text-3xl font-semibold text-white/90 mb-4">
              Education & Campus Involvement
            </h2>
          </div>
          <div className="space-y-8">
            <ul className="space-y-8">
              {education.map((edu, index) => (
                <AnimateIn key={index} variant="fadeLeft" delay={0.2 + index * 0.05}>
                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">{edu.institution}</h3>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500">
                      {edu.description}
                    </p>
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.15}>
        <section className={sectionSpacing}>
          <div className="relative z-20 mt-12 mb-6">
            <h2 className="text-left text-2xl md:text-3xl font-semibold text-white/90 mb-4">
              Skills & Tools
            </h2>
          </div>
          
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4">{category}</h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-y-8 gap-x-6">
                  {items.map(({ logo, title }, index) => (
                    <AnimateIn key={index} variant="scale" delay={0.25 + index * 0.02}>
                      <div className="flex flex-col items-center group">
                        <div className="relative h-10 w-10 sm:h-12 sm:w-12 mb-3 rounded-full border border-zinc-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 p-1.5 transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                          <Image
                            src={logo}
                            alt={`${title} logo`}
                            fill
                            className="object-contain drop-shadow-sm"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
                          {title}
                        </span>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.2}>
        <section className={sectionSpacing}>
          <div className="relative z-20 mt-12 mb-6">
            <h2 className="text-left text-2xl md:text-3xl font-semibold text-white/90 mb-4">
              Certifications & Achievements
            </h2>
          </div>
          <div className="space-y-4">
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <AnimateIn key={index} variant="fadeLeft" delay={0.3 + index * 0.05}>
                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">{cert.title}</h3>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {cert.issuer}
                    </p>
                    {cert.description && (
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                        {cert.description}
                      </p>
                    )}
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.22}>
        <section className={sectionSpacing}>
          <div className="relative z-20 mt-12 mb-6">
            <h2 className="text-left text-2xl md:text-3xl font-semibold text-white/90 mb-4">
              GitHub Contributions
            </h2>
          </div>
          <AnimateIn variant="fadeUp" delay={0.32}>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              A snapshot of my recent coding activity on GitHub.
            </p>
            <div className="flex flex-col items-center">
              <div className="w-full overflow-x-auto pb-4">
                <div className="min-w-[600px] flex justify-center">
                  <div className="rounded-2xl border border-zinc-200/70 dark:border-white/5 bg-white/80 dark:bg-zinc-900/40 shadow-lg shadow-sky-500/5 p-4">
                    <Image
                      src="https://ghchart.rshah.org/vinay-clutch"
                      alt="Vinay's GitHub contribution graph"
                      width={900}
                      height={200}
                      className="rounded-xl"
                      loading="lazy"
                      priority={false}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/vinay-clutch"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1 justify-center hover:underline underline-offset-4"
              >
                View my GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </AnimateIn>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.25}>
        <section className={`${sectionSpacing} text-center`}>
          <div className="relative z-20 mt-12 mb-6 text-left">
            <h2 className="text-left text-2xl md:text-3xl font-semibold text-white/90 mb-4">
            My Mindset
            </h2>
          </div>
          <AnimateIn variant="fadeUp" delay={0.35}>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto text-center">
              "Every day is an opportunity to improve. I believe in learning by building — turning small ideas into real projects. I follow a simple rule: stay consistent, stay curious. The more I create, the more I grow."
            </p>
          </AnimateIn>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.3}>
        <section className={`${sectionSpacing} text-center`}>
          <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">
            Hey, you scrolled this far – let’s build something together.
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            I'm open to collaborations, freelance work, or just a chat about tech.
          </p>
          <a
            href="mailto:vinayvinay0256@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white text-sm font-medium shadow-[0_10px_30px_-12px_rgba(59,130,246,0.65)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_18px_40px_-15px_rgba(59,130,246,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400"
          >
            Email Me
          </a>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
            I usually reply within 24 hours.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.2}>
        <footer className="pt-8 pb-6 border-t border-zinc-200/60 dark:border-white/5 text-[0.75rem] text-zinc-500 dark:text-zinc-500 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between opacity-80">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span>© 2025 Vinay B. S.</span>
            <span className="hidden sm:inline text-zinc-400">•</span>
            <span>Built with Next.js + Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300">
            <a
              href="https://github.com/vinay-clutch"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-900 dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinay-bs/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-900 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </footer>
      </AnimateIn>
    </main>
  );
}

const projects = [
  {
    title: "Vibe-Chat",
    description:
      "Secure real-time chat application with JWT-based authentication and a responsive React frontend for seamless user messaging.",
    link: "#",
    github: "https://github.com/vinay-clutch/Vibe-Chat",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "AI-Powered Resume Analyzer",
    description:
      "AI-driven resume analyzer with ATS-style scoring, real-time PDF processing, and detailed feedback for improving job applications.",
    link: "#",
    github: "https://github.com/vinay-clutch/ai-resume--analyzer",
    technologies: ["React", "React Router v7", "Tailwind CSS v4", "Zustand"],
  },
  {
    title: "AI-Powered Code Reviewer",
    description:
      "MERN-based platform that integrates AI to review code, highlight potential issues, and suggest improvements with interactive dashboards.",
    link: "#",
    github: "https://github.com/vinay-clutch/code-review",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI"],
  },
  {
    title: "Orbit – AI Assistant CLI",
    description:
      "A complete AI command-line tool featuring Google Gemini chat, web search, code generation, tool-calling, OAuth device flow authentication, PostgreSQL conversation history, and an autonomous agent mode — all built using Node.js, Commander.js, Prisma, and the AI SDK.",
    link: "#",
    github: "https://github.com/vinay-clutch/orbital-cli",
    technologies: [
      "Node.js",
      "Google Gemini AI",
      "Prisma ORM",
      "PostgreSQL",
      "OAuth 2.0",
      "Commander.js",
      "Zod",
      "Chalk/Boxen",
    ],
  },
];

const education = [
  {
    institution: "PES College of Engineering, Mandya",
    degree: "B.E. in Information Science and Engineering",
    period: "2022 – 2026",
  },
  {
    institution: "Anikethana PU College, Mandya",
    degree: "Pre-University (PUC)",
    period: "2020 – 2022",
  
  },
  {
    institution: "Anikethana High School, Mandya",
    degree: "SSLC (10th)",
    period: "2019 – 2020",
  },
  {
    institution: "FOSS Club (PESCE)",
    degree: "Graphic Designer & Event Collaborator",
    period: "",
    description: "Led design for posters, banners, and event creatives, helping boost engagement for workshops and tech events through creative outreach.",
  },
];

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "",
    description: "",
  },
  {
    title: "Full Stack Development Program",
    issuer: "ZEStech (PESCE)",
    year: "",
    description: "",
  },
  {
    title: "FOSS Club – Graphic Designer & Event Collaborator",
    issuer: "",
    year: "",
    description: "Designed promotional materials and collaborated on event organization, contributing to higher participation and visibility for tech events.",
  },
];

const skills = {
  "Programming": [
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", title: "Python" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", title: "SQL" }, // Using generic SQL or Azure SQL as placeholder if generic not found
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", title: "HTML" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", title: "CSS" },
  ],
  "Frameworks & Libraries": [
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React.js" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node.js" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", title: "Express.js" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", title: "Next.js" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS" },
  ],
  "Tools": [
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", title: "Postman" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", title: "Git" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", title: "GitHub" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", title: "VS Code" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", title: "Figma" },
  ],
  "Data & AI": [
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", title: "Pandas" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", title: "NumPy" },
    { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", title: "Matplotlib" },
  ],
};
