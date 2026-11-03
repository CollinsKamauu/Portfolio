import React from 'react';
import heroImg from '../assets/hero.webp';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* 2-Column, 1-Row Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Column 1: Image Container */}
        <div className="flex justify-center items-center w-full">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-zinc-900 shadow-xl">
            <img
              src={heroImg}
              alt="Collins Kamau"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>

        {/* Column 2: Content Container */}
        <div className="flex flex-col items-start space-y-6">
          
          {/* Badge Tags Row */}
          <div className="flex flex-row items-center space-x-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full">
              Web Developer
            </span>

            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full">
              UI/UX Designer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white">
            Collins <span className="text-teal-400">Kamau</span>
          </h1>

          {/* Paragraph Description */}
          <p className="text-slate-50 text-base md:text-lg leading-relaxed">
            I build modern, performant web applications that support business, corporate and technical operations.
          </p>
          <p className="text-slate-50 text-base md:text-lg leading-relaxed">
            Focused on delivering high-quality, user-friendly solutions that meet client needs and business goals.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:collinskamauu@gmail.com"
              className="px-6 py-3 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg transition shadow-md hover:shadow-red-500/20"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 text-sm font-medium text-zinc-300 bg-zinc-800 hover:bg-teal-100 hover:text-teal-900 border border-zinc-700 rounded-lg transition"
            >
              View Projects
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}