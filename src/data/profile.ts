// All website content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Muhammed Afsal P M",
  shortName: "Afsal",
  initials: "MA",
  role: "AI Engineer · Data Scientist",
  currentTitle: "Associate Software Engineer (AI)",
  location: "Kochi, Kerala, India",
  tagline:
    "I build agentic AI systems, multimodal conversational platforms and production LLM pipelines — from RAG and multi-agent orchestration to scalable FastAPI microservices on AWS and Azure.",
  summary: [
    "Results-driven AI Engineer with 2+ years of experience specializing in agentic AI systems, multimodal conversational platforms, and production LLM pipelines across BFSI, healthcare, and enterprise automation.",
    "I design and deploy scalable AI solutions using Retrieval-Augmented Generation (RAG), multi-agent orchestration, FastAPI microservices, vector databases, and cloud-native deployments on AWS and Azure — including real-time voice and chat AI systems.",
    "I also build end-to-end machine learning systems covering model training, fine-tuning, deployment, and monitoring, with a strong focus on performance, scalability, and reliability.",
  ],
  email: "muhammedafsalpmtech@gmail.com",
  phone: "+91 98460 93491",
  resume: "/Muhammed_Afsal_P_M_Resume.pdf",
  extra: "Valid Indian Passport",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/muhammedafsalpm", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammedafsalpm", icon: "linkedin" },
  { label: "Hugging Face", href: "https://huggingface.co/muhammed-afsal-p-m", icon: "huggingface" },
  { label: "Kaggle", href: "https://www.kaggle.com/muhammedafsalpm", icon: "kaggle" },
] as const;

export const stats = [
  { value: "2+", label: "Years in AI" },
  { value: "4", label: "Companies & startups" },
  { value: "8+", label: "Production AI projects" },
  { value: "6", label: "Certifications" },
];

export const skills = [
  {
    group: "AI & Machine Learning",
    items: [
      "LLMs",
      "Generative AI",
      "RAG",
      "LLM Fine-tuning",
      "Hugging Face Transformers",
      "Embeddings",
      "Machine Learning",
      "Model Deployment",
      "Prompt Engineering",
    ],
  },
  {
    group: "Agents & Frameworks",
    items: ["CrewAI", "Multi-agent Systems", "LiveKit", "Twilio", "TensorFlow", "scikit-learn", "Streamlit", "YOLO", "DeepSORT"],
  },
  {
    group: "Programming & Databases",
    items: ["Python", "SQL", "FastAPI", "MongoDB", "MySQL", "Redis", "SQLite", "ChromaDB", "FAISS", "Qdrant"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (S3)", "Azure", "Docker", "Kubernetes", "RabbitMQ", "Celery", "CI/CD", "Git", "SonarQube"],
  },
  {
    group: "Engineering & Analytics",
    items: [
      "Microservices Architecture",
      "REST API Design",
      "Async Programming",
      "Data Engineering",
      "Data Visualization",
      "Power BI",
      "Tableau",
    ],
  },
];

export type Experience = {
  company: string;
  companyUrl?: string;
  note?: string;
  role: string;
  location?: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Techvantage Systems Pvt. Ltd",
    companyUrl: "https://techvantage.ai",
    role: "Associate Software Engineer (AI)",
    period: "Dec 2024 – Apr 2026",
    points: [
      "Designed and deployed multi-agent AI systems using CrewAI and LLMs (GPT-4, Groq, Llama), including LLM fine-tuning, to automate verification, risk assessment and decision-making in banking, insurance and audit domains.",
      "Engineered end-to-end ML pipelines following the FTI architecture with scikit-learn and MongoDB, automating feature extraction, model training and inference with integrated monitoring.",
      "Built enterprise AI platforms for recruitment, contract intelligence and HR policy, leveraging adaptive testing and LLM question generation for real-time analytics and compliance.",
      "Developed computer vision and data retrieval systems using YOLO, DeepSORT and ChromaDB for automated document analysis, object tracking and contextual report generation.",
      "Delivered production-grade solutions integrating FastAPI, AWS and SQL/NoSQL databases — secure OTP authentication, multi-language RAG, fraud detection and automated reporting.",
    ],
    tags: ["CrewAI", "GPT-4", "Groq", "Llama", "FastAPI", "AWS", "YOLO", "ChromaDB"],
  },
  {
    company: "Zentis AI",
    note: "Startup incubated within Techvantage",
    role: "Core Team Member – Associate Software Engineer (AI)",
    period: "May 2025 – Oct 2025",
    points: [
      "Architected a modular microservices-based AI platform from inception using autonomous agents, enabling workflow automation, document intelligence and decision support across BFSI, healthcare and manufacturing.",
      "Implemented AI orchestration pipelines using LLMs (Azure OpenAI, Groq), RAG, vector search and CrewAI multi-agent frameworks for contextual reasoning and knowledge-driven automation.",
      "Built scalable backend services with FastAPI, MongoDB and RabbitMQ; containerized with Docker and deployed on Kubernetes across Azure and AWS with secure APIs and fault tolerance.",
      "Established production DevOps practices — CI/CD, automated testing, SonarQube quality gates, monitoring and compliance controls — improving reliability and reducing manual audit effort.",
    ],
    tags: ["Azure OpenAI", "CrewAI", "RabbitMQ", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    company: "Go-Do",
    note: "Startup incubated within Techvantage",
    role: "Core Team Member – Associate Software Engineer (AI)",
    period: "Dec 2025 – Feb 2026",
    points: [
      "Developed a multilingual agentic AI concierge accessible via WhatsApp and voice, letting users complete real-world tasks through natural language across multiple Indian languages.",
      "Architected end-to-end conversational pipelines using FastAPI, LiveKit, Twilio WhatsApp API, Redis, MongoDB and FAISS-based RAG for real-time task orchestration, session persistence and knowledge retrieval.",
      "Implemented multimodal workflows integrating STT, TTS and LLM reasoning (Gemini, OpenAI, Sarvam) — scalable voice-and-text agents with tool-calling, analytics logging and production deployment.",
    ],
    tags: ["LiveKit", "Twilio", "Redis", "FAISS", "Gemini", "Sarvam", "STT/TTS"],
  },
  {
    company: "Bharat Petroleum Corporation Limited",
    note: "Kochi Refinery",
    role: "AI Engineer (Apprenticeship)",
    period: "Dec 2023 – Dec 2024",
    points: [
      "Extracted, validated and managed data from multiple sources using SQL/MySQL for petroleum operations, using agent-based AI for automated data validation and anomaly detection.",
      "Conducted advanced data analysis with SQL, stochastic methods and statistical modeling to optimize extraction, refining and distribution processes.",
      "Developed an AI chatbot integrated with a Retrieval-Augmented Generation (RAG) pipeline for context-aware responses.",
      "Designed AI-driven data auditing and report generation systems using agent-based architectures and RAG to automate validation, summarization and compliance reporting.",
      "Built interactive dashboards with Power BI, Tableau and Excel, integrating AI-generated insights and predictive analytics.",
    ],
    tags: ["SQL", "RAG", "Agents", "Power BI", "Tableau", "Statistics"],
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
    title: "Zentis.ai",
    subtitle: "Agentic AI Platform",
    description:
      "Enterprise-grade AI orchestration platform leveraging autonomous agents and scalable microservices to automate complex workflows across BFSI, healthcare and compliance domains.",
    tags: ["CrewAI", "Azure OpenAI", "RAG", "Microservices", "Kubernetes"],
    featured: true,
  },
  {
    title: "Go-Do",
    subtitle: "Multilingual Agentic AI Concierge",
    description:
      "Production-ready conversational AI platform using multimodal agents, RAG and tool-driven workflows for voice and WhatsApp-based task automation, multilingual interactions and real-time service execution.",
    tags: ["LiveKit", "Twilio", "FAISS", "STT/TTS", "Gemini"],
    featured: true,
  },
  {
    title: "Publisher Website Classifier",
    subtitle: "LLM-Powered Publisher Vetting System",
    description:
      "LLM-powered publisher vetting microservice with RAG (ChromaDB + sentence-transformers), a dual-provider architecture (OpenAI/Ollama) and tiered web scraping to automate affiliate quality assessment.",
    tags: ["FastAPI", "ChromaDB", "OpenAI", "Ollama", "Scraping"],
    github: "https://github.com/muhammedafsalpm/Intelligent-Publisher-Website-Classifier",
    featured: true,
  },
  {
    title: "Contract Management Tool",
    subtitle: "AI Contract Intelligence",
    description:
      "AI-powered contract analysis system with automated compliance checks, risk assessment, clause detection and an intelligent contract Q&A chatbot with multi-format document support.",
    tags: ["FastAPI", "Groq", "ChromaDB", "MongoDB"],
  },
  {
    title: "AI Agents for Banking Loan Processing",
    subtitle: "BFSI Automation",
    description:
      "AI agents that automate loan verification, eligibility checks and decision-making workflows for banking operations.",
    tags: ["CrewAI", "LLMs", "Multi-agent"],
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
      "AI-powered chatbot for HR and operational workflows using autonomous agent-based intent classification and LLMs for contextual responses.",
    tags: ["Agents", "Intent Classification", "RAG"],
  },
  {
    title: "Prediction Models",
    subtitle: "Classical Machine Learning",
    description:
      "ML models for cancer prediction, telecom churn prediction (AdaBoost, Gradient Boosting, Logistic Regression, Decision Tree) and price prediction using regression algorithms.",
    tags: ["scikit-learn", "Ensembles", "Regression"],
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
