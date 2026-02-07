import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { TechnicianCard } from "../TechnicianCard";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

interface ServicesProps {
  onNavigate: (page: string, data?: any) => void;
}

const technicians = [
  {
    id: 1,
    name: "John Martinez",
    profession: "Master Plumber",
    image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NjAzMjc3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 127,
    location: "San Francisco, CA",
    verified: true,
    hourlyRate: 85,
  },
  {
    id: 2,
    name: "Sarah Williams",
    profession: "Licensed Electrician",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MDI5NzU2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 98,
    location: "Oakland, CA",
    verified: true,
    hourlyRate: 90,
  },
  {
    id: 3,
    name: "David Chen",
    profession: "HVAC Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 85,
    location: "Berkeley, CA",
    verified: true,
    hourlyRate: 95,
  },
  {
    id: 4,
    name: "Maria Garcia",
    profession: "Professional Cleaner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 156,
    location: "San Francisco, CA",
    verified: true,
    hourlyRate: 65,
  },
  {
    id: 5,
    name: "Robert Taylor",
    profession: "General Contractor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 73,
    location: "San Jose, CA",
    verified: false,
    hourlyRate: 100,
  },
  {
    id: 6,
    name: "Emily Johnson",
    profession: "Interior Painter",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 112,
    location: "Palo Alto, CA",
    verified: true,
    hourlyRate: 75,
  },
];

export function Services({ onNavigate }: ServicesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([50, 120]);
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <Label className="mb-4 block">Price Range (per hour)</Label>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={150}
            step={5}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <Label className="mb-3 block">Rating</Label>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <label
                htmlFor={`rating-${rating}`}
                className="text-sm cursor-pointer"
              >
                {rating} stars & up
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-3 block">Availability</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="available-today" />
            <label htmlFor="available-today" className="text-sm cursor-pointer">
              Available Today
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="available-weekend" />
            <label htmlFor="available-weekend" className="text-sm cursor-pointer">
              Weekend Availability
            </label>
          </div>
        </div>
      </div>

      <div>
        <Label className="mb-3 block">Other</Label>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="verified-only"
            checked={showVerifiedOnly}
            onCheckedChange={(checked) => setShowVerifiedOnly(checked as boolean)}
          />
          <label htmlFor="verified-only" className="text-sm cursor-pointer">
            Verified Professionals Only
          </label>
        </div>
      </div>
    </div>
  );

  const filteredTechnicians = technicians.filter((tech) => {
    const matchesSearch =
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.profession.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice =
      tech.hourlyRate >= priceRange[0] && tech.hourlyRate <= priceRange[1];
    const matchesVerified = !showVerifiedOnly || tech.verified;

    return matchesSearch && matchesPrice && matchesVerified;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Find Service Professionals</h1>
          <p className="text-muted-foreground">
            Browse and book trusted professionals in your area
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by name or service..."
              className="pl-10 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="sm:hidden">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Refine your search results
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h3 className="mb-6">Filters</h3>
              <FilterContent />
            </div>
          </aside>

          {/* Technicians Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-sm text-muted-foreground">
              Showing {filteredTechnicians.length} professionals
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredTechnicians.map((tech) => (
                <TechnicianCard
                  key={tech.id}
                  {...tech}
                  onClick={() => onNavigate("profile", tech)}
                />
              ))}
            </div>

            {filteredTechnicians.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No professionals found matching your criteria
                </p>
              </div>
            )}

            {/* Pagination */}
            {filteredTechnicians.length > 0 && (
              <div className="flex justify-center mt-8 space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="outline" className="bg-primary text-white hover:bg-primary/90">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
