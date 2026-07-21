import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "https://github.com/ArthurWHenry", label: "GitHub", external: true },
];

export default function Nav({ currentPath }: { currentPath: string }) {
  return (
    <nav className="flex items-center justify-between gap-4 border-b border-neutral-200 px-4 py-4 sm:px-8 dark:border-neutral-800">
      <div className="flex gap-3 sm:gap-6">
        {links.map(({ href, label, external }) => (
          <a
            key={href}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={
              currentPath === href
                ? "font-bold text-black dark:text-white"
                : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
            }
          >
            {label}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
