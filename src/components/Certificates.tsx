import { Card } from "./ui/card";

const certificates = [
  {
    title: "AI Horizon PH",
    year: "2024",
    provider: "University of the Philippines",
  },
  {
    title: "Magna Cum Laude",
    year: "2024",
    provider: "Holy Angel University",
  },
];

const Certificates = () => {
  return (
    <Card className="col-span-1 p-4 gap-2 text-start">
      <h2 className="font-bold">Certificates</h2>

      <div className="flex flex-col gap-2">
        {certificates.map((cert, index) => (
          <Card
            key={index}
            className="p-3 flex flex-col gap-1 hover:bg-secondary cursor-pointer"
          >
            <h3 className="font-semibold text-sm">{cert.title}</h3>
            <p className="text-xs text-muted-foreground">{cert.provider}</p>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default Certificates;
