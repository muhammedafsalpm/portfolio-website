import type { IconType } from "react-icons";
import { FiActivity, FiCloud, FiDatabase, FiGitBranch, FiServer, FiTarget } from "react-icons/fi";
import { workflow } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

const ICONS: Record<string, IconType> = {
  target: FiTarget,
  database: FiDatabase,
  branch: FiGitBranch,
  server: FiServer,
  cloud: FiCloud,
  activity: FiActivity,
};

export default function Workflow() {
  return (
    <Section
      id="approach"
      eyebrow="02 · Approach"
      title="How I build AI systems"
      intro="An end-to-end workflow I follow to take agentic AI from an idea to a reliable production service."
      className="bg-elevated/50"
    >
      <div className="relative">
        {/* Connector: horizontal on large screens, vertical on small ones */}
        <div className="absolute top-7 right-[8%] left-[8%] hidden h-px overflow-hidden bg-line lg:block">
          <span className="pipe-glow absolute top-0 h-px w-1/5 bg-linear-to-r from-transparent via-accent-2 to-transparent" />
        </div>
        <div className="absolute top-0 bottom-0 left-7 w-px overflow-hidden bg-line lg:hidden">
          <span className="pipe-glow-y absolute left-0 h-1/5 w-px bg-linear-to-b from-transparent via-accent-2 to-transparent" />
        </div>

        <ol className="relative grid grid-cols-1 gap-6 lg:grid-cols-6 lg:gap-4">
          {workflow.map((w, i) => {
            const Icon = ICONS[w.icon];
            return (
              <Reveal as="li" key={w.step} delay={i * 90} className="flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                <span className="group relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-bg text-accent shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/20">
                  <Icon size={22} />
                  <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-linear-to-br from-accent to-accent-2 font-mono text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div className="lg:mt-5">
                  <h3 className="font-semibold">{w.step}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
