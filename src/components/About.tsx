import Image from "next/image";
import { FiAward, FiBookOpen, FiBriefcase, FiGlobe, FiMail, FiMapPin } from "react-icons/fi";
import { education, profile } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

const facts = [
  { icon: FiBriefcase, label: "Role", value: `${profile.currentTitle} @ ${profile.currentCompany}` },
  { icon: FiMapPin, label: "Location", value: profile.location },
  { icon: FiBookOpen, label: "Education", value: "B.Tech CSE · CGPA 8.46" },
  { icon: FiAward, label: "Certified", value: "Microsoft Azure DP-100 · DP-900" },
  { icon: FiGlobe, label: "Domains", value: "BFSI · Healthcare · Oil & Gas · Enterprise" },
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
];

export default function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="Turning LLMs into production systems">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-14">
        <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
          <figure className="relative overflow-hidden rounded-2xl border border-line bg-elevated">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={800}
              sizes="(min-width: 1024px) 380px, 90vw"
              className="aspect-[4/5] w-full object-cover"
              priority={false}
            />
            <figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 py-3 text-sm">
              <span className="font-semibold">{profile.name}</span>
              <span className="font-mono text-xs text-subtle">{profile.location.replace(", India", "")}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="text-sm text-subtle">
              {education[0].institution} graduate · {profile.extra}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {facts.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4 bg-elevated px-5 py-4">
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
      </div>
    </Section>
  );
}
