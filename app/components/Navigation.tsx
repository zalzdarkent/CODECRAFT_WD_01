"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Check which section is currently in view
      const sections = ["home", "about", "services", "portfolio", "contact"];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Consider a section active if it's in the upper half of the viewport
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const getMenuItemClasses = (item: { id: string }) => {
    const isActive = activeSection === item.id;
    const baseClasses =
      "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105";

    if (isScrolled) {
      return `${baseClasses} ${
        isActive
          ? "text-blue-600 bg-blue-50 scale-105"
          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
      }`;
    } else {
      return `${baseClasses} ${
        isActive
          ? "text-blue-300 bg-white/10 scale-105"
          : "text-white hover:text-blue-300 hover:bg-white/10"
      }`;
    }
  };

  const getMobileMenuItemClasses = (item: { id: string }) => {
    const isActive = activeSection === item.id;
    const baseClasses =
      "block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105";

    if (isScrolled) {
      return `${baseClasses} ${
        isActive
          ? "text-blue-600 bg-blue-50 scale-105"
          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
      }`;
    } else {
      return `${baseClasses} ${
        isActive
          ? "text-blue-300 bg-white/10 scale-105"
          : "text-white hover:text-blue-300 hover:bg-white/10"
      }`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={getMenuItemClasses(item)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 focus:outline-none ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  : "text-white hover:text-blue-300 hover:bg-white/10"
              }`}
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden relative z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-t border-gray-200/20 shadow-lg"
              : "bg-black/30 backdrop-blur-sm border-t border-white/10"
          }`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className={getMobileMenuItemClasses(item)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isMobileMenuOpen
                  ? "slideInFromTop 0.3s ease-out forwards"
                  : "none",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
