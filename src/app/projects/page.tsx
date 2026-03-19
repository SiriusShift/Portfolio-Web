import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { ChevronLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { iconMap } from "./[projectName]/page";

const page = () => {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 h-dvh space-y-10">
      {/* Back navigation */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group w-fit"
      >
        <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to home
      </Link>

      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="text-sm text-muted-foreground">
          {projects.length} project{projects.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Project list */}
      <div className="flex flex-col divide-y divide-border">
        {projects.map((proj, index) => {
          const icon = iconMap[proj.name.toLowerCase()];
          return (
            <Link
              key={index}
              href={`/projects/${proj.name}`}
              className="group flex items-center justify-between py-4 hover:bg-muted/40 -mx-3 px-3 transition-colors cursor-progress "
            >
              <div className="flex items-center gap-3">
                {icon && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white border text-muted-foreground  transition-colors shrink-0">
                    {icon}
                  </div>
                )}
                <span className="text-sm font-medium">{proj.name}</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;