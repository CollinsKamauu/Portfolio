import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 py-8 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-2">
        
        {/* Branding */}
        <p className="text-white font-bold text-base tracking-wide">
          Collins <span className="text-teal-400">Kamau</span>
        </p>

        {/* Copyright */}
        <p className="text-zinc-500 text-xs md:text-sm">
          © {currentYear} Collins Kamau. All rights reserved.
        </p>

      </div>
    </footer>
  );
}