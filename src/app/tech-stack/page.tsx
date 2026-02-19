"use client";
import { Backend, CloudDeployment, DeveloperTools, Frontend, OtherTools } from "@/components/Techstack";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="lg:w-3xl space-y-8">
      <div className="flex items-center gap-4">
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => router.push("/")}
        >
          <ChevronLeft />
        </Button>
        <h1 className="text-xl font-bold">Tech Stack</h1>
      </div>
      <div className="space-y-4">
        <h1 className="text-lg font-bold">Frontend</h1>
        <div className="flex flex-wrap gap-2">
          {Frontend?.map((item) => (
            <Badge className="rounded-sm p-2 px-3" variant={"outline"}>
              {item.name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-lg font-bold">Backend</h1>
        <div className="flex flex-wrap gap-2">
          {Backend?.map((item) => (
            <Badge className="rounded-sm p-2 px-3" variant={"outline"}>
              {item.name}
            </Badge>
          ))}
        </div>
      </div>
            <div className="space-y-4">
        <h1 className="text-lg font-bold">Cloud Deployment</h1>
        <div className="flex flex-wrap gap-2">
          {CloudDeployment?.map((item) => (
            <Badge className="rounded-sm p-2 px-3" variant={"outline"}>
              {item.name}
            </Badge>
          ))}
        </div>
      </div>
                  <div className="space-y-4">
        <h1 className="text-lg font-bold">Developer Tools</h1>
        <div className="flex flex-wrap gap-2">
          {DeveloperTools?.map((item) => (
            <Badge className="rounded-sm p-2 px-3" variant={"outline"}>
              {item.name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-lg font-bold">Other Tools</h1>
        <div className="flex flex-wrap gap-2">
          {OtherTools?.map((item) => (
            <Badge className="rounded-sm p-2 px-3" variant={"outline"}>
              {item.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
