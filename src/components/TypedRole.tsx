"use client";

import { useEffect, useState } from "react";

// Types and deletes each role in turn. Server render shows the first role in full.
export default function TypedRole({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(roles[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const full = roles[index];
    let delay = deleting ? 35 : 70;
    if (!deleting && text === full) delay = 2200;
    if (deleting && text === "") delay = 300;

    const id = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, roles]);

  return (
    <span className="block min-h-[1.15em] pb-1" aria-label={roles.join(", ")}>
      <span className="text-accent" aria-hidden>
        {text}
      </span>
      <span className="caret ml-0.5 inline-block w-[3px] translate-y-[0.08em] bg-accent align-baseline" aria-hidden>
        &nbsp;
      </span>
    </span>
  );
}
