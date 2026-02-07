import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@servicehub.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "1-800-SERVICE",
      description: "Mon-Fri 9AM-6PM PST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Market Street, San Francisco, CA 94103",
      description: "By appointment only",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help. 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1">{info.title}</h3>
                    <p className="text-muted-foreground mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Office Hours */}
            <Card className="p-6 bg-primary text-white">
              <h3 className="mb-4 text-white">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-100">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8">
            <h2 className="mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  rows={6}
                  className="mt-2"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="mt-8 overflow-hidden">
          <div className="aspect-[21/9] bg-slate-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Map would be displayed here</p>
                <p className="text-sm text-muted-foreground">
                  123 Market Street, San Francisco, CA 94103
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="mb-3">How do I book a service?</h3>
              <p className="text-muted-foreground">
                Simply browse our services, select a professional, choose your preferred 
                date and time, and confirm your booking. It's that easy!
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-3">Are professionals verified?</h3>
              <p className="text-muted-foreground">
                Yes! All professionals on our platform are thoroughly vetted, licensed, 
                and insured for your safety and peace of mind.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-3">What if I need to cancel?</h3>
              <p className="text-muted-foreground">
                You can cancel up to 24 hours before your scheduled service for a full 
                refund. Check our cancellation policy for details.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-3">How do I become a professional?</h3>
              <p className="text-muted-foreground">
                Visit our "Become a Pro" page to learn about requirements and submit your 
                application. We review all applications within 3-5 business days.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
