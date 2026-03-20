import ArcanaDashboard from "../../public/arcana/dashboard.jpeg";
import ArcanaCheckin from "../../public/arcana/checkin.jpeg";
import ArcanaUsers from "../../public/arcana/users.jpeg";
import ArcanaSales from "../../public/arcana/sales.jpeg";
import ArcanaMrp from "../../public/arcana/mrp.jpeg";
import ArcanaRegistration from "../../public/arcana/registration.jpeg";
import ArcanaProspect from "../../public/arcana/prospect.jpeg";

import DoculinkLanding from "../../public/doculinksf/landing.jpeg"
import DoculinkSubdivisions from "../../public/doculinksf/subdivisions.jpeg"
import DoculinkLguView from "../../public/doculinksf/lgu-projects.jpeg"
import DoculinkSubdiView from "../../public/doculinksf/subdivision-view.jpeg"
import DoculinkLguManage from "../../public/doculinksf/manage.jpeg"
import DoculinkProjectView from "../../public/doculinksf/view.jpeg"
import DoculinkDocuView from "../../public/doculinksf/view-docs.png"
import DoculinkDocuUpload from "../../public/doculinksf/upload.png"

import { StaticImageData } from "next/image";

export interface projectTypes {
  name: string;
  description: string;
  technology: string;
  tools: string[];
  features: string[];
  year: string;
  preview: string | null;
  images: imageType[];
}

export interface imageType {
  image: StaticImageData;
  alt: string;
}

export const projects: projectTypes[] = [
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
    preview: null,
    images: [],
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
    preview: "https://www.doculinksf.com/",
    images: [
      { image: DoculinkLanding, alt: "Landing Page"},
      {image:DoculinkSubdivisions, alt: "Subdivision List"},
      {image:DoculinkLguView, alt: "LGU Project List"},
      {image:DoculinkSubdiView, alt: "Subdivision Project List"},
      {image:DoculinkLguManage, alt: "Requirements Management"},
      {image: DoculinkProjectView, alt: "Project View"},
            {image: DoculinkDocuUpload, alt: "Document Upload"},
      {image: DoculinkDocuView, alt: "Document Viewing"},
    ],
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
    preview: "https://pathalert.hygen.live/",
    images: [],
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
    preview: null,
    images: [
      { image: ArcanaDashboard, alt: "Analytics Dashboard" },
      { image: ArcanaCheckin, alt: "Check-In System" },
      { image: ArcanaUsers, alt: "User Management" },
      { image: ArcanaProspect, alt: "Prospect Management" },
      { image: ArcanaRegistration, alt: "Customer Registration" },
      { image: ArcanaSales, alt: "Point of Sale" },
      { image: ArcanaMrp, alt: "MRP Overview" },
    ],
  },
];
