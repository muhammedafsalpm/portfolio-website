"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { FiCheckCircle, FiCpu, FiDatabase, FiMessageSquare, FiTarget, FiTool, FiZap } from "react-icons/fi";

// Diagram coordinates live in a 520 x 440 space; HTML nodes are positioned in % of that.
const W = 520;
const H = 440;

type Node = { id: string; x: number; y: number; label: string; sub: string; icon: IconType };

const INPUT: Node = { id: "input", x: 260, y: 42, label: "Request", sub: "chat · voice · API", icon: FiMessageSquare };
const ORCH: Node = { id: "orch", x: 260, y: 152, label: "Orchestrator", sub: "routing · memory", icon: FiCpu };
const AGENTS: Node[] = [
  { id: "planner", x: 68, y: 280, label: "Planner", sub: "task graph", icon: FiTarget },
  { id: "retriever", x: 196, y: 280, label: "Retriever", sub: "RAG · vectors", icon: FiDatabase },
  { id: "tools", x: 324, y: 280, label: "Tool Caller", sub: "APIs · DBs", icon: FiTool },
  { id: "evaluator", x: 452, y: 280, label: "Evaluator", sub: "guardrails", icon: FiCheckCircle },
];
const OUTPUT: Node = { id: "output", x: 260, y: 398, label: "Response", sub: "streamed", icon: FiZap };

const ORDER = ["input", "orch", "planner", "retriever", "tools", "evaluator", "output"] as const;

const SCENARIOS = [
  [
    'Request: "Assess loan application #2481"',
    "Routing task to 4 specialist agents",
    "Split into KYC, income and risk checks",
    "Top-5 policy chunks retrieved from Qdrant",
    "Credit-bureau API called · KYC fetched",
    "Guardrails passed · risk scored",
    "Decision + audit report delivered ✓",
  ],
  [
    'Voice (Malayalam): "Book a cab to the airport"',
    "Intent detected · session restored from Redis",
    "Plan: locate user → pick slot → confirm",
    "User preferences retrieved via FAISS",
    "Booking tool invoked · WhatsApp confirmation queued",
    "Response validated · translated to Malayalam",
    "Spoken reply streamed via TTS ✓",
  ],
  [
    'Upload: "Review vendor_contract.pdf"',
    "Document intelligence workflow started",
    "Plan: extract clauses → compare → flag risks",
    "Similar clauses matched in ChromaDB",
    "Compliance rules engine queried",
    "3 risky clauses flagged · citations attached",
    "Contract summary + Q&A ready ✓",
  ],
  [
    'Query: "Summarize refinery shift anomalies"',
    "Routed to on-prem Llama via Ollama · no data leaves site",
    "Plan: pull logs → detect anomalies → draft report",
    "Shift logs fetched from MySQL Server",
    "LangGraph tool node ran anomaly checks",
    "Trace + cost logged in Langfuse · accuracy verified",
    "Shift anomaly report generated ✓",
  ],
];

const TAG: Record<string, string> = {
  input: "input",
  orch: "orchestrator",
  planner: "planner",
  retriever: "retriever",
  tools: "tools",
  evaluator: "evaluator",
  output: "output",
};

const pct = (n: Node) => ({ left: `${(n.x / W) * 100}%`, top: `${(n.y / H) * 100}%` });

function NodeBox({ node, active, big }: { node: Node; active: boolean; big?: boolean }) {
  const Icon = node.icon;
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-elevated/95 px-2 py-1.5 text-center shadow-sm backdrop-blur transition-all duration-500 sm:px-3 sm:py-2 ${
        big ? "w-[34%]" : "w-[23%]"
      } ${active ? "scale-105 border-accent shadow-lg shadow-accent/25" : "border-line"}`}
      style={pct(node)}
    >
      <div className="flex items-center justify-center gap-1.5">
        <Icon
          className={`shrink-0 transition-colors duration-500 ${active ? "text-accent" : "text-subtle"}`}
          size={big ? 16 : 13}
        />
        <span className={`truncate font-semibold ${big ? "text-xs sm:text-sm" : "text-[10px] sm:text-xs"}`}>
          {node.label}
        </span>
      </div>
      <p className="mt-0.5 hidden truncate font-mono text-[10px] text-subtle sm:block">{node.sub}</p>
    </div>
  );
}

export default function Orchestrator() {
  const [tick, setTick] = useState(0);
  const [running, setRunning] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  // Only animate while the diagram is on screen.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setRunning(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTick((t) => t + 1), 1400);
    return () => clearInterval(id);
  }, [running]);

  const step = tick % ORDER.length;
  const scenario = Math.floor(tick / ORDER.length) % SCENARIOS.length;
  const activeId = ORDER[step];

  // Last 4 log lines, carried across scenario boundaries.
  const lines = Array.from({ length: Math.min(4, tick + 1) }, (_, i) => {
    const t = tick - i;
    const s = t % ORDER.length;
    const sc = Math.floor(t / ORDER.length) % SCENARIOS.length;
    return { key: t, tag: TAG[ORDER[s]], text: SCENARIOS[sc][s] };
  }).reverse();

  const agentPath = (a: Node) => `M${ORCH.x} ${ORCH.y + 26} C${ORCH.x} ${ORCH.y + 80}, ${a.x} ${a.y - 70}, ${a.x} ${a.y - 24}`;
  const outPath = (a: Node) => `M${a.x} ${a.y + 24} C${a.x} ${a.y + 70}, ${OUTPUT.x} ${OUTPUT.y - 70}, ${OUTPUT.x} ${OUTPUT.y - 24}`;
  const inPath = `M${INPUT.x} ${INPUT.y + 22} L${ORCH.x} ${ORCH.y - 26}`;

  return (
    <div ref={root} className="relative">
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-br from-accent/25 via-transparent to-accent-2/25 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-line bg-elevated/70 shadow-2xl shadow-black/5 backdrop-blur">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 font-mono text-xs text-subtle">agent-orchestrator</span>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" /> live
          </span>
        </div>

        <div className="relative aspect-[520/440] w-full">
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden>
            <defs>
              <radialGradient id="packet" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--accent-2)" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </radialGradient>
            </defs>

            <path id="p-in" d={inPath} fill="none" stroke="var(--border)" strokeWidth="1.5" />
            <path d={inPath} className="flow-line" fill="none" stroke="var(--accent)" strokeOpacity="0.6" strokeWidth="1.5" />

            {AGENTS.map((a) => {
              const hot = activeId === a.id;
              return (
                <g key={a.id}>
                  <path id={`p-a-${a.id}`} d={agentPath(a)} fill="none" stroke="var(--border)" strokeWidth="1.5" />
                  <path id={`p-o-${a.id}`} d={outPath(a)} fill="none" stroke="var(--border)" strokeWidth="1.5" />
                  <path
                    d={agentPath(a)}
                    className="flow-line"
                    fill="none"
                    stroke={hot ? "var(--accent-2)" : "var(--accent)"}
                    strokeOpacity={hot ? 1 : 0.35}
                    strokeWidth={hot ? 2 : 1.5}
                    style={{ transition: "stroke-opacity .5s" }}
                  />
                  <path
                    d={outPath(a)}
                    className="flow-line"
                    fill="none"
                    stroke="var(--accent)"
                    strokeOpacity={hot ? 0.9 : 0.25}
                    strokeWidth="1.5"
                    style={{ transition: "stroke-opacity .5s" }}
                  />
                </g>
              );
            })}

            {/* Moving data packets */}
            <circle className="packet" r="5" fill="url(#packet)">
              <animateMotion dur="1.8s" repeatCount="indefinite">
                <mpath href="#p-in" />
              </animateMotion>
            </circle>
            {AGENTS.map((a, i) => (
              <g key={`pk-${a.id}`} className="packet">
                <circle r="4.5" fill="url(#packet)">
                  <animateMotion dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite">
                    <mpath href={`#p-a-${a.id}`} />
                  </animateMotion>
                </circle>
                <circle r="4.5" fill="url(#packet)">
                  <animateMotion dur="2.4s" begin={`${1.2 + i * 0.6}s`} repeatCount="indefinite">
                    <mpath href={`#p-o-${a.id}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}

            {/* Pulse ring behind the orchestrator */}
            <rect
              className="ring-pulse"
              x={ORCH.x - 80}
              y={ORCH.y - 26}
              width="160"
              height="52"
              rx="14"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </svg>

          <NodeBox node={INPUT} active={activeId === "input"} />
          <NodeBox node={ORCH} active={activeId === "orch"} big />
          {AGENTS.map((a) => (
            <NodeBox key={a.id} node={a} active={activeId === a.id} />
          ))}
          <NodeBox node={OUTPUT} active={activeId === "output"} />
        </div>

        <div className="h-[104px] overflow-hidden border-t border-line bg-bg/60 px-4 py-3 font-mono text-[11px] leading-[22px] sm:text-xs">
          {lines.map((l, i) => (
            <p
              key={l.key}
              className={`truncate transition-opacity duration-500 ${i === lines.length - 1 ? "opacity-100" : "opacity-50"}`}
            >
              <span className="text-accent">[{l.tag}]</span> <span className="text-muted">{l.text}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
