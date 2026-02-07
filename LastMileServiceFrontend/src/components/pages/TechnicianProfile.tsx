import { useState } from "react";
import { Star, MapPin, BadgeCheck, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface TechnicianProfileProps {
  data: any;
  onNavigate: (page: string, data?: any) => void;
}

export function TechnicianProfile({ data, onNavigate }: TechnicianProfileProps) {
  const [activeTab, setActiveTab] = useState("about");

  const reviews = [
    {
      id: 1,
      author: "Jennifer Smith",
      date: "2 weeks ago",
      rating: 5,
      text: "Excellent work! Very professional and arrived on time. Fixed the issue quickly and explained everything clearly.",
    },
    {
      id: 2,
      author: "Michael Brown",
      date: "1 month ago",
      rating: 5,
      text: "Highly recommend! Great communication and quality work. Will definitely hire again for future projects.",
    },
    {
      id: 3,
      author: "Lisa Anderson",
      date: "2 months ago",
      rating: 4,
      text: "Good service overall. The work was done well, though it took a bit longer than expected.",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1563197906-c1466d8e2edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1754620906571-9ba64bd3ffb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1758272421751-963195322eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1709102884400-b50ca1a12bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <Card className="mb-8">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative">
                <ImageWithFallback
                  src={data.image}
                  alt={data.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto md:mx-0"
                />
                {data.verified && (
                  <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg">
                    <BadgeCheck className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h1 className="mb-2">{data.name}</h1>
                    <p className="text-muted-foreground mb-2">{data.profession}</p>
                    <div className="flex items-center justify-center md:justify-start space-x-4 text-sm mb-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{data.rating.toFixed(1)}</span>
                        <span className="text-muted-foreground ml-1">
                          ({data.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{data.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2 mx-auto md:mx-0">
                    ${data.hourlyRate}/hr
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Button className="flex-1" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Service
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {data.verified && (
                    <Badge variant="outline" className="border-green-500 text-green-700">
                      Verified Professional
                    </Badge>
                  )}
                  <Badge variant="outline">Background Checked</Badge>
                  <Badge variant="outline">Insured</Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <Card className="p-6">
                  <h3 className="mb-4">About Me</h3>
                  <p className="text-muted-foreground mb-6">
                    With over 10 years of experience in {data.profession.toLowerCase()}, I pride 
                    myself on delivering high-quality work and excellent customer service. I'm 
                    licensed, insured, and committed to ensuring every job is done right the first time.
                  </p>

                  <h3 className="mb-4">Services Offered</h3>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Emergency repairs and maintenance
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Installations and upgrades
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Inspections and consultations
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Preventive maintenance plans
                    </li>
                  </ul>

                  <h3 className="mb-4">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>State Licensed</Badge>
                    <Badge>EPA Certified</Badge>
                    <Badge>OSHA Trained</Badge>
                    <Badge>Liability Insured</Badge>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id} className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="mb-1">{review.author}</h4>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.text}</p>
                    </Card>
                  ))}

                  <Button variant="outline" className="w-full">
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="gallery">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`Work sample ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sticky Booking Panel */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="p-6">
              <h3 className="mb-4">Book This Professional</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Hourly Rate</span>
                  <span className="text-primary">${data.hourlyRate}/hr</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Response Time</span>
                  <span>Within 2 hours</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Completion Rate</span>
                  <span>98%</span>
                </div>
              </div>
              <Button
                className="w-full"
                size="lg"
                onClick={() => onNavigate("booking", data)}
              >
                Book Now
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                100% satisfaction guaranteed
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
