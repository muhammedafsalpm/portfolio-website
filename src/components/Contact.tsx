"use client";

import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { profile, socials } from "@/data/profile";
import { socialIcons } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <Section id="contact" eyebrow="07 · Contact" title="Let's build something intelligent">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-elevated p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          <p className="max-w-md text-lg leading-relaxed text-muted">
            I&apos;m open to AI engineering roles, collaborations and interesting problems in agentic AI, RAG and
            conversational systems. My inbox is always open.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:brightness-110 dark:text-slate-950"
            >
              <FiMail /> Say hello
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied!" : "Copy email"}
            </button>
          </div>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FiMail className="text-accent" />
              <a href={`mailto:${profile.email}`} className="break-all hover:text-accent">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-accent" />
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiMapPin className="text-accent" />
              <span>{profile.location}</span>
            </li>
          </ul>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {socials.map((s, i) => {
            const Icon = socialIcons[s.icon];
            return (
              <Reveal key={s.label} delay={i * 70}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotlight group flex items-center gap-4 rounded-2xl border border-line bg-elevated p-5 transition hover:border-accent/50"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold group-hover:text-accent">{s.label}</p>
                    <p className="truncate text-xs text-subtle">{s.href.replace(/^https?:\/\/(www\.)?/, "")}</p>
                  </div>
                  <FiArrowUpRight className="text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
