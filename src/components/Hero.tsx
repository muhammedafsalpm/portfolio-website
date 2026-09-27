import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile, socials, stats } from "@/data/profile";
import { socialIcons } from "./Icons";
import Reveal from "./Reveal";

function CodeCard() {
  const k = "text-accent";
  const s = "text-emerald-600 dark:text-emerald-400";
  const c = "text-subtle";
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-br from-accent/25 via-transparent to-accent-2/25 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-line bg-elevated shadow-2xl shadow-black/5">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-subtle">engineer.py</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 sm:text-sm">
          <code>
            <span className={k}>class</span> <span className="text-accent-2">AIEngineer</span>:{"\n"}
            {"    "}name = <span className={s}>&quot;{profile.name}&quot;</span>{"\n"}
            {"    "}based_in = <span className={s}>&quot;Kochi, India&quot;</span>{"\n"}
            {"    "}focus = [<span className={s}>&quot;Agentic AI&quot;</span>, <span className={s}>&quot;RAG&quot;</span>,{"\n"}
            {"             "}<span className={s}>&quot;LLM Pipelines&quot;</span>, <span className={s}>&quot;Voice AI&quot;</span>]{"\n"}
            {"    "}stack = [<span className={s}>&quot;Python&quot;</span>, <span className={s}>&quot;FastAPI&quot;</span>, <span className={s}>&quot;CrewAI&quot;</span>,{"\n"}
            {"             "}<span className={s}>&quot;Docker&quot;</span>, <span className={s}>&quot;Kubernetes&quot;</span>]{"\n"}
            {"    "}cloud = [<span className={s}>&quot;AWS&quot;</span>, <span className={s}>&quot;Azure&quot;</span>]{"\n\n"}
            {"    "}<span className={k}>def</span> <span className="text-accent-2">build</span>(self, idea):{"\n"}
            {"        "}<span className={c}># prototype → production</span>{"\n"}
            {"        "}<span className={k}>return</span> self.ship(idea, scalable=<span className={k}>True</span>)
          </code>
        </pre>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.currentTitle}
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name.split(" ").slice(0, 2).join(" ")}
            <span className="block text-gradient pb-1">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.tagline}</p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-subtle">
            <FiMapPin /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:brightness-110 dark:text-slate-950"
            >
              View my work <FiArrowRight className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-elevated px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={150} className="min-w-0">
          <CodeCard />
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5 sm:mt-20 sm:px-8">
        <Reveal delay={250}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-elevated px-6 py-6 text-center">
                <p className="text-3xl font-bold text-gradient">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
