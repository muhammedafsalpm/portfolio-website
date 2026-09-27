import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, intro, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-chip px-2.5 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
