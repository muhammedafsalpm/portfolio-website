import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white dark:text-slate-950"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
