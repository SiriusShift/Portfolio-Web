import { Card } from "./ui/card";
import {
  InteractiveStepper,
  InteractiveStepperDescription,
  InteractiveStepperIndicator,
  InteractiveStepperItem,
  InteractiveStepperSeparator,
  InteractiveStepperTitle,
  InteractiveStepperTrigger,
} from "@/components/ui/stepper";

/* ---------------- DATA ---------------- */

type ExperienceItem = {
  title: string;
  company: string;
  year: string;
  current?: boolean;
};

const experience: ExperienceItem[] = [
  {
    title: "Front End Developer",
    company: "RDF Feed, Livestock & Foods Inc.",
    year: "2024 - Current",
    current: true,
  },
  {
    title: "Fullstack Web/Mobile Developer",
    company: "Freelancing",
    year: "2024",
  },
  {
    title: "Fullstack Developer Intern",
    company: "Clark Outsourcing",
    year: "2024",
  },
  {
    title: "BS Computer Science",
    company: "Holy Angel University",
    year: "2024",
  },
];

/* ---------------- COMPONENT ---------------- */

const Experience = () => {
  return (
    <Card className="p-4 pl-5 gap-2 text-start">
      <h1 className="font-bold">Experience</h1>

      <InteractiveStepper orientation="vertical">
        {experience.map((item, index) => (
          <InteractiveStepperItem key={index}>
            <InteractiveStepperTrigger disabled={!item.current}>
              <InteractiveStepperIndicator type="square" />
              <div className="w-full">
                <InteractiveStepperTitle>{item.title}</InteractiveStepperTitle>
                <InteractiveStepperDescription className="flex flex-row sm:flex-col justify-between">
                  <span className="text-xs">{item.company}</span>
                  <span className="text-xs">{item.year}</span>
                </InteractiveStepperDescription>
              </div>
            </InteractiveStepperTrigger>
            <InteractiveStepperSeparator />
          </InteractiveStepperItem>
        ))}
      </InteractiveStepper>
    </Card>
  );
};

export default Experience;