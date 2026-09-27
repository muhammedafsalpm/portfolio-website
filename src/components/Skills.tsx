import { skills } from "@/data/profile";
import Reveal from "./Reveal";
import Section, { Chip } from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="Technical toolkit"
      intro="The languages, frameworks and platforms I use to take AI systems from prototype to production."
      className="bg-elevated/50"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal
            key={g.group}
            delay={i * 80}
            className={`rounded-2xl border border-line bg-bg p-6 transition hover:border-accent/50 ${
              i === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <h3 className="flex items-center gap-2 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {g.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
