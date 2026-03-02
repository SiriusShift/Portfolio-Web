"use client";
import DefaultImage from "../../public/default.jpg";
import HoverImage from "../../public/hover.jpg";
import { FileText, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

const RESUME_PATH = "/Marquez_Fullstack Developer.pdf";

const Header = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <header className="relative flex items-start gap-5 sm:gap-6">
      {/* Accent line */}
      {/* <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-foreground via-foreground/30 to-transparent rounded-full" /> */}

      {/* Profile image */}
      <div className="relative shrink-0">
        <div className="relative size-28 sm:size-32 overflow-hidden rounded-xl ring-1 ring-border shadow-lg">
          <Image
            src={isImageHovered ? HoverImage : DefaultImage}
            alt="Charles Amiel Marquez"
            fill
            className="object-cover object-[25%_25%] transition-all duration-300 ease-in-out hover:scale-105"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          />
        </div>
        {/* Live indicator dot */}
        <span className="absolute -bottom-1 -right-1 size-3 rounded-full bg-emerald-500 ring-2 ring-background shadow-sm" />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col gap-2 sm:gap-4 pt-0.5">
        {/* Top row: name + toggle */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-0.5">
              Fullstack Developer
            </p>
            <h1 className="text-xl sm:text-3xl font-bold tracking-tight leading-none">
              Charles Amiel Marquez
            </h1>
          </div>
          <ModeToggle />
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin size={12} className="shrink-0" aria-hidden="true" />
          <span className="text-xs">Pampanga, Philippines</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 flex-wrap">
          <Button
            variant="default"
            size="sm"
            className="text-xs h-8 px-3 gap-1.5"
            asChild
          >
            <a
              href={RESUME_PATH}
              download="Marquez_Fullstack Developer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              <FileText size={13} />
              Resume
            </a>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="text-xs h-8 px-3 gap-1.5"
            asChild
          >
            <a
              href="mailto:lagmanmarquez@gmail.com"
              aria-label="Send Email"
            >
              <Mail size={13} />
              Email
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;