"use client";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Icons } from "./Icons";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

/* ---------------- TYPES ---------------- */

type IconName = keyof typeof Icons;

type TechItem = {
  name: string;
  icon?: IconName | null;
  active?: boolean
};

/* ---------------- DATA ---------------- */

export const Frontend: TechItem[] = [
  { name: "HTML", icon: "html", active: false },
  { name: "CSS", icon: "css", active: false },
  { name: "JavaScript", icon: "javascript", active: true },
  { name: "TypeScript", icon: "typescript", active: true },
  { name: "React.js", icon: "react", active: true },
  { name: "React Native", icon: "react", active: true },
  { name: "Next.js", icon: "next", active: true },
  { name: "Vite", icon: null, active: false },
  { name: "Webpack", icon: "webpack", active: false },
  { name: "Redux", icon: "redux", active: true },
  { name: "Tailwind CSS", icon: "tailwind", active: true },
  { name: "SCSS", icon: "sass", active: true },
  { name: "Styled Components", icon: null, active: false },
  { name: "Material UI", icon: "material", active: true },
  { name: "Bootstrap", icon: "bootstrap", active: false },
  { name: "ESLint", icon: null, active: false },
  { name: "Prettier", icon: null, active: false },
];


export const Backend: TechItem[] = [
  { name: "Node.js", icon: "node", active: true },
  { name: "Express.js", icon: "express", active: true },
  { name: "PostgreSQL", icon: "postgresql", active: true },
  { name: "MySQL", icon: "mysql", active: true },
  { name: "Firebase", icon: "firebase", active: true },
  { name: "Neon", icon: "neon", active: true },
  { name: "Prisma ORM", icon: "prisma", active: true },
  { name: "Socket.IO", icon: "socket", active: true },
  { name: "REST API", icon: null, active: false },
];


export const CloudDeployment: TechItem[] = [
  { name: "Vercel", icon: null},
  { name: "Render", icon: null },
  { name: "AWS S3", icon: null },
  { name: "AWS SES", icon: null },
  { name: "Cloudinary", icon: null },
];

export const DeveloperTools: TechItem[] = [
  { name: "Git", icon: null},
  { name: "GitHub", icon: null },
  { name: "VS Code", icon: null},
  { name: "Postman", icon: null },
  { name: "Figma", icon: null},
  { name: "Jira", icon: null},
];

export const OtherTools: TechItem[] = [
  { name: "Google Places API", icon: null},
  { name: "Google Maps API", icon: null },
  { name: "Solidity", icon: null },
  { name: "Ganache", icon: null },
  { name: "Maileroo", icon: null },
];

/* ---------------- SUB-COMPONENT ---------------- */

const TechRow = ({ label, items }: { label: string; items: TechItem[] }) => (
  <div>
    <h2 className="font-medium mb-2">{label}</h2>
    <div className="flex flex-wrap gap-2">
      {items.filter((item) => item.active === true).map((tech) => {
        const Icon = tech.icon ? Icons[tech.icon] : null;
        return (
          <Badge
            key={tech.name}
            variant="ghost"
            className="flex items-center gap-1 px-3 py-1"
          >
            {Icon && <Icon />}
            {tech.name}
          </Badge>
        );
      })}
    </div>
  </div>
);

/* ---------------- COMPONENT ---------------- */

const Techstack = () => {
  return (
    <Card className="p-4 gap-2 row-span-2 text-start">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Tech Stack</h1>
        <Link
          href="/tech-stack"
          className="text-xs flex cursor-pointer hover:underline gap-1 items-center"
        >
          View All <ChevronRight size={15} />
        </Link>
      </div>

      <TechRow label="Frontend" items={Frontend} />
      <TechRow label="Backend" items={Backend} />
    </Card>
  );
};

export default Techstack;