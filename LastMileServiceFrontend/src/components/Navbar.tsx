import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prioritize the second nav’s structure/labels
  const navItems = [
    { label: "Find Service", page: "services", href: "#/services" },
    { label: "For Brands", page: "brand-partnership", href: "#/brand-partnership" },
    { label: "For Technicians", page: "join-technician", href: "#/join-technician" },
    { label: "About", page: "about", href: "#/about" },
    { label: "Contact", page: "contact", href: "#/contact" },
  ];

  const handleNav = (page: string, href: string) => {
    if (onNavigate) onNavigate(page);
    // if no onNavigate provided, let the anchor navigate via href
    setMobileMenuOpen(false);
  };

  return (
    <header className="header-glass sticky top-0 z-50">
      <nav className="container h-14 flex items-center justify-between">
        {/* Logo / Home */}
        {onNavigate ? (
          <button
            onClick={() => onNavigate("home")}
            className="font-semibold tracking-tight text-white/90 hover:text-white"
            aria-label="Go to home"
          >
            ServiceLink
          </button>
        ) : (
          <a
            href="#/"
            className="font-semibold tracking-tight text-white/90 hover:text-white"
          >
            ServiceLink
          </a>
        )}

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {navItems.map((item) => (
            <li key={item.page}>
              {onNavigate ? (
                <button
                  onClick={() => handleNav(item.page, item.href)}
                  className={`hover:text-white transition-colors ${
                    currentPage === item.page ? "text-white" : ""
                  }`}
                  aria-current={currentPage === item.page ? "page" : undefined}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  className="hover:text-white"
                  href={item.href}
                  aria-current={currentPage === item.page ? "page" : undefined}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          {onNavigate ? (
            <Button
              className="rounded-full bg-white text-black hover:opacity-90"
              onClick={() => onNavigate("get-started")}
            >
              Get Started
            </Button>
          ) : (
            <Button asChild className="rounded-full bg-white text-black hover:opacity-90">
              <a href="#/get-started">Get Started</a>
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white/90 hover:text-white"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu (mixed in from first component) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-white">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.page}>
                {onNavigate ? (
                  <button
                    onClick={() => handleNav(item.page, item.href)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      currentPage === item.page
                        ? "bg-black/5 text-gray-900"
                        : "text-gray-800 hover:bg-black/5"
                    }`}
                    aria-current={currentPage === item.page ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-left px-3 py-2 rounded-lg text-gray-800 hover:bg-black/5 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            {onNavigate ? (
              <Button
                className="w-full mt-2"
                onClick={() => {
                  onNavigate("get-started");
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            ) : (
              <Button asChild className="w-full mt-2">
                <a href="#/get-started" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </a>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
