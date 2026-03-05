import { Card } from "./ui/card";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import Link from "next/link";

type IconName = keyof typeof Icons;

type Social = {
  name: string;
  link: string;
  icon: IconName;
};

const socials: Social[] = [
  { name: "Github", link: "https://github.com/SiriusShift", icon: "github" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/charles-amiel-marquez/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/charlesunichi/",
    icon: "instagram",
  },
  { name: "Gmail", link: "mailto:lagmanmarquez@gmail.com", icon: "gmail" },
];
const Socials = () => {
  return (
    <Card className="p-4 grid grid-cols-4 gap-1">
      {socials.map((social) => {
        const Icon = Icons[social.icon];

        return (
          <Button
          variant={"ghost"}
            key={social.name}
            className="flex flex-row items-center gap-2 p-4 h-12 cursor-pointer"
            asChild
          >
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              {/* Desktop */}
              <Icon className="w-4 h-4 text-foreground" />
              <h1 className="text-sm hidden sm:inline">{social.name}</h1>
            </a>
          </Button>
        );
      })}
    </Card>
  );
};

export default Socials;
