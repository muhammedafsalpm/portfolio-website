import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, socials } from "@/data/profile";
import Reveal from "./Reveal";
import Section, { Chip } from "./Section";

export default function Projects() {
  const github = socials.find((s) => s.icon === "github")?.href;

  return (
    <Section
      id="projects"
      eyebrow="05 · Projects"
      title="Selected work"
      intro="Production platforms and applied AI projects across agentic systems, RAG, voice AI and classical ML."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            delay={(i % 3) * 80}
            className={`spotlight group flex flex-col rounded-2xl border bg-elevated p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 ${
              p.featured ? "border-accent/40" : "border-line hover:border-accent/50"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              {p.featured && (
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  Featured
                </span>
              )}
            </div>
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="text-sm font-medium text-accent">{p.subtitle}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            {(p.github || p.demo) && (
              <div className="mt-5 flex gap-4 border-t border-line pt-4 text-sm">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-muted hover:text-accent"
                  >
                    <FiGithub /> Source
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-muted hover:text-accent"
                  >
                    <FiArrowUpRight /> Live demo
                  </a>
                )}
              </div>
            )}
          </Reveal>
        ))}
      </div>

      {github && (
        <Reveal className="mt-10 text-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-elevated px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
          >
            <FiGithub /> More on GitHub <FiArrowUpRight />
          </a>
        </Reveal>
      )}
    </Section>
  );
}
