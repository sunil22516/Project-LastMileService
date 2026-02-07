import { Target, Users, Award, Heart } from "lucide-react";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To connect homeowners with trusted, verified professionals who deliver exceptional service every time.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Building strong relationships between service providers and customers based on trust and quality.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Every professional is thoroughly vetted, licensed, and insured for your peace of mind.",
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority. We're here to ensure every service exceeds expectations.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Professionals" },
    { number: "100K+", label: "Services Completed" },
    { number: "50+", label: "Cities Served" },
    { number: "4.9★", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="mb-6">About ServiceHub</h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to make finding and booking trusted home service professionals 
              as easy as possible. Since 2020, we've been connecting homeowners with the best 
              local experts.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                ServiceHub was founded with a simple idea: finding reliable home service 
                professionals shouldn't be a hassle. We experienced firsthand the frustration 
                of searching for trustworthy technicians, and we knew there had to be a better way.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, we've built a platform that brings together thousands of verified 
                professionals and satisfied customers. Every day, we help people maintain their 
                homes with confidence, knowing they're working with the best.
              </p>
              <p className="text-muted-foreground">
                Our commitment is simple: connect you with professionals who are skilled, 
                reliable, and dedicated to getting the job done right.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MDM1MTEzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ServiceHub team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and help us deliver exceptional 
              service to our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Join Our Community</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Whether you're looking for services or want to offer your expertise, 
            ServiceHub is the place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Find Services
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
              Become a Professional
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
