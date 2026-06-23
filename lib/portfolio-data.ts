export const TECH_BADGES = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Supabase",
  "Python",
  "Data Science",
  "n8n",
] as const;

export const EXPERTISE = [
  {
    title: "Web Development",
    description:
      "Production web apps with great performance, accessibility, and DX.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "REST APIs",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps that feel native on iOS and Android.",
    items: ["React Native", "Expo", "Mobile UI Design", "Cross-platform Apps"],
  },
  {
    title: "Data Science & Analytics",
    description: "Turn raw data into dashboards, insights, and decisions.",
    items: [
      "Python",
      "Data Analysis",
      "Data Visualization",
      "Dashboards",
      "Business Intelligence",
    ],
  },
  {
    title: "Automation & Integrations",
    description:
      "Connect systems and remove manual work with reliable workflows.",
    items: [
      "n8n",
      "Workflow Automation",
      "API Integrations",
      "Business Process Automation",
    ],
  },
] as const;

export const PROJECTS = [
  {
    slug: "property-booking-platform",
    title: "Property Booking Platform",
    category: "Web",
    overview:
      "A modern property management and booking platform with payments, scheduling, and customer management.",
    problem:
      "Property managers were juggling spreadsheets, manual invoicing, and missed bookings.",
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind"],
    outcomes: [
      "3× faster booking flow",
      "Automated payments & reminders",
      "Single source of truth for properties",
    ],
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    category: "Business",
    overview:
      "A comprehensive system for managing students, records, communication, and academic operations.",
    problem:
      "Schools relied on paper records and disconnected tools across admin, teachers, and parents.",
    tech: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    outcomes: [
      "Centralized student records",
      "Real-time parent communication",
      "Reduced admin overhead by ~60%",
    ],
  },
  {
    slug: "business-operations-platform",
    title: "Business Operations Platform",
    category: "Business",
    overview:
      "An all-in-one platform for managing clients, projects, teams, inventory, invoicing, and scheduling.",
    problem:
      "Operations teams used 6+ tools to run the day; nothing talked to each other.",
    tech: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    outcomes: [
      "One unified workspace",
      "Cleaner financial reporting",
      "Faster project delivery",
    ],
  },
  {
    slug: "garment-factory-payroll-automation",
    title: "Garment Factory Payroll Automation",
    category: "Automation",
    overview:
      "A workflow system that automates piece-rate payroll calculations and reporting.",
    problem:
      "Payroll was calculated by hand from production sheets — slow and error-prone.",
    tech: ["n8n", "Python", "Google Sheets API", "PostgreSQL"],
    outcomes: [
      "Weekly payroll in minutes",
      "Audit-ready reports",
      "Zero calculation errors since launch",
    ],
  },
  {
    slug: "data-analytics-dashboard",
    title: "Data Analytics Dashboard",
    category: "Data",
    overview:
      "A business intelligence dashboard providing insights through visualization and reporting.",
    problem:
      "Leadership couldn't see real-time performance across sales, ops, and finance.",
    tech: ["Python", "Pandas", "Plotly", "Next.js"],
    outcomes: [
      "Live KPI visibility",
      "Faster monthly close",
      "Data-driven planning meetings",
    ],
  },
] as const;

export const SKILLS = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  { group: "Backend", items: ["Node.js", "Supabase", "PostgreSQL"] },
  { group: "Mobile", items: ["React Native", "Expo"] },
  { group: "Data", items: ["Python", "Pandas", "Data Visualization"] },
  { group: "Automation", items: ["n8n", "APIs", "AI Integrations"] },
] as const;

export const TIMELINE = [
  {
    year: "2020",
    title: "Software Development",
    body: "Started building web applications and learning production engineering.",
  },
  {
    year: "2021",
    title: "IT Support",
    body: "Worked closely with end-users — learned how software actually meets the business.",
  },
  {
    year: "2022",
    title: "Business Systems Development",
    body: "Designed internal systems for schools and property operations.",
  },
  {
    year: "2023",
    title: "Automation Projects",
    body: "Built n8n and API automations that removed weeks of manual work.",
  },
  {
    year: "2024",
    title: "Data Analytics Work",
    body: "Delivered dashboards and BI tooling that drive decisions with data.",
  },
] as const;

export const PRINCIPLES = [
  "Simplicity scales.",
  "Good software should reduce friction.",
  "Data should guide decisions.",
  "Automation should support people.",
  "Technology should create measurable value.",
] as const;
