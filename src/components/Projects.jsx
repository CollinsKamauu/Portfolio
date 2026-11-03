import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

// 1. Import all your project images directly from src/assets/
import chamaDash from '../assets/chama/ChamaAppDashboard.png';
import chamaFin from '../assets/chama/ChamaAppFinances.png';
import chamaContrib from '../assets/chama/ChamaAppContributions.png';

import sokoHome from '../assets/sokokuu/SokoKuuHomepage.png';
import sokoOrder from '../assets/sokokuu/SokoKuuOrderPage.png';
import sokoDelivery from '../assets/sokokuu/DeliveryDetails.png';

import kiwiHome from '../assets/kiwilabs/KiwiLabsHomepage.png';

export default function Projects() {
  // State to manage the currently active full-screen preview image
  const [activeImage, setActiveImage] = useState(null);

  const projectsList = [
    {
      id: 1,
      title: 'Chama Web App',
      description:
        'A comprehensive record management platform designed to track group contributions for Chama groups, member accounting ledgers, and transactions. Integrated with Safaricom M-Pesa Daraja C2B APIs for seamless payment reconciliation.',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'M-Pesa API'],
      github: 'https://github.com/CollinsKamauu/Chama-Web-App.git',
      live: 'https://milestonechama.netlify.app/',
      images: [chamaDash, chamaFin, chamaContrib],
    },
    {
      id: 2,
      title: 'Soko Kuu Marketplace',
      description:
        'An online grocery marketplace and inventory coordination platform powered by a Supabase PostgreSQL backend. Features multi-tiered batch inventory control, automated expiration tracking, and accounting ledgers.',
      tags: ['React', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      images: [sokoHome, sokoOrder, sokoDelivery],
    },
    {
      id: 3,
      title: 'Kiwi Labs Marketing Agency',
      description:
        'An agency website portfolio constructed with Elementor. Showcases modular user interface component systems, micro-interactions, and optimized marketing case studies.',
      tags: ['Figma', 'Elementor', 'WordPress', 'UI/UX Design'],
      github: 'https://github.com',
      live: 'https://example.com',
      images: [kiwiHome],
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Featured <span className="text-teal-400">Projects</span>
        </h2>
      </div>

      {/* Project Cards Container */}
      <div className="space-y-12">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl transition-all duration-300"
          >
            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Column 1: Details & Meta */}
              <div className="flex flex-col items-start space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-zinc-800 border border-zinc-700/60 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Action Links */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-5 py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition shadow-md hover:shadow-teal-500/20"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-5 py-2.5 text-xs font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition"
                  >
                    <FaGithub className="text-sm" />
                    <span>Repository</span>
                  </a>
                </div>
              </div>

              {/* Column 2: 3 App Screenshots Showcase Grid */}
              <div className="grid grid-cols-3 gap-3 w-full">
                {project.images.map((imgSrc, imgIdx) => (
                  <div
                    key={imgIdx}
                    onClick={() => setActiveImage(imgSrc)}
                    className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-[4/3] cursor-zoom-in"
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} preview ${imgIdx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-teal-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-xs text-white font-medium bg-black/60 px-2 py-1 rounded">Click to expand</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Lightbox Modal for Full Image Focus & Blurred Background */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-10 transition-all duration-300 animate-fadeIn cursor-zoom-out"
        >
          <button 
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition shadow-lg"
          >
            <FaTimes className="text-xl" />
          </button>
          
          <div className="relative max-w-7xl max-h-[90vh] overflow-hidden rounded-2xl border border-zinc-700 shadow-2xl">
            <img 
              src={activeImage} 
              alt="Expanded Full View" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}