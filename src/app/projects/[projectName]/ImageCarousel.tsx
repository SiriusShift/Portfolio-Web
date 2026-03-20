"use client";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GalleryHorizontal } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import ViewProject from "./ViewProject";
import { imageType, projectTypes } from "@/lib/data";
const ImageCarousel = ({ project } : {project: projectTypes}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<number>(0);

  const activeImage = project?.images;

  const handleView = (index : number) => {
    setIndex(index);
    setOpen(true)
  }
  return (
    <>
      <div className="space-y-3">
        {" "}
        {project?.images?.length > 0 && (
          <>
            {" "}
            <Separator />
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-sm font-semibold">
                <GalleryHorizontal className="h-4 w-4 text-muted-foreground" />
                Gallery
              </div>
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  {project?.images?.map((image: imageType, index: number)  => (
                    <CarouselItem
                      key={index}
                      onClick={() => handleView(index)}
                      className="basis-1/2 pl-1 md:basis-1/3 lg:basis-1/3 cursor-pointer"
                    >
                      <div className="p-1">
                        <Card className="h-40 p-0 overflow-hidden">
                          <Image
                            className="object-cover h-full w-full"
                            src={image.image}
                            alt={image.alt}
                          />
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex"/>
                <CarouselNext className="hidden sm:flex"/>
              </Carousel>
            </div>
          </>
        )}
      </div>
      <ViewProject proj={activeImage} open={open} setOpen={setOpen} index={index} setIndex={(index: number) => setIndex(index)}/>
    </>
  );
};

export default ImageCarousel;
