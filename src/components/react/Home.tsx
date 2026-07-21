interface Recommendation {
  name: string;
  role: string;
  paragraphs: string[];
}

const recommendations: Recommendation[] = [
  {
    name: "Gianfranco Colombi",
    role: "Data Engineer, Data Scientist",
    paragraphs: [
      "Arthur is a phenomenal individual!",
      "I can vouch for his knowledge and proficiency in React and JavaScript. I have also worked with Arthur across different capacities, I have been a mentor while Arthur went through the Make1 program to learn the Design Thinking Framework and rapid prototyping skills, essentially practicing how to get from ideation to realization.",
      "We have worked together as colleagues on a robotics project that tested our capabilities to develop hardware and software, as well as, additional skills in marketing to help raise funds.",
      "Finally, Arthur has been like a teacher at times by staying up to date with the latest frameworks and libraries in the software development landscape and sharing that information by making sure to stay in touch and follow up.",
      "I look forward to the day of working with Arthur in a software development capacity, and I would recommend Arthur for anyone's team!",
    ],
  },
  {
    name: "John Connerton",
    role: "Software Engineer",
    paragraphs: [
      "If you asked me to pick 1 person to work with on a project, there is no question. Arthur would be first pick. I've never met someone who was so knowledgeable on front-end engineering and design. He makes things happen.",
      "Not only did Arthur make an awesome user experience and front end for our senior design project/startup, but he also managed to leave a lasting impact on my own skills. His talent is contagious. I use the things he showed me with React/JS and design daily.",
      "I'm thankful that I was able to work with Arthur and I'd recommend him anywhere in a heartbeat.",
    ],
  },
];

export default function Home() {
  return (
    <section className="px-4 py-10 sm:px-8 sm:py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">Hey, I'm Arthur</h1>

      <blockquote className="mt-6 border-l-4 border-neutral-300 pl-4 italic text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
        "Sometimes what you don't do is just as important as what you do."
        <footer className="mt-1 text-sm not-italic text-neutral-500 dark:text-neutral-500">
          — Greg McKeown
        </footer>
      </blockquote>

      <p className="mt-6 max-w-2xl text-neutral-600 dark:text-neutral-400">
        I'm a software engineer who spends most of my free time at the gym,
        tinkering on side projects, or slowly getting better at French. I
        listen to a lot of music, read when I can, and take long walks to
        clear my head.
      </p>

      <div className="mt-12">
        <h2 className="text-xl font-bold sm:text-2xl">Recommendations</h2>
        <div className="mt-4 flex flex-col gap-6">
          {recommendations.map((rec) => (
            <div
              key={rec.name}
              className="rounded-xl border border-neutral-200/70 bg-neutral-50/50 p-4 transition-colors duration-200 hover:border-neutral-300 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700"
            >
              <p className="font-bold">{rec.name}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{rec.role}</p>
              <div className="mt-4 flex flex-col gap-3 text-neutral-600 dark:text-neutral-400">
                {rec.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
