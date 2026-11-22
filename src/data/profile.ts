// All website content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Muhammed Afsal P M",
  shortName: "Afsal",
  initials: "MA",
  role: "AI Engineer · Agentic AI · LLM Engineering · RAG",
  // Rotated in the hero headline
  roles: ["AI Engineer", "Agentic AI Engineer", "LLM Engineer", "RAG Systems Builder", "Multi-Agent Orchestrator"],
  currentTitle: "Agentic AI Engineer",
  currentCompany: "NGXP Technologies LLP",
  location: "Kochi, Kerala, India",
  noticePeriod: "30 days",
  preferredLocations: "Kochi · Thiruvananthapuram · Bengaluru · Hyderabad · Chennai · Remote",
  languages: "English · Malayalam · Tamil · Hindi",
  tagline:
    "AI Engineer with 3+ years of experience building and deploying production-grade Generative AI and agentic applications — multi-agent orchestration, RAG, NL-to-SQL and MCP on OpenAI and self-hosted LLMs — plus fine-tuned and quantized open-weight models with 1,000+ downloads on Hugging Face.",
  summary: [
    "AI Engineer with 3+ years of experience building and deploying production-grade Generative AI and agentic applications across oil & gas, BFSI, healthcare and e-commerce.",
    "Experienced in multi-agent orchestration (LangGraph, CrewAI), RAG, NL-to-SQL, MCP integrations, LLM evaluation and vision-language models, using both OpenAI and self-hosted LLMs (Qwen, Llama via Ollama).",
    "I deliver end to end with Python, FastAPI, React / Next.js, Docker, Kubernetes, AWS and Azure, and I fine-tune and quantize open-weight LLMs — my published Hugging Face models have passed 1,000 downloads.",
  ],
  email: "muhammedafsalpmtech@gmail.com",
  phone: "+91 98460 93491",
  resume: "/Muhammed_Afsal_P_M_Resume.pdf",
  photo: "/profile.jpg",
  extra: "Valid Indian Passport",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/muhammedafsalpm", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammedafsalpm", icon: "linkedin" },
  { label: "Hugging Face", href: "https://huggingface.co/muhammed-afsal-p-m", icon: "huggingface" },
  { label: "Kaggle", href: "https://www.kaggle.com/muhammedafsalpm", icon: "kaggle" },
] as const;

// Scrolling tech strip in the hero (icon keys map to components/TechMarquee.tsx)
export const techStack = [
  "Python",
  "FastAPI",
  "LangGraph",
  "LangChain",
  "CrewAI",
  "MCP",
  "OpenAI",
  "Qwen",
  "Ollama",
  "llama.cpp / GGUF",
  "Hugging Face",
  "Langfuse",
  "RAGFlow",
  "Next.js",
  "React",
  "Angular",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "pgvector",
  "Elasticsearch",
  "Qdrant",
  "MongoDB",
  "Redis",
  "LiveKit",
  "Docker",
  "Kubernetes",
  "Drone CI",
  "AWS",
  "Azure",
];

export const skills = [
  {
    group: "Agentic AI & LLMs",
    items: [
      "Generative AI",
      "Agentic AI",
      "Multi-Agent Systems",
      "LangGraph",
      "LangChain",
      "CrewAI",
      "RAG",
      "RAGFlow",
      "NL-to-SQL",
      "MCP",
      "Tool Calling",
      "Human-in-the-Loop",
      "Prompt Engineering",
      "Embeddings",
    ],
  },
  {
    group: "Models & Providers",
    items: [
      "OpenAI GPT-4",
      "Azure OpenAI",
      "Gemini",
      "Groq",
      "Sarvam",
      "Qwen",
      "Llama",
      "Qwen3-VL",
      "LLaVA",
      "Ollama",
      "Hugging Face",
    ],
  },
  {
    group: "Fine-tuning, Evaluation & LLMOps",
    items: [
      "LoRA / PEFT",
      "SFT (TRL)",
      "llama.cpp",
      "GGUF Quantization (imatrix)",
      "LLM-as-a-Judge",
      "LLM Evaluation",
      "Langfuse",
      "Perplexity / KL Divergence",
    ],
  },
  {
    group: "Backend & Frontend",
    items: [
      "Python",
      "SQL",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "Async Programming",
      "Celery",
      "RabbitMQ",
      "Next.js",
      "React.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    group: "Databases & Vector Search",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "pgvector", "Qdrant", "ChromaDB", "FAISS", "Elasticsearch"],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS",
      "Microsoft Azure",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "GitHub Actions",
      "Drone CI",
      "Git",
      "SonarQube",
    ],
  },
  {
    group: "Voice, Vision & Analytics",
    items: [
      "Speech-to-Text",
      "Text-to-Speech (Piper)",
      "LiveKit",
      "Twilio",
      "YOLO",
      "DeepSORT",
      "scikit-learn",
      "Power BI",
      "Tableau",
    ],
  },
];

export type Venture = {
  company: string;
  url?: string;
  note: string;
  role: string;
  period?: string;
  points: string[];
  tags: string[];
};

export type Experience = {
  company: string;
  current?: boolean;
  companyUrl?: string;
  note?: string;
  role: string;
  location?: string;
  period: string;
  points: string[];
  tags: string[];
  // Startups / products built inside this company
  ventures?: Venture[];
};

export const experience: Experience[] = [
  {
    company: "NGXP Technologies LLP",
    current: true,
    role: "Agentic AI Engineer",
    location: "Kochi, Kerala",
    period: "Jun 2026 – Present",
    points: [
      "Built an NL-to-SQL database assistant for an oil & gas client using LangGraph multi-agent orchestration with self-hosted Qwen (Ollama) and OpenAI models, translating business questions into SQL over enterprise databases; added voice (STT, Piper TTS) and LLM-as-a-Judge response evaluation.",
      "Delivered crew management, well-slippage tracking, automated daily reporting, anomaly detection and a database-migration validator for the same client, with Next.js / React frontends on FastAPI; owned deployment, testing and production debugging.",
      "Architected a supervisor-based multi-agent platform (LangGraph) coordinating web-search, communication and verifier agents with parallel execution, failure replanning, human-in-the-loop approvals and code-enforced policy guardrails; containerised with Docker Compose.",
      "Implemented an enterprise document-intelligence (RAG) platform on RAGFlow with vector databases, self-hosted Qwen and OpenAI models; added Langfuse tracing and evaluation, persistent agent memory (Supermemory) and Drone CI/CD.",
      "Developed real-time driver-safety monitoring combining on-device detection with VLMs (Qwen3-VL 8B, LLaVA 7B) via Ollama and FastAPI to flag phone use, smoking, eating, drinking and seatbelt violations, with structured JSON output and confidence-tiered alerts.",
    ],
    tags: [
      "LangGraph",
      "Qwen",
      "Ollama",
      "OpenAI",
      "NL-to-SQL",
      "LLM-as-a-Judge",
      "Piper TTS",
      "Next.js",
      "React",
      "FastAPI",
      "RAGFlow",
      "Langfuse",
      "VLMs",
    ],
  },
  {
    company: "Parity Cube Private Limited",
    role: "Integration & Automation Engineer",
    location: "Mumbai, Maharashtra",
    period: "Apr 2026 – May 2026",
    points: [
      "Built a Model Context Protocol (MCP) server for Cuelinks, the company's affiliate-marketing platform, exposing its REST API as LLM tools with structured schemas and endpoint-specific prompts, so AI clients (ChatGPT, Claude) select the right API operation and payload.",
      "Developed an agentic competitor-intelligence platform (LangGraph, FastAPI, OpenAI, Docker) integrating affiliate-network APIs to compare product availability, offers and pricing.",
    ],
    tags: ["MCP", "Tool Calling", "LangGraph", "FastAPI", "OpenAI", "Docker", "REST APIs"],
  },
  {
    company: "Techvantage Systems Pvt. Ltd",
    companyUrl: "https://techvantage.ai",
    role: "Associate Software Engineer (AI)",
    location: "Thiruvananthapuram, Kerala",
    period: "Dec 2024 – Apr 2026",
    points: [
      "Designed and deployed multi-agent systems (CrewAI; GPT-4, Groq, Llama via Ollama), including an intelligent loan-processing platform automating document verification, eligibility checks, risk assessment and decision-making for banking, insurance and audit clients.",
      "Built an HR-policy chatbot assistant (CrewAI, OpenAI) with agent-based intent classification, plus AI products for recruitment (resume shortlisting, adaptive tests, LLM-generated questions) and contract intelligence (clause detection, risk and compliance checks, contract Q&A).",
      "Shipped production services with FastAPI, MongoDB and RabbitMQ on Kubernetes (Azure, AWS): OTP authentication, multi-language RAG, fraud detection and automated reports; set up CI/CD, SonarQube and monitoring; also built computer vision (YOLO, DeepSORT) and ML pipelines (FTI, scikit-learn).",
    ],
    tags: ["CrewAI", "GPT-4", "Groq", "Llama", "FastAPI", "MongoDB", "RabbitMQ", "Kubernetes", "YOLO"],
    ventures: [
      {
        company: "Zentis AI",
        url: "https://zentis.ai/",
        note: "Techvantage-incubated agentic AI platform for regulated BFSI",
        role: "Core Team",
        points: [
          "Helped architect the multi-agent orchestration platform from inception, using microservices, autonomous agents, RAG, vector search, Azure OpenAI, Groq and LLM-as-a-Judge for workflow automation, document intelligence and audit.",
        ],
        tags: ["Multi-Agent", "Azure OpenAI", "Groq", "RAG", "LLM-as-a-Judge", "Microservices"],
      },
      {
        company: "Go-Do",
        url: "https://go-do.ai/",
        note: "Multilingual voice and WhatsApp AI agents",
        role: "Core Team",
        points: [
          "Built conversational AI agents (FastAPI, LiveKit, Twilio WhatsApp API, Redis, MongoDB, FAISS-based RAG; Gemini, OpenAI, Sarvam) with STT/TTS, tool calling and persistent sessions, serving customers in multiple Indian languages.",
        ],
        tags: ["LiveKit", "Twilio", "Redis", "FAISS", "Gemini", "Sarvam", "STT/TTS"],
      },
    ],
  },
  {
    company: "Bharat Petroleum Corporation Limited",
    note: "Kochi Refinery",
    role: "AI Engineer",
    location: "Kochi, Kerala",
    period: "Dec 2023 – Dec 2024",
    points: [
      "Developed an AI chatbot with a Retrieval-Augmented Generation (RAG) pipeline that gives context-aware answers from internal refinery documents.",
      "Designed agent-based AI data-auditing and report-generation workflows using RAG to automate data validation, summarisation and compliance reporting.",
      "Extracted, validated and managed data from multiple sources with SQL/MySQL to ensure data quality and integrity for petroleum operations, adding agent-based anomaly detection.",
      "Developed and optimised machine-learning models and applied statistical and stochastic analysis to support optimisation of extraction, refining and distribution processes.",
      "Built interactive Power BI, Tableau and Excel dashboards with AI-generated insights and predictive analytics to improve operational efficiency and decision-making.",
    ],
    tags: ["RAG", "Agents", "SQL", "MySQL", "Machine Learning", "Power BI", "Tableau"],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  huggingface?: string;
  demo?: string;
  featured?: boolean;
  // Overrides the "Featured" label, e.g. "Open source"
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "Qwen3.8-27B GGUF Quantization",
    subtitle: "Open-weight model · 1,000+ downloads",
    description:
      "Reproducible llama.cpp pipeline converting Qwen3.8-27B BF16 weights into 7 imatrix GGUF quantizations (Q8_0 to IQ3_M). Q4_K_M cuts weights from 54 GB to 17 GB with mean KL divergence 0.012 and 95% top-token agreement vs BF16; tool calling and vision tested via llama-server.",
    tags: ["llama.cpp", "GGUF", "imatrix", "KL Divergence", "Hugging Face"],
    huggingface: "https://huggingface.co/muhammed-afsal-p-m/Qwen3.8-27B-GGUF",
    github: "https://github.com/muhammedafsalpm/qwen3.8-27b-gguf-quantization",
    featured: true,
    badge: "Open source",
  },
  {
    title: "NL2SQL Agent",
    subtitle: "Multi-Agent Text-to-SQL for SQL Server",
    description:
      "LangGraph assistant with planner, SQL author, verifier and synthesizer agents, a read-only SQL validator, charts and Excel/Word export; runs on OpenAI or local models via Ollama.",
    tags: ["LangGraph", "Multi-Agent", "SQL Server", "Ollama", "OpenAI"],
    github: "https://github.com/muhammedafsalpm/nl2sql-agent",
    featured: true,
    badge: "Open source",
  },
  {
    title: "Agentic Document Intelligence",
    subtitle: "Agentic RAG with Hybrid Search",
    description:
      "Agentic RAG platform with an intent router, ReAct analysis agent and verifier agent; hybrid BM25 + bge-m3 search in Elasticsearch with reranking, built with FastAPI, React / TypeScript and Docker.",
    tags: ["Agentic RAG", "Elasticsearch", "bge-m3", "FastAPI", "React", "TypeScript"],
    github: "https://github.com/muhammedafsalpm/agentic-document-intelligence",
    featured: true,
    badge: "Open source",
  },
  {
    title: "Llama 3.1 8B Invoice Extraction",
    subtitle: "Fine-tuned Open-weight Model",
    description:
      "LoRA (r=128) SFT with TRL / PEFT for structured JSON extraction from invoices and purchase orders; released the adapter, merged weights and GGUF for local inference with Ollama.",
    tags: ["Llama 3.1 8B", "LoRA", "SFT (TRL)", "PEFT", "GGUF", "Ollama"],
    huggingface: "https://huggingface.co/muhammed-afsal-p-m/Llama-base-3.1-8B-invoice-gguf-sft",
    featured: true,
    badge: "Open source",
  },
  {
    title: "Oil & Gas Operations Intelligence",
    subtitle: "NL-to-SQL · Voice · Operations Apps",
    description:
      "NL-to-SQL assistant on LangGraph with self-hosted Qwen and OpenAI models, voice (STT, Piper TTS) and LLM-as-a-Judge evaluation, plus crew management, well-slippage tracking, daily reporting, anomaly detection and a migration validator with Next.js / React frontends on FastAPI.",
    tags: ["LangGraph", "Qwen", "NL-to-SQL", "Piper TTS", "Next.js", "FastAPI"],
  },
  {
    title: "Multi-Agent Orchestrator Platform",
    subtitle: "Supervisor Agents with Human-in-the-Loop",
    description:
      "LangGraph supervisor coordinating web-search, communication and verifier agents with parallel execution, failure replanning, human-in-the-loop approvals and code-enforced policy guardrails.",
    tags: ["LangGraph", "Multi-Agent", "HITL", "Guardrails", "Docker Compose"],
  },
  {
    title: "Enterprise Document Intelligence",
    subtitle: "RAG on RAGFlow with LLMOps",
    description:
      "Enterprise RAG platform on RAGFlow with vector databases, self-hosted Qwen and OpenAI models, Langfuse tracing and evaluation, persistent agent memory (Supermemory) and Drone CI/CD.",
    tags: ["RAGFlow", "Qwen", "Langfuse", "Supermemory", "Drone CI"],
  },
  {
    title: "Driver Safety Monitoring",
    subtitle: "Real-time Vision-Language Verification",
    description:
      "On-device detection combined with VLMs (Qwen3-VL 8B, LLaVA 7B) via Ollama and FastAPI to flag phone use, smoking, eating, drinking and seatbelt violations, with structured JSON output and confidence-tiered alerts.",
    tags: ["Qwen3-VL", "LLaVA", "Ollama", "FastAPI", "Computer Vision"],
  },
  {
    title: "MCP Server for Cuelinks",
    subtitle: "LLM-Accessible Affiliate APIs",
    description:
      "Model Context Protocol server exposing an affiliate-marketing platform's REST API as LLM tools with structured schemas and endpoint-specific prompts, so ChatGPT and Claude pick the right operation and payload.",
    tags: ["MCP", "Tool Calling", "REST APIs", "Prompt Engineering"],
  },
  {
    title: "Competitor Intelligence Platform",
    subtitle: "Agentic Product Comparison",
    description:
      "Agentic platform (LangGraph, FastAPI, OpenAI, Docker) integrating affiliate-network APIs to compare product availability, offers and pricing across platforms.",
    tags: ["LangGraph", "FastAPI", "OpenAI", "Docker"],
  },
  {
    title: "Intelligent Loan Processing",
    subtitle: "Multi-Agent BFSI Automation",
    description:
      "CrewAI multi-agent platform (GPT-4, Groq, Llama via Ollama) automating document verification, eligibility checks, risk assessment and decision-making for banking, insurance and audit clients.",
    tags: ["CrewAI", "GPT-4", "Groq", "Llama", "Ollama"],
  },
  {
    title: "HR, Recruitment & Contract AI",
    subtitle: "Enterprise AI Products",
    description:
      "HR-policy chatbot with agent-based intent classification (CrewAI, OpenAI), recruitment automation (resume shortlisting, adaptive tests, LLM-generated questions) and contract intelligence (clause detection, risk and compliance checks, contract Q&A).",
    tags: ["CrewAI", "OpenAI", "Intent Classification", "RAG"],
  },
];

export const education = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    detail: "Minor in Electronics and Communication Engineering · First Class with Distinction · CGPA 8.46",
    institution: "APJ Abdul Kalam Technological University",
    period: "2019 – 2023",
  },
  {
    title: "Certified Specialist in Data Science and Analytics",
    detail: "Professional certification program",
    institution: "ICT Academy of Kerala",
    period: "May 2024 – Oct 2024",
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
    issuer: "Microsoft",
    date: "Jun 2024",
    href: "https://learn.microsoft.com/en-us/users/muhammedafsalpm-3294/credentials/cf73db4e9c03da57",
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "Mar 2024",
    href: "https://learn.microsoft.com/en-us/users/muhammedafsalpm-3294/credentials/6c4f5caa90995dce",
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    date: "Dec 2024",
    href: "https://www.credly.com/badges/436a95ee-f557-46e6-a229-2e2c6ac45bb4",
  },
  {
    title: "Introducing Multimodal Llama 3.2",
    issuer: "DeepLearning.AI",
    date: "Jan 2025",
    href: "https://learn.deeplearning.ai/accomplishments/66ae21e9-8562-434e-a333-755738709cb8?usp=sharing",
  },
  {
    title: "Machine Learning Fundamentals Micro-Credential",
    issuer: "Alteryx",
    date: "Apr 2024",
    href: "https://www.credly.com/badges/6ffd5198-cbc7-40da-9918-6bd1c642adf3",
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Databricks",
    date: "Oct 2025",
    href: "https://credentials.databricks.com/dff7e7c7-e3bf-4ecb-beb1-90edfbbc1ca4",
  },
];

export const publication = {
  title: "Smart Application for Visually Impaired People",
  venue: "IJARIIE, Vol-9, Issue-3, 2023 · ISSN(O) 2395-4396",
  date: "Jun 2023",
  href: "https://ijariie.com/AdminUploadPdf/SMART_APPLICATION_FOR_VISUALLY_IMPAIRED_PEOPLE__ijariie20871.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
