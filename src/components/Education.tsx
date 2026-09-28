import { FiArrowUpRight, FiAward, FiBookOpen, FiFileText } from "react-icons/fi";
import { certifications, education, publication } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="05 · Education" title="Education, certifications & research" className="bg-elevated/50">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-subtle">
            <FiBookOpen /> Education
          </h3>
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 80} className="rounded-2xl border border-line bg-bg p-6">
              <p className="font-mono text-xs text-subtle">{e.period}</p>
              <h4 className="mt-2 font-semibold">{e.title}</h4>
              <p className="mt-1 text-sm font-medium text-accent">{e.institution}</p>
              <p className="mt-2 text-sm text-muted">{e.detail}</p>
            </Reveal>
          ))}

          <h3 className="flex items-center gap-2 pt-4 text-sm font-semibold uppercase tracking-wider text-subtle">
            <FiFileText /> Publication
          </h3>
          <Reveal className="rounded-2xl border border-line bg-bg p-6">
            <p className="font-mono text-xs text-subtle">{publication.date}</p>
            <a
              href={publication.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex items-start gap-1 font-semibold hover:text-accent"
            >
              &ldquo;{publication.title}&rdquo;
              <FiArrowUpRight className="mt-1 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="mt-2 text-sm text-muted">{publication.venue}</p>
          </Reveal>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-subtle">
            <FiAward /> Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 50}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-line bg-bg p-4 transition hover:border-accent/50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                    <FiAward size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-snug group-hover:text-accent">{c.title}</p>
                    <p className="mt-0.5 text-xs text-subtle">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                  <FiArrowUpRight className="shrink-0 text-subtle transition group-hover:text-accent" />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
