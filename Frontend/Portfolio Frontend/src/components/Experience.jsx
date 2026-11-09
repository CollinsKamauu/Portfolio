import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

export default function Experience() {
  const experienceList = [
    {
      id: 1,
      role: 'Sales Representative',
      company: 'Tile and Carpet Centre LTD',
      period: '2024 – 2025',
      description:
        'Managed client inquiries, product recommendations, and showroom sales operations, maintaining high standards of customer satisfaction and inventory coordination.',
      location: 'Nairobi, Kenya',
    },
    {
      id: 2,
      role: 'Policy Research Intern',
      company: 'Ministry for East African Community',
      period: 'January 2022 – May 2022',
      description:
        'Collaborated on regional trade partnership and international trade alliance policy research, contributing to strategic documentation and administrative reporting.',
      location: 'Nairobi, Kenya',
    },
    {
      id: 3,
      role: 'Digital Marketing & Design Lead',
      company: 'Kiwi Labs',
      period: 'August 2025 – June 2026',
      description:
        'Built digital marketing campaigns, Meta Ads configurations, conversion tracking setups, and creative visual asset design for diverse commercial clients.',
      location: 'Nairobi, Kenya',
    },
    {
      id: 4,
      role: 'Frontend Developer',
      company: 'BuuPass',
      period: 'October 2026 - Present',
      description:
        '',
      location: 'Nairobi, Kenya',
    },
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Work <span className="text-teal-400">Experience</span>
        </h2>
      </div>

      {/* Single Column Timeline Container */}
      <div className="relative border-l border-zinc-800 ml-4 md:ml-8 space-y-12">
        {experienceList.map((item, index) => (
          <div key={item.id} className="relative pl-8 md:pl-10 group">
            
            {/* Timeline Dot Icon */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-teal-400 shadow-md group-hover:border-teal-500 transition-colors">
              <FaBriefcase className="text-xs" />
            </div>

            {/* Experience Card Content */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-300 hover:border-zinc-700">
              
              {/* Role & Company Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                    {item.role}
                  </h3>
                  <p className="text-teal-400 font-medium text-sm md:text-base">
                    {item.company}
                  </p>
                </div>

                {/* Date / Timeline badge */}
                <div className="flex items-center space-x-2 text-xs md:text-sm font-medium text-zinc-400 bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50 w-fit">
                  <FaCalendarAlt className="text-teal-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Location Tag */}
              <p className="text-xs text-zinc-500 mb-4 font-semibold uppercase tracking-wider">
                {item.location}
              </p>

              {/* Job Description */}
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}