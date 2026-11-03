import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-900 text-white px-6 md:px-20 py-8 flex justify-between items-center sticky top-0 z-50 shadow-md">
      
      {/* Logo */}
      <div className="flex items-center">
        <a href="#home" className="flex items-center focus:outline-none">
          <img 
            src="/Logo.svg" 
            alt="Portfolio Logo" 
            className="h-6 md:h-8 w-auto object-contain" 
          />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
        <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
        <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
      </div>

      {/* Hamburger Button (Mobile Only) */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-50"
      >
        {/* Top Bar */}
        <span
          className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ease-out ${
            isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
          }`}
        />
        {/* Middle Bar */}
        <span
          className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ease-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Bottom Bar */}
        <span
          className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ease-out ${
            isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
          }`}
        />
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'opacity-100 visible py-6 max-h-60' : 'opacity-0 invisible max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 text-base font-medium">
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-teal-400 transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-teal-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-teal-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}