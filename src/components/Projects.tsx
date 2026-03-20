"use client"
import { useRouter } from "next/navigation";
import { Card } from "./ui/card";
import Trackwise from "../../public/trackwise.svg"
import { projects } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const router = useRouter()
  return (
    <Card className="text-start p-4 sm:col-span-2 gap-2" >
      <div className="flex justify-between">
        <h1 className="font-bold">Recent Projects</h1>
        <Link
          href="/projects"
          className="text-xs flex cursor-pointer hover:underline gap-1 items-center"
        >
          View All <ChevronRight size={15} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {projects.map((proj, key) => (
          <Card key={key} className="p-3 text-start gap-1 hover:bg-secondary cursor-pointer" onClick={() => router.push(`/projects/${proj.name}`)}>
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
