interface Project {
  year: string;
  status: "active" | "inactive";
  name: string;
  description: string;
  tools: string[];
  demoUrl?: string;
}

const projects: Project[] = [
  {
    year: "2025",
    status: "active",
    name: "Coffee Logger",
    description: "Logging application that tracks the bags of coffee you've bought.",
    tools: ["Next.js", "TypeScript", "Jotai"],
    demoUrl: "https://coffee-logger.pages.dev/",
  },
  {
    year: "2024",
    status: "active",
    name: "Budget Helper",
    description: "Budgeting application that helps users track their expenses and income.",
    tools: [
      "Next.js",
      "TypeScript",
      "Jotai",
      "react-hook-form",
      "TailwindCSS",
      "TanStack Table (react-table)",
    ],
    demoUrl: "https://budget-helper.pages.dev/",
  },
  {
    year: "2023",
    status: "active",
    name: "Roastly",
    description: "Geosocial networking application where you share your coffee order online.",
    tools: ["React", "TypeScript", "React-Query", "Supabase", "TailwindCSS"],
    demoUrl: "https://roastly.xyz/",
  },
  {
    year: "2021",
    status: "inactive",
    name: "Streats",
    description: "Geolocation application that allows users to track live location of food trucks nearby.",
    tools: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    year: "2020",
    status: "inactive",
    name: "localhand",
    description: "Hackathon project that aims to help small businesses engage with their local community.",
    tools: ["React", "JavaScript", "TailwindCSS", "Figma"],
    demoUrl: "https://localhand.vercel.app/",
  },
  {
    year: "2017",
    status: "inactive",
    name: "LEGO305",
    description: "A project started to help envision a new Miami through Lego bricks.",
    tools: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "https://youtu.be/b8VYoZhTU6c",
  },
];

export default function Projects() {
  return (
    <section className="px-4 py-10 sm:px-8 sm:py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">Projects</h1>

      <div className="mt-8 flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl border border-neutral-200/70 bg-neutral-50/50 p-4 transition-colors duration-200 hover:border-neutral-300 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">{project.year}</span>
              <span
                className={
                  project.status === "active"
                    ? "rounded-full border border-green-300 px-2 py-0.5 text-xs text-green-700 dark:border-green-700 dark:text-green-400"
                    : "rounded-full border border-neutral-300 px-2 py-0.5 text-xs text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"
                }
              >
                {project.status}
              </span>
            </div>

            <h2 className="mt-2 text-xl font-bold sm:text-2xl">{project.name}</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{project.description}</p>

            <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm text-neutral-500 dark:text-neutral-500">
              {project.tools.map((tool, i) => (
                <span key={tool}>
                  {tool}
                  {i < project.tools.length - 1 && <span className="ml-2">·</span>}
                </span>
              ))}
            </p>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block cursor-pointer rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-600 transition-colors hover:border-black hover:text-black dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-white dark:hover:text-white"
              >
                Demo ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
