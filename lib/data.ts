export const profile = {
  name: "Pratham Bhatia",
  title: "AI Application Engineer",
  tagline:
    "Building AI-powered enterprise software, SaaS products, and intelligent business automation.",
  bio: "I am an AI Application Engineer focused on building products, not just code. My work combines modern web technologies with Generative AI to solve real business problems — from intelligent resume screening systems to enterprise workflow automation used in live retail operations. I care about shipping: clean architecture, measurable impact, and products that hold up in production.",
  email: "prathambhatia2512@gmail.com",
  github: "https://github.com/Pratham-2512",
  githubUsername: "Pratham-2512",
  linkedin: "https://www.linkedin.com/in/pratham-bhatia-2512pb/",
  location: "Gurugram, India",
};

export const heroStats = [
  { value: "14+", label: "Applications Built" },
  { value: "4", label: "Production Modules" },
  { value: "6+", label: "Months Industry Experience" },
  { value: "10+", label: "Production Tech Stack" },
];

export const valueProps = [
  {
    title: "Production AI",
    description:
      "Not notebook demos — LLM features integrated into real products: resume screening, approval workflows, and prompt-driven analytics used by actual business teams.",
  },
  {
    title: "Enterprise Mindset",
    description:
      "Working inside a listed retail company taught me what production means: regression testing, data integrity, reliability, and workflows that hundreds of employees depend on.",
  },
  {
    title: "Full Ownership",
    description:
      "I take features from requirement conversations with business teams to deployed, monitored software — frontend, backend, database, and the AI layer in between.",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "AI",
    items: ["OpenAI", "Claude", "Gemini", "Prompt Engineering", "AI APIs"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Data & Analytics",
    items: ["Power BI", "Excel", "Pandas", "NumPy"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel"],
  },
];

export const currentFocus = [
  "AI-powered Enterprise Applications",
  "SaaS Product Development",
  "Intelligent Workflow Automation",
  "LLM Integration",
  "Full-Stack Engineering",
];

export const engineeringPrinciples = [
  "Build for production, not demos.",
  "Automate repetitive business workflows.",
  "Keep architecture scalable and maintainable.",
  "Measure impact through business outcomes.",
  "Write software that users can rely on.",
];

export const enterpriseSolutions = [
  {
    name: "BD / NSO Automation",
    status: "Enterprise Project | Confidential",
    current: false,
    problem:
      "Business Development and NSO teams tracked store openings, approvals, and reporting across scattered sheets and email chains.",
    description:
      "Built automation solutions for Business Development and NSO operations, including workflow management, routing systems, approval processes, KPI dashboards, operational reporting, Master Trackers, and business analytics used by internal teams.",
    highlights: [
      "Workflow Automation",
      "KPI Dashboards",
      "Routing Management",
      "Business Reporting",
      "Operational Analytics",
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    name: "SCM Automation",
    status: "Enterprise Project | Confidential",
    current: false,
    problem:
      "Purchase order workflows and vendor coordination ran on manual follow-ups with no unified visibility.",
    description:
      "Developed Supply Chain Management automation modules focused on purchase order workflows, approvals, vendor coordination, dashboards, operational reporting, and business process automation.",
    highlights: [
      "Supply Chain Workflows",
      "PO Management",
      "Approval Automation",
      "Reporting",
      "Analytics",
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    name: "Marketing Automation",
    status: "Enterprise Project | Confidential",
    current: false,
    problem:
      "Campaign, branding, and BTL activity had no single operational view — tracking lived in disconnected trackers.",
    description:
      "Designed and enhanced marketing operations platforms covering NSO Branding, BTL Tracker, Master Tracker, Gap Reports, campaign tracking, dashboards, and enterprise reporting.",
    highlights: [
      "Marketing Operations",
      "BTL Tracker",
      "NSO Branding",
      "Dashboard Analytics",
      "Workflow Automation",
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    name: "SRM Automation",
    status: "Enterprise Project | Currently Working",
    current: true,
    problem:
      "Vendor lifecycle management and approvals need a unified, AI-assisted system instead of fragmented manual processes.",
    description:
      "Building Supplier Relationship Management modules focused on vendor lifecycle management, approval workflows, enterprise dashboards, reporting, operational automation, and AI-assisted business processes.",
    highlights: [
      "Vendor Management",
      "Approval Workflows",
      "Enterprise Dashboards",
      "Business Reporting",
      "AI-enabled Automation",
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
  },
];

export const enterpriseStack = [
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "SQL",
  "AI/LLMs",
  "REST APIs",
];

export const confidentialityNote =
  "Due to confidentiality agreements, the source code and production screenshots for enterprise projects cannot be shared publicly. Detailed architecture, implementation approach, and technical decisions can be discussed during interviews.";

export const featuredProjects = [
  {
    name: "AI Resume Tracker",
    role: "Case Study — AI Product",
    problem:
      "Recruiters manually screen hundreds of resumes per role — slow, inconsistent, and biased toward exact keyword matches.",
    solution:
      "A screening system that parses, ranks, and matches candidate resumes against job descriptions using AI-powered matching.",
    architecture: "Next.js → API Routes → OpenAI → Supabase (PostgreSQL)",
    challenges: ["Prompt consistency", "Structured outputs", "Performance"],
    impact: [
      "Cuts manual screening from minutes per resume to seconds",
      "AI matching instead of brittle keyword filters",
      "Recruiter-facing dashboard with ranked candidate pipeline",
    ],
    tags: ["Next.js", "OpenAI", "Supabase", "LLM", "AI Matching"],
    github: "https://github.com/Pratham-2512/AI_RESUME_TRACKER",
    githubSecondary: null,
    note: null,
    highlight: true,
  },
  {
    name: "Yaatra Mobility",
    role: "Case Study — Full-Stack Product",
    problem:
      "Local mobility booking is fragmented — users juggle calls and separate apps with no unified booking and tracking flow.",
    solution:
      "A full-stack mobility platform with authentication, live maps, and an end-to-end ride booking experience across devices.",
    architecture: "React + TypeScript → REST APIs → Database · Maps Integration",
    challenges: ["Real-time map state", "Booking flow edge cases", "Responsive UX"],
    impact: [
      "End-to-end booking flow: auth → search → book → track",
      "Live map integration with responsive mobile-first UI",
    ],
    tags: ["Authentication", "Maps", "Booking", "Database", "Responsive UI"],
    github: "https://github.com/Pratham-2512/yaatra-frontend",
    githubSecondary: "https://github.com/Pratham-2512/yaatra-mobility",
    note: null,
    highlight: false,
  },
];

export const otherProjects = [
  {
    name: "Stock Market Analysis Dashboard",
    description: "Interactive dashboard analyzing stock market trends and patterns.",
    repo: "Stock-Market-Analysis-Dashboard",
  },
  {
    name: "Sentiment Analysis",
    description: "NLP-based sentiment classification on text data.",
    repo: "Sentiment_Analysis",
  },
  {
    name: "Zepto SQL Analysis",
    description: "Business insights extracted from a retail dataset using advanced SQL.",
    repo: "Zepto-Analysis-By-SQL",
  },
  {
    name: "Airline Dataset Analysis",
    description: "Exploratory data analysis on airline industry data.",
    repo: "Analysis_On_Airline_Dataset",
  },
  {
    name: "Devlane Training",
    description: "Hands-on projects and exercises from full-stack developer training.",
    repo: "Devlane-Training-Git",
  },
  {
    name: "Food Truck",
    description: "A responsive restaurant/food-truck landing page.",
    repo: "food-truck",
  },
];

export const experience = [
  {
    role: "AI Application Engineer",
    roleKeywords: "Enterprise Software • Full-Stack Development • AI Integration",
    company: "V2 Retail Ltd.",
    companyNote: "NSE-listed retail company, 100+ stores",
    duration: "22 Dec 2025 — Present",
    points: [
      "Built AI-enabled enterprise applications for retail operations and workflow automation.",
      "Developed intelligent dashboards with KPI reporting, advanced analytics, and dynamic filtering.",
      "Designed AI-assisted approval workflows and business process automation solutions.",
      "Integrated LLM-powered features and AI tools to improve productivity and operational efficiency.",
      "Built full-stack applications using React, TypeScript, Supabase, PostgreSQL, and SQL.",
      "Optimized reporting, data synchronization, exports, and enterprise workflows.",
      "Diagnosed production issues, performed regression testing, and enhanced application reliability.",
      "Collaborated with business teams to translate operational requirements into scalable AI-powered software solutions.",
    ],
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "SQL",
      "Git",
      "AI/LLMs",
      "Prompt Engineering",
      "REST APIs",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institute: "GRD Institute of Management and Technology (GRD IMT), Dehradun",
  duration: "2023 – 2026",
};

export const timeline = [
  { year: "2024", label: "Started Programming Journey" },
  { year: "2025", label: "Built Full-Stack Web Applications" },
  { year: "2025", label: "Shipped AI-Powered Applications" },
  { year: "Dec 2025", label: "Joined V2 Retail as AI Application Engineer" },
  { year: "2026", label: "Enterprise Automation & Production AI Systems" },
];

export const githubLanguages = [
  { name: "TypeScript", percent: 30 },
  { name: "Python", percent: 20 },
  { name: "Jupyter Notebook", percent: 20 },
  { name: "JavaScript", percent: 10 },
  { name: "C#", percent: 10 },
  { name: "CSS", percent: 10 },
];

export const achievements = [
  "Shipped a production AI application (AI Resume Tracker)",
  "Delivered enterprise dashboards & workflow automation at a listed company",
  "Built 14+ AI, enterprise, and full-stack applications",
  "Integrated LLMs (OpenAI, Claude, Gemini) with prompt engineering",
  "Built full-stack systems with React, Next.js & Supabase",
  "Performed SQL & data analytics on real-world business datasets",
  "Designed and consumed production REST APIs",
  "Diagnosed and fixed production issues under real business pressure",
];
