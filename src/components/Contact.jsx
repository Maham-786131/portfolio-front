import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    emailjs
      emailjs.sendForm(
        'service_olfr6bo',
        'template_bg7pb2e',   // ← your new fancy email template
        form,
        'lh7-MbnkfYgXXOQJi'
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.reset();
          setLoading(false);
        },
        (error) => {
          alert('❌ Failed to send message: ' + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="mt-12 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        I’m open to collaborations, freelance work, or just a friendly hello 👋
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
        >
          {/* Netlify hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="flex flex-col gap-4">
            <input
              name="name"
              required
              placeholder="Your Name"
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={6}
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="w-5 h-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h-4l3 3-3 3h4a8 8 0 01-8 8v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                    ></path>
                  </svg>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </div>
        </motion.form>

        {/* Contact Info / Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Let’s Connect ✨</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Prefer email?{' '}
              <a
                href="mailto:mahamjaved994@example.com"
                className="text-blue-500 font-medium hover:underline hover:text-blue-600 transition-colors"
              >
                mahamjaved994@example.com
              </a>
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/Maham-786131"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-md bg-gray-100/20 dark:bg-gray-700 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/maham-javed-95a055325"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-md bg-gray-100/20 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:mahamjaved994@example.com"
                aria-label="Email"
                className="p-3 rounded-md bg-gray-100/20 dark:bg-gray-700 hover:bg-green-500 hover:text-white transition duration-300"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Form data will go to your <strong>Gmail inbox (via EmailJS)</strong> and also be stored in your{' '}
            <strong>Netlify Form submissions</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
