import { FiArrowUp } from "react-icons/fi";
import { profile, socials } from "@/data/profile";
import { socialIcons } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-subtle">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-1">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg text-subtle transition hover:text-accent"
              >
                <Icon size={16} />
              </a>
            );
          })}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 grid h-9 w-9 place-items-center rounded-lg border border-line text-subtle transition hover:border-accent hover:text-accent"
          >
            <FiArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
