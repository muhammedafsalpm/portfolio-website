import { FiArrowUpRight } from "react-icons/fi";
import { experience } from "@/data/profile";
import Reveal from "./Reveal";
import Section, { Chip } from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 · Experience"
      title="Where I've worked"
      intro="Building agentic AI, conversational platforms and ML pipelines for enterprise, startup and public-sector teams."
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 60} className="relative">
            <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[47px]" />
            <article className="rounded-2xl border border-line bg-elevated p-6 transition hover:border-accent/50 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">{job.role}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 text-accent">
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 font-medium hover:underline"
                      >
                        {job.company} <FiArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="font-medium">{job.company}</span>
                    )}
                    {job.note && <span className="text-sm text-subtle">· {job.note}</span>}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-sm text-subtle">{job.period}</span>
              </div>
              <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-muted">
                {job.points.map((p) => (
                  <li key={p.slice(0, 30)} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
