import { Card } from "./ui/card";

const projects = [
  {
    name: "Trackwise",
    description: "A responsive personal finance tracking web application.",
    technology: "Full-stack",
    tools: [
      "React",
      "Tailwind",
      "ShadCN",
      "Redux",
      "Node",
      "Express",
      "PostgreSQL",
      "Prisma",
      "AWS SES",
      "AWS S3",
      "Figma",
    ],
    features: [
      "Authentication",
      "Expense Tracking",
      "Assets & Loans",
      "Spending Limits",
      "Statistics",
    ],
    year: "2026",
  },
  {
    name: "DoculinkSF",
    description:
      "A web-based checklist and document management system for residential subdivisions.",
    technology: "Front-end",
    tools: ["React", "Tailwind", "ShadCN", "Redux", "Figma", "Cloudinary"],
    features: [
      "Subdivision Selection",
      "Project Checklist",
      "Document Upload",
      "Permit Management",
      "Progress Tracking",
      "Secure Storage",
    ],
    year: "2025",
  },

  {
    name: "PathAlert",
    description:
      "A navigation and reporting app for real-time emergency response.",
    technology: "Full-stack / Mobile",
    tools: [
      "React Native",
      "React",
      "Tailwind",
      "Google Routes",
      "Google Places",
      "Node",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Neon",
      "Render",
      "Expo Go",
      "Redux",
      "Socket.IO",
      "AWS S3",
    ],
    features: [
      "Navigation",
      "Incident Reporting",
      "Re-routing",
      "LGU Dashboard",
      "Real-time Updates",
      "Statistics",
    ],
    year: "2025",
  },
  {
    name: "Arcana",
    description: "An ERP system for managing sales, customers, and inventory.",
    technology: "Front-end",
    tools: ["React", "Redux", "SCSS", "JavaScript", "Material UI"],
    features: [
      "Customer Management",
      "Sales Processing",
      "POS Integration",
      "Inventory Tracking",
      "Reports",
    ],
    year: "2024",
  },
];

const Projects = () => {
  return (
    <Card className="text-start p-4 sm:col-span-2 gap-2">
      <div className="flex justify-between">
        <h1 className="font-bold">Recent Projects</h1>
        {/* <h1 className="text-xs flex cursor-pointer hover:underline gap-1 items-center">
          View All <ChevronRight size={15} />
        </h1> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {projects.map((proj, key) => (
          <Card key={key} className="p-3 text-start gap-1 hover:bg-secondary">
            <h1 className="text-sm font-medium">{proj.name}</h1>
            <div className="flex justify-between">
              <p className="text-xs">{proj.technology}</p>
              <p className="text-xs">{proj.year}</p>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default Projects;
