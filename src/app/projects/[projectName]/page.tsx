import { projects } from "@/lib/data";
import {
  ChevronLeft,
  Loader2,
  Calendar,
  Layers,
  Wrench,
  Sparkles,
  GalleryHorizontal,
} from "lucide-react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

import Trackwise from "../../../../public/trackwise.svg";
import Arcana from "../../../../public/Arcana.png";
import Doculink from "../../../../public/doculink.png";
import PathAlert from "../../../../public/pathalert.png";
import { Card, CardContent } from "@/components/ui/card";
import ViewProject from "./ViewProject";
import ImageCarousel from "./ImageCarousel";

type Props = {
  params: Promise<{
    projectName: string;
  }>;
};

export const iconMap: Record<string, React.ReactNode> = {
  trackwise: (
    <Image
      src={Trackwise}
      alt="Trackwise"
      width={20}
      className=""
      height={20}
    />
  ),
  arcana: (
    <Image src={Arcana} alt="Arcana" width={20} className="" height={20} />
  ),
  doculinksf: (
    <Image
      src={Doculink}
      alt="DoculinkSF"
      width={20}
      className=""
      height={20}
    />
  ),
  pathalert: (
    <Image
      src={PathAlert}
      alt="PathAlert"
      width={20}
      className=""
      height={20}
    />
  ),
};

export default async function ProjectDetail({ params }: Props) {
  const { projectName } = await params;
  const project = projects.find((item) => item.name === projectName);
  const icon = iconMap[projectName.toLowerCase()];

  if (!project) {
    return (
      <div className="flex h-full min-h-[400px] items-center justify-center">
        <Loader2 className="animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto w-full max-w-3xl max-h-screen px-4  space-y-8">
        {/* Back navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group w-fit"
        >
          <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to projects
        </Link>

        {/* Project header */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              {icon && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-white shadow-sm">
                  {icon}
                </div>
              )}
              <h1 className="text-2xl font-bold tracking-tight">
                {project.name}
              </h1>
            </div>
            {project.preview && (
              <a href={project.preview} target="_blank">
                <Button
                  className="cursor-pointer"
                  size={"sm"}
                  variant={"default"}
                >
                  Live
                </Button>
              </a>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                <Calendar className="h-3.5 w-3.5" />
                <p className="text-sm font-medium">{project.year}</p>
              </div>
            </div>
          </div>
        </div>
        <Separator />

        {/* Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-sm font-semibold">
            <Sparkles className="h-4 w-4 text-muted-foreground" />
            Features
          </div>
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <Badge key={feature} variant="secondary">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Tools */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-sm font-semibold">
            <Wrench className="h-4 w-4 text-muted-foreground" />
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="outline" className="text-xs font-mono">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <ImageCarousel project={project} />
      </div>
    </>
  );
}
