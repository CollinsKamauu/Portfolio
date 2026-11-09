import React, { useState } from 'react';
import { FaGithub, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error(error.message || 'Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* COLUMN 1: Details & Social Links */}
        <div className="flex flex-col justify-between space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Get in <span className="text-teal-400">Touch</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-sm md:text-base leading-relaxed">
              I'm open to consultation, collaborations, or inquiries. Feel free to reach out!
            </p>
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://github.com/CollinsKamauu"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 bg-zinc-900 border border-zinc-800 hover:border-teal-500/50 rounded-2xl text-zinc-300 hover:text-teal-400 text-xl transition shadow-lg hover:shadow-teal-500/10 flex items-center justify-center"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/254717435718"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Contact"
              className="p-3.5 bg-zinc-900 border border-zinc-800 hover:border-teal-500/50 rounded-2xl text-zinc-300 hover:text-teal-400 text-xl transition shadow-lg hover:shadow-teal-500/10 flex items-center justify-center"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* COLUMN 2: Contact Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Name <span className="text-teal-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Email Address <span className="text-teal-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Phone Number <span className="text-zinc-600 font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 700 000 000"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Message <span className="text-teal-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-teal-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition shadow-lg hover:shadow-teal-500/25 active:scale-[0.99] disabled:opacity-50"
            >
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              <FaPaperPlane className="text-xs" />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}