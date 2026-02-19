import { Card } from "./ui/card";

const Info = () => {
  return (
    <Card className="text-start row-span-1  gap-2 p-4">
      <h1 className="font-bold">About</h1>
      <p className="text-sm">
        I'm a  Full-Stack Software Engineer specializing in building
        modern, scalable, and user-focused digital solutions using JavaScript especializing in PERN Stack.
      </p>
      <p className="text-sm">
        I develop high-quality web and mobile applications, handling everything
        from clean and responsive front-end interfaces to secure and efficient
        back-end systems. My goal is to create software that not only works
        flawlessly but also delivers meaningful experiences for users.
      </p>
    </Card>
  );
};

export default Info;