import React from "react";
import { motion } from "framer-motion";
import { blogs } from "../data/portfolioData";
import { fadeInUp, staggerContainer } from "../animations/motionVariants";

const Blog = () => (
  <section id="blog" className="py-20 bg-gray-100 dark:bg-[#111827]">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Latest Articles
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.excerpt}</p>
              <a
                href={blog.link}
                aria-label={`Read full article: ${blog.title}`}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Blog;
