import { Star, MapPin, BadgeCheck } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TechnicianCardProps {
  id: number;
  name: string;
  profession: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
  verified: boolean;
  hourlyRate: number;
  onClick?: () => void;
}

export function TechnicianCard({
  name,
  profession,
  image,
  rating,
  reviews,
  location,
  verified,
  hourlyRate,
  onClick,
}: TechnicianCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {verified && (
          <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-lg">
            <BadgeCheck className="w-5 h-5 text-primary" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{profession}</p>
          </div>
          <Badge variant="secondary" className="text-xs">
            ${hourlyRate}/hr
          </Badge>
        </div>
        
        <div className="flex items-center space-x-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">{rating.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
        
        <Button onClick={onClick} className="w-full">
          Book Now
        </Button>
      </div>
    </Card>
  );
}
