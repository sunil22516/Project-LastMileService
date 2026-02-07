import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-white/70">
      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand / About (priority to second) */}
        <div>
          <div className="text-white font-semibold">ServiceLink</div>
          <p className="mt-3 text-sm">
            Connecting brands, service personnel, and consumers across semi-urban and rural India.
          </p>
        </div>

        {/* For Users (second) */}
        <div>
          <div className="text-white text-sm font-semibold">For Users</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#/services" className="hover:text-white">Find Service Centers</a></li>
            <li><a href="#/booking" className="hover:text-white">Book Appointment</a></li>
            <li><a href="#/track-service" className="hover:text-white">Track Service</a></li>
            <li><a href="#/contact" className="hover:text-white">Customer Support</a></li>
          </ul>
        </div>

        {/* For Partners (second) */}
        <div>
          <div className="text-white text-sm font-semibold">For Partners</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#/brand-partnership" className="hover:text-white">Brand Partnership</a></li>
            <li><a href="#/join-technician" className="hover:text-white">Join as Technician</a></li>
            <li><a href="#/training-programs" className="hover:text-white">Training Programs</a></li>
            <li><a href="#/certification" className="hover:text-white">Certification</a></li>
          </ul>
        </div>

        {/* Contact (second) + icons (from first) */}
        <div>
          <div className="text-white text-sm font-semibold">Contact Us</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>support@servicelink.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>1800-123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </li>
          </ul>
          <div className="mt-4">
            <a href="#/schedule-demo" className="underline hover:text-white">Schedule a Demo</a>
          </div>
        </div>
      </div>

      {/* Bottom bar (mixed from first: socials; keep second's minimal legal line) */}
      <div className="container mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left text-xs">
          © {new Date().getFullYear()} ServiceLink. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
