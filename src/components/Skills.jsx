import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaJsSquare,
  FaFigma 
} from 'react-icons/fa';
import { SiExpress, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skillsList = [
    {
      name: 'React',
      category: 'Frontend',
      description: 'Building responsive, component-driven user interfaces and SPAs.',
      icon: <FaReact className="text-cyan-400 text-2xl" />,
    },
    {
      name: 'Node.js',
      category: 'Backend',
      description: 'Creating server-side logic and asynchronous operations.',
      icon: <FaNodeJs className="text-green-500 text-2xl" />,
    },
    {
      name: 'Express.js',
      category: 'Backend',
      description: 'Designing RESTful APIs, routing and middleware.',
      icon: <SiExpress className="text-zinc-300 text-2xl" />,
    },
    {
      name: 'MongoDB',
      category: 'Database',
      description: 'Managing flexible NoSQL schemas.',
      icon: <FaDatabase className="text-green-400 text-2xl" />,
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling',
      description: 'Building responsive, modern UI designs.',
      icon: <SiTailwindcss className="text-cyan-400 text-2xl" />,
    },
    {
      name: 'JavaScript',
      category: 'Language',
      description: 'Writing modern ES6+ scripts for full-stack functionality.',
      icon: <FaJsSquare className="text-yellow-400 text-2xl" />,
    },
    {
      name: 'Figma',
      category: 'Design',
      description: 'Designing high-fidelity UI wireframes, UX testing, and interactive prototypes.',
      icon: <FaFigma className="text-pink-400 text-2xl" />,
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          My <span className="text-teal-400">Tech Stack</span>
        </h2>
        <p className="text-zinc-400 mt-2 text-sm md:text-base">
          Core technologies and tools I use to build web apps.
        </p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-start transition-all duration-300 transform hover:-translate-y-2 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10 cursor-pointer group"
          >
            {/* Icon / Badge Symbol */}
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>

            {/* Title & Category */}
            <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
            <span className="text-xs text-teal-400 font-medium uppercase tracking-wider mb-3">
              {skill.category}
            </span>

            {/* Description */}
            <p className="text-zinc-400 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}