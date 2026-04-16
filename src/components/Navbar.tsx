import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Why Us", href: "/why-us" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-[32px] md:top-[40px] z-40 w-full bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary tracking-tight">
              Talia<span className="text-accent">Sourcing</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  location.pathname === link.href 
                    ? "text-accent" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-primary font-bold">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base font-semibold rounded-md transition-colors",
                  location.pathname === link.href 
                    ? "text-accent bg-accent/5" 
                    : "text-muted-foreground hover:text-primary hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-bold">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
