// All website content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Muhammed Afsal P M",
  shortName: "Afsal",
  initials: "MA",
  role: "Agentic AI Engineer",
  // Rotated in the hero headline
  roles: ["Agentic AI Engineer", "Multi-Agent Orchestrator", "LLM & RAG Systems Builder", "On-Premise LLM Specialist"],
  currentTitle: "Agentic AI Engineer",
  currentCompany: "NGXP Technologies LLP",
  location: "Kochi, Kerala, India",
  tagline:
    "With 3+ years of experience, I design and deploy production-grade agentic AI — multi-agent orchestration, NL-to-SQL assistants, document intelligence, MCP servers and real-time voice AI — on OpenAI models and locally hosted LLMs (Qwen, Llama) via Ollama.",
  summary: [
    "Agentic AI Engineer with 3+ years of experience designing and deploying production-grade agentic AI systems, multi-agent orchestration platforms, NL-to-SQL assistants, document intelligence platforms and computer vision solutions across oil & gas, BFSI, healthcare, e-commerce & affiliate marketing (AdTech) and enterprise automation.",
    "Skilled in LangGraph, LangChain and CrewAI multi-agent workflows, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP) servers, LLM tool calling and vision-language models (VLMs), working with OpenAI models and locally hosted open-source LLMs (Qwen, Llama) via Ollama. Experienced in building real-time voice and chat AI systems with speech-to-text (STT) and text-to-speech (TTS), FastAPI microservices, vector databases and SQL/NoSQL databases (PostgreSQL, MySQL, MongoDB).",
    "Backed by LLMOps practices including Langfuse tracing and evaluation, Drone CI/CD, Docker and Kubernetes deployments on AWS and Azure, with a strong foundation in end-to-end machine learning — model training, fine-tuning, deployment and monitoring — focused on performance, scalability and reliability.",
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
  "Gemini",
  "Langfuse",
  "RAGFlow",
  "Hugging Face",
  "LiveKit",
  "Qdrant",
  "ChromaDB",
  "FAISS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Celery",
  "Docker",
  "Kubernetes",
  "Drone CI",
  "GitHub Actions",
  "AWS",
  "Azure",
  "TensorFlow",
  "scikit-learn",
];

export const skills = [
  {
    group: "Generative AI & LLMs",
    items: [
      "LLMs",
      "Generative AI",
      "Agentic AI",
      "Multi-Agent Systems",
      "RAG",
      "NL-to-SQL",
      "LLM Fine-tuning",
      "LLM Tool Calling",
      "Model Context Protocol (MCP)",
      "Human-in-the-Loop (HITL)",
      "Prompt Engineering",
      "Embeddings",
    ],
  },
  {
    group: "Models & Platforms",
    items: [
      "OpenAI (GPT-4)",
      "Qwen",
      "Llama",
      "Gemini",
      "Groq",
      "Ollama (Local LLMs)",
      "VLMs (Qwen3-VL, LLaVA)",
      "Hugging Face Transformers",
    ],
  },
  {
    group: "Frameworks & LLMOps",
    items: ["LangGraph", "LangChain", "CrewAI", "RAGFlow", "Langfuse", "Supermemory", "OpenAI API", "Streamlit"],
  },
  {
    group: "ML, Vision & Speech",
    items: [
      "Machine Learning",
      "scikit-learn",
      "TensorFlow",
      "Computer Vision",
      "YOLO",
      "DeepSORT",
      "Speech-to-Text (STT)",
      "Piper TTS",
      "LiveKit",
      "Twilio",
    ],
  },
  {
    group: "Programming & Databases",
    items: [
      "Python",
      "SQL",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "Redis",
      "ChromaDB",
      "FAISS",
      "Qdrant",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS (S3)",
      "Azure",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Drone CI",
      "GitHub Actions",
      "Git",
      "RabbitMQ",
      "Celery",
      "SonarQube",
    ],
  },
  {
    group: "Engineering & Analytics",
    items: [
      "Microservices Architecture",
      "REST API Design",
      "API Integration",
      "Model Deployment",
      "Async Programming",
      "Data Engineering",
      "Power BI",
      "Tableau",
    ],
  },
];

export type Venture = {
  company: string;
  note: string;
  role: string;
  period: string;
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
      "Built an NL-to-SQL database assistant for an oil & gas client using LangGraph multi-agent orchestration, locally hosted LLMs (Qwen via Ollama) and OpenAI models, translating natural-language business questions into accurate SQL over enterprise databases, with voice interaction through speech-to-text (STT) and Piper TTS.",
      "Developed AI-driven features for oil & gas operations, including crew management, well slippage tracking, automated daily report generation and data anomaly detection for well monitoring, along with a database migration validator that automates validation checks and migration reporting.",
      "Architected a multi-agent orchestrator platform using LangGraph, where a supervisor agent plans tasks across specialized agents (web search, communication, verifier), executes steps in parallel, re-plans on failure and routes sensitive actions through human-in-the-loop approvals with code-enforced policy guardrails, containerized with Docker Compose.",
      "Built an enterprise document intelligence platform using RAGFlow, vector databases and local LLMs (Qwen 35B via Ollama) alongside OpenAI models, with Langfuse for tracing and evaluation, Supermemory for persistent agent memory and Drone CI/CD for automated deployment.",
      "Developed a real-time driver safety monitoring system combining on-device detection models with vision-language models (Qwen3-VL 8B, LLaVA 7B) on self-hosted Ollama to verify phone use, smoking, eating, drinking and seatbelt violations through a FastAPI service, reducing false alerts with structured JSON outputs and confidence-tiered alert routing.",
    ],
    tags: ["LangGraph", "Ollama", "Qwen", "OpenAI", "NL-to-SQL", "RAGFlow", "Langfuse", "VLMs", "HITL", "Drone CI"],
  },
  {
    company: "Parity Cube Private Limited",
    role: "Integration & Automation Engineer",
    location: "Mumbai, Maharashtra",
    period: "Apr 2026 – May 2026",
    points: [
      "Designed and developed a Model Context Protocol (MCP) server for Cuelinks, the company's affiliate marketing platform, exposing REST API endpoints as LLM-accessible tools for natural-language interactions through AI clients such as ChatGPT and Claude.",
      "Engineered LLM-driven tool-calling and API orchestration workflows using endpoint-specific prompts and tool schemas, enabling LLMs to interpret user queries, select the right API operations and generate structured request payloads.",
      "Developed an agentic competitor intelligence platform using LangGraph, FastAPI, OpenAI and Docker, integrating external affiliate network APIs for cross-platform product discovery and comparison of availability, offers and pricing.",
    ],
    tags: ["MCP", "LLM Tool Calling", "LangGraph", "FastAPI", "OpenAI", "Docker", "REST APIs"],
  },
  {
    company: "Techvantage Systems Pvt. Ltd",
    companyUrl: "https://techvantage.ai",
    role: "Associate Software Engineer (AI)",
    location: "Trivandrum, Kerala",
    period: "Dec 2024 – Apr 2026",
    points: [
      "Designed and deployed multi-agent AI systems using CrewAI and LLMs (GPT-4, Groq, Llama), including LLM fine-tuning, to automate verification, risk assessment and decision-making in banking, insurance and audit domains.",
      "Engineered end-to-end ML pipelines following the FTI architecture with scikit-learn and MongoDB, automating feature extraction, model training and inference with integrated monitoring.",
      "Built enterprise AI platforms for recruitment, contract intelligence and HR policy, leveraging adaptive testing and LLM question generation for real-time analytics and compliance.",
      "Developed computer vision and data retrieval systems using YOLO, DeepSORT and ChromaDB for automated document analysis, object tracking and contextual report generation.",
      "Delivered production-grade solutions integrating FastAPI, AWS and SQL/NoSQL databases — secure OTP authentication, multi-language RAG, fraud detection and automated reporting.",
    ],
    tags: ["CrewAI", "GPT-4", "Groq", "Llama", "FastAPI", "AWS", "YOLO", "ChromaDB"],
    ventures: [
      {
        company: "Go-Do",
        note: "Startup incubated within Techvantage",
        role: "Core Team Member – Associate Software Engineer (AI)",
        period: "Dec 2025 – Feb 2026",
        points: [
          "Developed a multilingual agentic AI concierge accessible via WhatsApp and voice, letting users complete real-world tasks through natural-language commands across multiple Indian languages.",
          "Architected end-to-end conversational pipelines using FastAPI, LiveKit, Twilio WhatsApp API, Redis, MongoDB and FAISS-based RAG for real-time task orchestration, session persistence and knowledge retrieval.",
          "Implemented multimodal AI workflows integrating STT, TTS and LLM reasoning (Gemini, OpenAI, Sarvam) — scalable voice-and-text agents with tool-calling, analytics logging and production deployment.",
        ],
        tags: ["LiveKit", "Twilio", "Redis", "FAISS", "Gemini", "Sarvam", "STT/TTS"],
      },
      {
        company: "Zentis AI",
        note: "Startup incubated within Techvantage",
        role: "Core Team Member – Associate Software Engineer (AI)",
        period: "May 2025 – Oct 2025",
        points: [
          "Architected and developed a modular microservices-based AI platform from inception using autonomous agents, enabling workflow automation, document intelligence and decision support across BFSI, healthcare and manufacturing.",
          "Implemented AI orchestration pipelines using LLMs (Azure OpenAI, Groq), RAG, vector search and CrewAI multi-agent frameworks for contextual reasoning and knowledge-driven automation.",
          "Built scalable backend services with FastAPI, MongoDB and RabbitMQ; containerized with Docker and deployed on Kubernetes across Azure and AWS with secure APIs, fault tolerance and distributed processing.",
          "Established production DevOps practices — CI/CD pipelines, automated testing, SonarQube quality checks, monitoring and compliance controls — improving reliability and observability and reducing manual audit effort.",
        ],
        tags: ["Azure OpenAI", "CrewAI", "RabbitMQ", "Docker", "Kubernetes", "CI/CD"],
      },
    ],
  },
  {
    company: "Bharat Petroleum Corporation Limited",
    note: "Kochi Refinery",
    role: "AI Engineer (Apprenticeship)",
    location: "Kochi, Kerala",
    period: "Dec 2023 – Dec 2024",
    points: [
      "Extracted, validated and managed data from multiple sources using SQL/MySQL for petroleum operations, using agent-based AI for automated data validation and anomaly detection.",
      "Conducted advanced data analysis with SQL, stochastic methods and statistical modeling to optimize extraction, refining and distribution processes, incorporating AI-driven insights.",
      "Developed and optimized machine learning models, including an AI chatbot integrated with a Retrieval-Augmented Generation (RAG) pipeline for context-aware responses.",
      "Designed AI-driven data auditing and report generation systems using agent-based architectures and RAG to automate validation, summarization and compliance reporting.",
      "Built interactive dashboards with Power BI, Tableau and Excel, integrating AI-generated insights and predictive analytics.",
    ],
    tags: ["SQL", "MySQL", "RAG", "Agents", "Power BI", "Tableau", "Statistics"],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Oil & Gas Operations Intelligence",
    subtitle: "NL-to-SQL · Voice · Well Monitoring",
    description:
      "AI platform with an NL-to-SQL assistant built on LangGraph, local LLMs (Qwen via Ollama) and OpenAI models, plus STT / Piper TTS voice interaction, well-monitoring anomaly detection, crew management, daily reporting and Langfuse tracing.",
    tags: ["LangGraph", "Qwen", "Ollama", "NL-to-SQL", "Piper TTS", "Langfuse"],
    featured: true,
  },
  {
    title: "Multi-Agent Orchestrator Platform",
    subtitle: "Supervisor Agents with Human-in-the-Loop",
    description:
      "LangGraph supervisor agent that plans tasks across specialized agents (web search, communication, verifier), runs steps in parallel, re-plans on failure and routes sensitive actions through human approvals with code-enforced policy guardrails.",
    tags: ["LangGraph", "Multi-Agent", "HITL", "Guardrails", "Docker Compose"],
    featured: true,
  },
  {
    title: "Document Intelligence Platform",
    subtitle: "Enterprise RAG on Local LLMs",
    description:
      "Enterprise RAG platform using RAGFlow, vector databases and local LLMs (Qwen 35B via Ollama) alongside OpenAI models for document parsing and question answering, with Langfuse tracing and evaluation.",
    tags: ["RAGFlow", "Qwen 35B", "Ollama", "Langfuse", "Supermemory", "Drone CI"],
    featured: true,
  },
  {
    title: "Driver Safety Monitoring",
    subtitle: "Real-time Vision-Language Verification",
    description:
      "Combines on-device detection with VLMs (Qwen3-VL 8B, LLaVA 7B) on self-hosted Ollama to verify phone use, smoking, eating, drinking and seatbelt violations via FastAPI, with structured JSON outputs and confidence-tiered alerts.",
    tags: ["Qwen3-VL", "LLaVA", "Ollama", "FastAPI", "Computer Vision"],
  },
  {
    title: "MCP Server for Cuelinks",
    subtitle: "LLM-Accessible Affiliate APIs",
    description:
      "Model Context Protocol server exposing an affiliate marketing platform's REST APIs as LLM tools, so users can work with it in natural language through AI clients such as ChatGPT and Claude.",
    tags: ["MCP", "LLM Tool Calling", "REST APIs", "Prompt Engineering"],
  },
  {
    title: "Competitor Intelligence Platform",
    subtitle: "Agentic Product Discovery",
    description:
      "Agentic platform built with LangGraph, FastAPI, OpenAI and Docker that integrates external affiliate network APIs for cross-platform product discovery and comparison of availability, offers and pricing.",
    tags: ["LangGraph", "FastAPI", "OpenAI", "Docker"],
  },
  {
    title: "Publisher Website Classifier",
    subtitle: "LLM-Powered Publisher Vetting System",
    description:
      "LLM-powered publisher vetting microservice with RAG (ChromaDB + sentence-transformers), a dual-provider architecture (OpenAI/Ollama) and tiered web scraping to automate affiliate quality assessment.",
    tags: ["FastAPI", "ChromaDB", "OpenAI", "Ollama", "Scraping"],
    github: "https://github.com/muhammedafsalpm/Intelligent-Publisher-Website-Classifier",
  },
  {
    title: "Contract Management Tool",
    subtitle: "AI Contract Intelligence",
    description:
      "AI-powered contract analysis with automated compliance checks, risk assessment, clause detection and an intelligent contract Q&A chatbot with multi-format document support.",
    tags: ["FastAPI", "Groq", "ChromaDB", "MongoDB"],
  },
  {
    title: "AI Agents for Banking Loan Processing",
    subtitle: "BFSI Automation",
    description:
      "AI agents that automate loan verification, eligibility checks and decision-making workflows for banking operations.",
    tags: ["CrewAI", "LLMs", "Multi-Agent"],
  },
  {
    title: "AI-Powered Recruitment Platform",
    subtitle: "Hiring Automation",
    description:
      "Recruitment automation for resume shortlisting, test scheduling, AI-generated questions and candidate analytics, integrated with MongoDB.",
    tags: ["LLMs", "MongoDB", "Adaptive Testing"],
  },
  {
    title: "AI Chatbot for HR & Operations",
    subtitle: "Enterprise Assistant",
    description:
      "AI-powered chatbot for HR and operational workflows using agent-based intent classification and LLMs for contextual responses.",
    tags: ["Agents", "Intent Classification", "LLMs"],
  },
  {
    title: "Llama 3.1 8B Fine-tuning",
    subtitle: "Parameter-Efficient LLM Tuning",
    description:
      "Fine-tuned Llama 3.1 8B on GPU with LoRA and 4-bit QLoRA, adapting an open-weight model to domain tasks at a fraction of the memory and cost of full fine-tuning.",
    tags: ["Llama 3.1 8B", "LoRA", "QLoRA", "GPU", "PEFT"],
  },
];

export const education = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    detail: "Minor in Electronics and Communication Engineering · First Class with Distinction · CGPA 8.46",
    institution: "APJ Abdul Kalam Technological University",
    period: "Jul 2019 – Aug 2023",
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
    href: "https://credentials.databricks.com/dff7e7c7-e3bf-4ecb-beb1-90edfbbc1ca4#acc.CWKOlYMG",
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
