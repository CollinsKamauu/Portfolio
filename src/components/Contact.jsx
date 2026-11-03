import React from 'react';
import { FaEnvelope, FaGithub, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Get in <span className="text-teal-400">Touch</span>
        </h2>
        <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
          I'm open to consultation, collaborations, or inquiries. Feel free to reach out!
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto flex flex-col items-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-2xl shadow-inner">
          <FaPaperPlane />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">Your web app is an email away!</h3>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href="mailto:collinskamauu@gmail.com"
            className="flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition shadow-lg hover:shadow-teal-500/25"
          >
            <FaEnvelope className="text-sm" />
            <span>Send an Email</span>
          </a>

          <a
            href="https://github.com/CollinsKamauu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl transition"
          >
            <FaGithub className="text-base" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}