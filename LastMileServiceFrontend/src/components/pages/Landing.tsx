import { Search, Wrench, Zap, Sparkles, Home } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ServiceCard } from "../ServiceCard";
import { TestimonialCarousel } from "../TestimonialCarousel";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface LandingProps {
  onNavigate: (page: string) => void;
}

export function Landing({ onNavigate }: LandingProps) {
  const featuredServices = [
    {
      icon: Wrench,
      title: "Plumbing",
      description: "Expert plumbers for all your pipe and drainage needs",
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Licensed electricians for safe and reliable work",
    },
    {
      icon: Sparkles,
      title: "Cleaning",
      description: "Professional cleaning services for your home",
    },
    {
      icon: Home,
      title: "Repair",
      description: "General home repairs and maintenance services",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Find Trusted Service Professionals Near You
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Connect with verified local experts for all your home service needs. 
                Quality work, guaranteed satisfaction.
              </p>
              
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Find a service near you..."
                    className="pl-10 h-12"
                  />
                </div>

                {/* Apple-style primary CTA */}
                <Button
                  asChild
                  size="lg"
                  className="
                    h-12 px-6 rounded-full font-semibold
                    bg-white text-black
                    shadow-[0_0_0_0.5px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.06)]
                    hover:opacity-90 transition
                  "
                >
                  <a href="#/get-started">Get Started</a>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div>
                  <span className="text-2xl text-foreground block">1000+</span>
                  <span>Verified Pros</span>
                </div>
                <div>
                  <span className="text-2xl text-foreground block">50K+</span>
                  <span>Happy Customers</span>
                </div>
                <div>
                  <span className="text-2xl text-foreground block">4.8★</span>
                  <span>Average Rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1709102884400-b50ca1a12bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwd29ya2luZyUyMHJlcGFpcnxlbnwxfHx8fDE3NjAzNTY1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional technician at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Popular Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our most requested services and find the perfect professional for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => onNavigate("services")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting professional help is easy with our simple three-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="mb-2">Search & Compare</h3>
              <p className="text-muted-foreground">
                Browse verified professionals and compare ratings, reviews, and prices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="mb-2">Book Service</h3>
              <p className="text-muted-foreground">
                Choose your preferred date and time, then confirm your booking
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="mb-2">Get It Done</h3>
              <p className="text-muted-foreground">
                Sit back and let our professionals handle the work with excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of satisfied customers who trust ServiceHub for their home service needs
          </p>

          {/* Apple-style CTA to Services */}
          <Button
            asChild
            size="lg"
            className="
              rounded-full px-6 font-semibold
              bg-white text-black
              shadow-[0_0_0_0.5px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.06)]
              hover:opacity-90 transition
            "
          >
            <a href="#/services">Find a Professional Now</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
