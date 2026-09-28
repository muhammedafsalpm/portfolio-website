import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiCelery,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiGooglegemini,
  SiHuggingface,
  SiKubernetes,
  SiLangchain,
  SiLanggraph,
  SiLivekit,
  SiModelcontextprotocol,
  SiMongodb,
  SiMysql,
  SiOllama,
  SiPython,
  SiQdrant,
  SiRabbitmq,
  SiRedis,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FiActivity, FiCpu, FiDatabase, FiLayers } from "react-icons/fi";
import { techStack } from "@/data/profile";

const ICONS: Record<string, IconType> = {
  Python: SiPython,
  FastAPI: SiFastapi,
  CrewAI: FiCpu,
  LangGraph: SiLanggraph,
  LangChain: SiLangchain,
  Langfuse: FiActivity,
  MCP: SiModelcontextprotocol,
  OpenAI: TbBrandOpenai,
  Gemini: SiGooglegemini,
  Ollama: SiOllama,
  "Hugging Face": SiHuggingface,
  LiveKit: SiLivekit,
  Qdrant: SiQdrant,
  ChromaDB: FiDatabase,
  FAISS: FiLayers,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  RabbitMQ: SiRabbitmq,
  Celery: SiCelery,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  AWS: FaAws,
  Azure: VscAzure,
  TensorFlow: SiTensorflow,
  "scikit-learn": SiScikitlearn,
  "GitHub Actions": SiGithubactions,
};

export default function TechMarquee() {
  // Rendered twice so the -50% translate loops seamlessly.
  const items = [...techStack, ...techStack];
  return (
    <div className="marquee overflow-hidden py-2" aria-label="Tech stack">
      <ul className="marquee-track flex w-max gap-3">
        {items.map((name, i) => {
          const Icon = ICONS[name] ?? FiCpu;
          return (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= techStack.length}
              className="flex items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2 text-sm font-medium whitespace-nowrap text-muted transition hover:border-accent hover:text-fg"
            >
              <Icon className="text-accent" size={16} />
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
