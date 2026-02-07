import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export function ServiceCard({ icon: Icon, title, description, onClick }: ServiceCardProps) {
  return (
    <Card
      className="p-6 hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
          <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
        </div>
        <div>
          <h3 className="mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </Card>
  );
}
