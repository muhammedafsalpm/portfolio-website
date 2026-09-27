import { FiAward, FiBookOpen, FiBriefcase, FiGlobe, FiMail, FiMapPin } from "react-icons/fi";
import { education, profile } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

const facts = [
  { icon: FiBriefcase, label: "Role", value: profile.currentTitle },
  { icon: FiMapPin, label: "Location", value: profile.location },
  { icon: FiBookOpen, label: "Education", value: "B.Tech CSE · CGPA 8.46" },
  { icon: FiAward, label: "Certified", value: "Microsoft Azure DP-100 · DP-900" },
  { icon: FiGlobe, label: "Domains", value: "BFSI · Healthcare · Oil & Gas · Enterprise" },
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
];

export default function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="Turning LLMs into production systems">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {profile.summary.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="text-sm text-subtle">
            {education[0].institution} graduate · {profile.extra}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-elevated">
            {facts.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 px-5 py-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-subtle">{label}</p>
                  {href ? (
                    <a href={href} className="block truncate font-medium hover:text-accent">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
