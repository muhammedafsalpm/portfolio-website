"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { FiMoon, FiSun } from "react-icons/fi";

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const apply = (next: boolean) => {
    flushSync(() => setDark(next));
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  const toggle = async () => {
    const next = !dark;
    const doc = document as ViewTransitionDoc;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc.startViewTransition || reduce || !btn.current) {
      apply(next);
      return;
    }

    // Circle grows out of the toggle button until it covers the whole screen.
    const { left, top, width, height } = btn.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = doc.startViewTransition(() => apply(next));
    await transition.ready;
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 650, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" },
    );
  };

  return (
    <button
      ref={btn}
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light mode" : "Dark mode"}
      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent"
    >
      <FiSun
        size={16}
        className={`absolute transition-all duration-500 ${dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
      />
      <FiMoon
        size={16}
        className={`absolute transition-all duration-500 ${dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
      />
    </button>
  );
}
