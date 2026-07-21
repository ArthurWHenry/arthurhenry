const facts = [
  "Played volleyball for over 10 years",
  "Enjoys reading personal development books — The Power of Habit, Atomic Habits, The Psychology of Money",
  "Started building websites sophomore year of high school",
];

const tools = ["TypeScript", "JavaScript", "React", "Next.js"];

export default function About() {
  return (
    <section className="px-4 py-10 sm:px-8 sm:py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">About</h1>

      <div className="mt-8">
        <h2 className="text-xl font-bold sm:text-2xl">Who I am</h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          I'm a software engineer at American Express. Outside of work, I
          spend most of my time working out, traveling, or hanging out with
          friends.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold sm:text-2xl">Random facts</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-600 dark:text-neutral-400">
          {facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold sm:text-2xl">Tools & languages</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
