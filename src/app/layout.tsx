import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono", display: "swap" });

const description = `${profile.name} — ${profile.role} based in ${profile.location}. ${profile.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Muhammed Afsal P M",
    "AI Engineer",
    "On-Premise LLM",
    "LangGraph",
    "Ollama",
    "Vision-Language Models",
    "Agentic AI",
    "LLM",
    "RAG",
    "CrewAI",
    "FastAPI",
    "Machine Learning",
    "Kochi",
    "Keralam",
    "NL-to-SQL",
    "MCP",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} | ${profile.role}`,
    description,
    siteName: profile.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#06121b" },
  ],
};

// Sets the theme class before first paint to avoid a light/dark flash, and marks JS as available for scroll reveals.
const themeScript = `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;if(d)document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
