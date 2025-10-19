"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setScrolled(currentScrollY > 5);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Smooth scroll using browser native scroll behavior
  useEffect(() => {
    const links = document.querySelectorAll("a[data-scroll]");

    const handleClick = (e) => {
      e.preventDefault();
      setMobileMenuOpen(false);

      const targetId = e.currentTarget.getAttribute("href").replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 60; // adjust for fixed header
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => links.forEach((link) => link.removeEventListener("click", handleClick));
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out bg-white shadow-md ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1.5 md:py-1.5">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#home"
            data-scroll
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/images/bharatinfralogo.png"
              alt="Bharat Infra Logo"
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-125"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#contact", label: "Contact" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                data-scroll
                className="relative px-5 py-2 text-gray-700 font-medium text-sm transition-colors duration-300 hover:text-blue-600 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </a>
            ))}

            {/* Phone Button */}
            <a
              href="tel:8080529797"
              className="ml-4 flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>8080529797</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pb-3">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#contact", label: "Contact" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                data-scroll
                className="px-4 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 hover:text-blue-600 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Phone Button */}
            <a
              href="tel:8080529797"
              className="mx-4 mt-2 flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold rounded-full text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>8080529797</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
    </header>
  );
}
