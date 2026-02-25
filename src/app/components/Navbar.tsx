"use client";

import { useState, useEffect } from "react";

const navLinks = ["Home", "About", "Solutions", "Impact", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled ? "text-[#002148]" : "text-white";
  const hoverClass = "hover:text-[#C9970C] transition-colors duration-200";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Logo — left */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <ULXMark />
            <span
              className={`text-2xl font-black tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-[#002148]" : "text-white"
              }`}
            >
              ULX
            </span>
          </a>

          {/* Nav links — center */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-semibold tracking-wide uppercase ${linkClass} ${hoverClass}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA — right */}
          <div className="hidden md:flex items-center justify-end">
            <a
              href="#contact"
              className="bg-[#C9970C] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#002148] transition-colors duration-200 shadow-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden justify-self-end col-start-3 w-8 h-8 flex flex-col justify-center gap-1.5 ${linkClass}`}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-8 transition-all duration-300 ${
                scrolled ? "bg-[#002148]" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 transition-all duration-300 ${
                scrolled ? "bg-[#002148]" : "bg-white"
              } ${menuOpen ? "opacity-0 w-0" : "w-8"}`}
            />
            <span
              className={`block h-0.5 w-8 transition-all duration-300 ${
                scrolled ? "bg-[#002148]" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          menuOpen ? "max-h-96 shadow-xl" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3.5 text-[#002148] font-semibold border-b border-gray-100 hover:text-[#C9970C] transition-colors uppercase text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-5 bg-[#C9970C] text-white text-center font-bold py-3 rounded-full hover:bg-[#002148] transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

function ULXMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <polygon points="4,17 12,4 20,17 12,30" fill="#C9970C" />
      <polygon points="14,17 22,4 30,17 22,30" fill="#C9970C" opacity="0.6" />
    </svg>
  );
}
