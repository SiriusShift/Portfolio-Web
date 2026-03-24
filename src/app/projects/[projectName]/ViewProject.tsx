import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { imageType } from "@/lib/data";
import {} from "@base-ui/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

const ViewProject = ({
  open,
  setOpen,
  proj,
  index,
  setIndex,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  proj: imageType[];
  index: number;
  setIndex: (index: number) => void;
}) => {
  const activeImage = proj[index];
  const pageSize = proj?.length;
  const handlePrevious = () => {
    setIndex(index - 1);
  };
  const handleNext = () => {
    setIndex(index + 1);
  };

  const handleKeyPress = ({ key } : {key: string}) => {
    if (key === "ArrowLeft" && index + 1 !== 1) {
      handlePrevious();
    } else if (key === "ArrowRight" && index + 1 !== pageSize) {
      handleNext();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onKeyDown={handleKeyPress}
        className=" h-dvh min-w-full flex flex-col m-0 justify-between items-center gap-0 rounded-none  bg-background/80"
      >
        <DialogTitle className="absolute top-7 left-25 text-shadow-2xs text-shadow-gray-400">
          {activeImage?.alt}
        </DialogTitle>
        <DialogDescription className="hidden" />
        <div className="absolute left-5 top-5 w-16 flex justify-center items-center h-8 bg-muted">
          <h1 className="tracking-widest">
            {index + 1}/{pageSize}
          </h1>
        </div>
        <div className="flex w-full h-full justify-center items-center">
          <Button
            disabled={index + 1 === 1}
            variant={"secondary"}
            onClick={handlePrevious}
            className="opacity-50 sm:opacity-100 absolute z-100 left-6 "
          >
            <ArrowLeft />
          </Button>

<div className="w-full lg:w-[75%] h-[70vh] relative">
  <Image
    src={activeImage?.image}
    alt={activeImage?.alt}
    fill
    className="object-contain"
  />
</div>

          <Button
            disabled={index + 1 === pageSize}
            variant={"secondary"}
            onClick={handleNext}
            className="opacity-50 sm:opacity-100 absolute  right-6"
          >
            <ArrowRight />
          </Button>
        </div>
                <h1 className="hidden sm:inline">Use arrow keys to navigate through images</h1>


      </DialogContent>
    </Dialog>
  );
};

export default ViewProject;
