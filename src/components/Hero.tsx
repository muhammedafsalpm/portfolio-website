import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile, socials } from "@/data/profile";
import { socialIcons } from "./Icons";
import Orchestrator from "./Orchestrator";
import Reveal from "./Reveal";
import TechMarquee from "./TechMarquee";
import TypedRole from "./TypedRole";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="bg-binary pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Currently {profile.currentTitle} @ {profile.currentCompany}
          </p>

          <h1 className="mt-6 font-bold tracking-tight">
            <span className="block text-xl font-medium text-muted sm:text-2xl">Hi, I&apos;m</span>
            <span className="mt-1 block text-[2rem] whitespace-nowrap min-[400px]:text-4xl sm:text-5xl xl:text-[3.5rem]">
              {profile.name.split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="mt-1 block text-xl whitespace-nowrap min-[400px]:text-2xl sm:text-4xl lg:text-[1.75rem] xl:text-4xl">
              <TypedRole roles={profile.roles} />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.tagline}</p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-subtle">
            <FiMapPin /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 dark:text-[#06121b]"
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
          <Orchestrator />
        </Reveal>
      </div>

      <Reveal delay={250} className="mx-auto mt-16 max-w-6xl px-5 sm:mt-20 sm:px-8">
        <TechMarquee />
      </Reveal>
    </section>
  );
}
