import {
  Code2,
  Cpu,
  Brain,
  Server,
  Bot,
  Factory,
  CircuitBoard,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Mmahulo Bernard Molaba",
  initials: "MM",
  role: "Computer Systems Engineering Candidate",
  email: "mmahulo.molaba@gmail.com",
  location: "Gauteng, South Africa",
  github: "https://github.com/mmahulo-molaba",
  linkedin: "https://www.linkedin.com/in/mmahulo-molaba",
  tagline: "Computer Systems Engineering | Full-Stack & Embedded Systems",
};

export type SkillCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
  accent: "cyan" | "emerald" | "indigo" | "amber";
  skills: { name: string; level: number; meta?: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "fullstack",
    label: "Full-Stack & Web",
    icon: Code2,
    description:
      "Modern web engineering across the full stack — from typed React interfaces to relational data layers.",
    accent: "cyan",
    skills: [
      { name: "Next.js", level: 90, meta: "App Router, SSR, RSC" },
      { name: "React", level: 92, meta: "Hooks, Context, Suspense" },
      { name: "TypeScript", level: 88, meta: "Strict, generics, types" },
      { name: "Java", level: 80, meta: "OOP, Spring basics" },
      { name: "C++", level: 78, meta: "STL, memory model" },
      { name: "Python", level: 85, meta: "Scripting, ML, Flask" },
      { name: "SQL", level: 86, meta: "Postgres, MySQL, joins" },
      { name: "REST APIs", level: 90, meta: "Design, auth, caching" },
      { name: "Git & GitHub", level: 92, meta: "Flows, CI, review" },
    ],
  },
  {
    id: "robotics",
    label: "Robotics & Industrial Automation",
    icon: Bot,
    description:
      "Autonomous systems, sensor integration, and industrial control — from ROS2 nodes to PLC scan cycles.",
    accent: "emerald",
    skills: [
      { name: "ROS2 (Jellyfish)", level: 82, meta: "Nodes, topics, services" },
      { name: "Siemens PLC (S7)", level: 80, meta: "LAD, FBD, SCL" },
      { name: "TIA Portal", level: 78, meta: "HMI, project design" },
      { name: "Allen Bradley", level: 70, meta: "RSLogix, ladder logic" },
      { name: "Sensor Integration", level: 85, meta: "LIDAR, ultrasonic, IMU" },
      { name: "Path Planning", level: 75, meta: "A*, RRT, cost maps" },
    ],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: Brain,
    description:
      "Designing learning agents — from classical supervised pipelines to reinforcement learning in simulated worlds.",
    accent: "indigo",
    skills: [
      { name: "Supervised Learning", level: 82, meta: "Regression, trees, SVM" },
      { name: "Unsupervised Learning", level: 78, meta: "Clustering, PCA" },
      { name: "Reinforcement Learning", level: 76, meta: "Q-learning, PPO" },
      { name: "Unity ML-Agents", level: 80, meta: "Curricula, rewards" },
      { name: "Model Evaluation", level: 78, meta: "Metrics, validation" },
    ],
  },
  {
    id: "systems",
    label: "Systems & Hardware",
    icon: CircuitBoard,
    description:
      "Low-level fluency — secure data transfer on Linux, embedded programming, and hardware bring-up.",
    accent: "amber",
    skills: [
      { name: "Linux", level: 86, meta: "Shell, services, hardening" },
      { name: "SSH", level: 90, meta: "Tunnels, keys, automation" },
      { name: "Arduino", level: 88, meta: "C/C++, peripherals" },
      { name: "Embedded Systems", level: 84, meta: "RTOS, interrupts, drivers" },
      { name: "Secure Data Transfer", level: 80, meta: "scp, rsync, encryption" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  short: string;
  description: string;
  tags: string[];
  category: "robotics" | "automation" | "ai" | "web";
  icon: LucideIcon;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "radiography-anomaly-detection",
    title: "Radiography Anomaly Detection",
    short: "Friendly AI-assisted X-ray screening interface with visual anomaly overlays.",
    description:
      "Built an end-to-end radiography screening prototype that combines a Next.js and Tailwind user interface with a FastAPI inference API. Users can upload PNG, JPEG, or DICOM scans, review triage-style confidence results, and inspect a heatmap overlay. The deployed Render demo uses a lightweight fallback to remain stable on constrained infrastructure.",
    tags: ["AI", "Next.js", "FastAPI", "Medical Imaging"],
    category: "ai",
    icon: Brain,
    highlights: [
      "Created a responsive upload workflow with local image preview and clear result states",
      "Implemented typed FastAPI endpoints for health checks, scan uploads, and analysis responses",
      "Added a Render-safe demo mode with lightweight heatmap generation and deployment documentation",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PyTorch", "OpenCV", "Grad-CAM", "Render", "Vercel"],
    githubUrl: "https://github.com/Bmmahulo/radiography_anomaly_detection",
    liveUrl: "https://frontend-bernard16.vercel.app/",
  },
  {
    id: "finance-agent-project",
    title: "Finance-Agent-Project",
    short: "AI-powered finance assistant for budgeting, insights, and data-driven decisions.",
    description:
      "Developed a finance-oriented AI project focused on expense analysis, automated budgeting support, and real-time financial insights. The system combines a modern web interface with intelligent processing to help users interpret financial data, identify spending patterns, and make informed decisions from conversational prompts and structured information.",
    tags: ["AI", "Finance", "Next.js", "Python", "LLM"],
    category: "ai",
    icon: Brain,
    highlights: [
      "Built an AI-driven workflow to analyse financial data and summarise spending trends",
      "Created a user-facing dashboard for budgeting guidance and business decision support",
      "Integrated intelligent recommendations to convert raw financial information into actionable insights",
    ],
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "LLM", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/mmahulo-molaba/Finance-Agent-Project",
  },
  {
    id: "acams-system",
    title: "Access Control & Asset Management System (ACAMS)",
    short: "Biometrics integration & real-time hardware asset tracking system.",
    description:
      "Engineered an integrated Access Control and Asset Management System combining dual ATmega328P microcontrollers and an ESP32-CAM module via UART with a Next.js full-stack web application. Provides secure biometric access logging, hardware inventory tracking, and real-time administrative oversight for TUT 4IR lab environments.",
    tags: ["Next.js", "TypeScript", "Embedded C++", "ESP32", "Supabase", "Tailwind CSS"],
    category: "web",
    icon: ShieldCheck,
    highlights: [
      "Architected reliable UART serial communication protocol between dual ATmega328P base and ESP32-CAM",
      "Designed and deployed a responsive Next.js web application using Supabase for user access roles and real-time logs",
      "Integrated hardware biometrics and asset tracking into a unified administrative dashboard",
    ],
    stack: ["Next.js", "TypeScript", "C++", "ESP32", "ATmega328P", "Supabase", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: "ros2-wall-avoidance",
    title: "ROS2 Wall Avoidance Robot",
    short: "Autonomous mobile robot with sensor-driven path planning.",
    description:
      "Designed and built an autonomous robotic navigation system using ROS2 (Jellyfish). The robot fuses ultrasonic and LIDAR data to perform real-time obstacle detection, wall following, and dynamic path replanning in unknown environments.",
    tags: ["ROS2", "C++", "Sensor Fusion", "Autonomous Navigation"],
    category: "robotics",
    icon: Bot,
    highlights: [
      "Implemented publisher/subscriber nodes for real-time sensor ingestion",
      "Built a reactive costmap enabling safe wall-following behaviour",
      "Validated end-to-end navigation in a Gazebo simulation environment",
    ],
    stack: ["ROS2", "C++", "Python", "Gazebo", "RViz"],
  },
  {
    id: "plc-conveyor-sorting",
    title: "PLC Conveyor Sorting System",
    short: "Industrial material separation driven by PLC logic.",
    description:
      "Engineered an automated industrial sorting system using Siemens S7 PLCs and TIA Portal. The system classifies parts by sensor input and routes them across a multi-lane conveyor using deterministic ladder logic and an HMI control surface.",
    tags: ["Siemens S7", "TIA Portal", "Industrial Automation"],
    category: "automation",
    icon: Factory,
    highlights: [
      "Programmed Ladder and SCL logic for high-throughput sorting",
      "Designed an HMI for live diagnostics and operator control",
      "Tuned sensor pipelines for reliable part classification under noise",
    ],
    stack: ["Siemens S7", "TIA Portal", "LAD/FBD/SCL", "WinCC HMI"],
  },
  {
    id: "unity-ml-agent",
    title: "Unity ML-Agent Reinforcement Learning",
    short: "Decision-making agent trained in a simulated 3D environment.",
    description:
      "Trained an autonomous agent in Unity ML-Agents to interact with objects and solve multi-step tasks using reinforcement learning. Curated the reward function, observation space, and training schedule to converge on a stable policy.",
    tags: ["Unity", "C#", "Reinforcement Learning", "AI"],
    category: "ai",
    icon: Brain,
    highlights: [
      "Designed reward shaping and curricula to accelerate convergence",
      "Tuned hyperparameters across PPO and SAC for policy stability",
      "An episode-level evaluation pipeline for reproducible benchmarking",
    ],
    stack: ["Unity", "ML-Agents Toolkit", "C#", "Python", "PyTorch"],
  },
  {
    id: "fullstack-sql-app",
    title: "Full-Stack Web App & SQL Database System",
    short: "Relational schema, REST API, and a modern web frontend.",
    description:
      "Designed a robust relational database schema and built a full-stack web application on top of it. The system exposes a typed REST API consumed by a Next.js frontend, with proper normalisation, indexing, and query optimisation.",
    tags: ["Next.js", "PostgreSQL", "Full-Stack", "REST API"],
    category: "web",
    icon: Server,
    highlights: [
      "Modelled entities in 3NF with referential integrity and indexes",
      "Built a Next.js App Router UI with server components and caching",
      "Wired a REST API with validation, error handling, and auth",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "REST"],
  },
];

export const education = {
  degree: "Diploma in Computer Systems Engineering",
  institution: "Tshwane University of Technology (TUT)",
  status: "Final Year — In Progress",
  period: "2023 — Present",
  location: "Gauteng, South Africa",
  focus: [
    {
      title: "Operating Systems & Linux",
      description:
        "Shell automation, secure data transfer over SSH, system services, and process management.",
      icon: ShieldCheck,
    },
    {
      title: "Industrial Automation",
      description:
        "PLC programming (Siemens, Allen Bradley), ladder logic, HMI design, and sensor pipelines.",
      icon: Factory,
    },
    {
      title: "Machine Learning",
      description:
        "Supervised, unsupervised, and reinforcement learning with practical model evaluation.",
      icon: Brain,
    },
    {
      title: "Systems Architecture",
      description:
        "Computer architecture, embedded systems, and hardware/software integration patterns.",
      icon: Cpu,
    },
  ],
};

export const socialLinks = [
  { label: "GitHub", href: siteConfig.github, icon: "github" as const },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" as const },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]