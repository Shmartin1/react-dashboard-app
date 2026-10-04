export const metaHighlights = [
  "Implement and maintain 3 subscription benefits across Instagram, Facebook, and Messenger with 15M+ DAU.",
  "Generate $5M+ ARR via acquisition of new subscribers.",
  "Develop and hill-climb skills for Muse and Meta AI; build supporting tools and harnesses."
];

// Existing portfolio content, shared by the redesigned views.
export const experiences = [
  {
    "company": "Meta",
    "employmentType": "Full-time",
    "role": "SDE (Full Stack)",
    "dates": "2025 — Present",
    "bullets": [
      ...metaHighlights,
      "Lead efforts to modernize the AI workflows used to accelerate the software lifecycle."
    ],
    "technologies": [
      "Hack",
      "Kotlin",
      "Python",
      "React",
      "GraphQL"
    ]
  },
  {
    "company": "Expedia Group",
    "employmentType": "Full-time",
    "role": "SDE (Full Stack)",
    "dates": "2022 — 2025",
    "bullets": [
      "Designed and implemented a dynamic messaging rules engine, achieving an initial cost savings of $11.1M.",
      "Designed and implemented a scalable microservices architecture for a high-traffic application, reducing downtime by 10% and improving response time by 30%.",
      "Mentored 2 junior developers, resulting in a 30% reduction in onboarding time and higher code quality standards."
    ],
    "technologies": [
      "Java",
      "Kotlin",
      "TypeScript",
      "React",
      "GraphQL"
    ]
  },
  {
    "company": "Infovisa Inc.",
    "employmentType": "Full-time",
    "role": "SDE (Full Stack)",
    "dates": "2020 — 2022",
    "bullets": [
      "Led the development and maintenance of 20+ financial technology applications with a focus on tax accounting and trust investment management.",
      "Achieved notable performance improvements, including a 40% reduction in average build times and 64% faster load times for web applications."
    ],
    "technologies": [
      "C# .NET",
      "TypeScript",
      "Azure",
      "PostgreSQL"
    ]
  },
  {
    "company": "Madonna Rehabilitation Hospital",
    "employmentType": "Internship",
    "role": "SDE (Full Stack, Embedded)",
    "dates": "2018 — 2020",
    "bullets": [
      "Conceptualized and developed the Simple Measurement of Activity in Real Time (SMART) system.",
      "Led as the integration engineer facilitating collaboration between software and hardware teams."
    ],
    "technologies": [
      "JavaScript",
      "React",
      "SQL",
      "C",
      "Python"
    ]
  },
  {
    "company": "Sandhills Global",
    "employmentType": "Internship",
    "role": "SDE (Backend)",
    "dates": "2017 — 2018",
    "bullets": [
      "Developed web applications for trading and auctions, improving user experience and system efficiency.",
      "Led the design and optimization of APIs to enhance functionality, performance, and maintainability."
    ],
    "technologies": [
      "C# .NET",
      "VB.NET",
      "MySQL",
      "Python"
    ]
  }
];

export type ProjectArtworkKind = 'chromesthesia' | 'portfolio' | 'frontend' | 'roast';

type Project = {
  id: string;
  title: string;
  category: string;
  artwork: ProjectArtworkKind;
  description: string;
  technologies: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "chromesthesia",
    title: "Chromesthesia",
    category: "Audio & creative coding / Early MVP",
    artwork: "chromesthesia",
    description: "A real-time audio visualizer that turns sound into a personal 3D world of color, shape, and motion. Built with local audio processing, customizable perception profiles, and an inspector that explains how sound features become visual forms.",
    technologies: ["React", "TypeScript", "React Three Fiber", "Web Audio API"],
    githubUrl: "https://github.com/Shmartin1/chromesthesia"
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    category: "Open-source portfolio",
    artwork: "portfolio",
    description: "The open-source code for the website you're viewing. A responsive React and TypeScript portfolio bringing together my work, research, and experience, with interactive research demos, accessible motion controls, and custom animated visuals.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    githubUrl: "https://github.com/Shmartin1/react-dashboard-app"
  },
  {
    id: "frontend-practice",
    title: "Frontend Interview Practice",
    category: "Frontend craft",
    artwork: "frontend",
    description: "A comprehensive collection of practice interview questions focused on frontend UI implementation using vanilla JavaScript, HTML, and CSS. This project serves as both a learning resource and a practical demonstration of fundamental web development concepts without relying on modern frameworks.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Shmartin1/frontend-practice"
  },
  {
    id: "ai-roast",
    title: "AI Roast App",
    category: "AI & mobile",
    artwork: "roast",
    description: "A unique mobile application that combines image processing with AI to generate humorous roasts based on user-uploaded photos. This project demonstrates integration of AI services with mobile development technologies for an entertaining user experience.",
    technologies: ["React Native", "AWS S3", "AWS Rekognition", "ChatGPT", "TypeScript"],
    githubUrl: "https://github.com/Shmartin1/ai-roast-app"
  }
];
