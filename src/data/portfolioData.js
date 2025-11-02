// src/data/portfolioData.js
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFigma, SiNextdotjs } from "react-icons/si";
import avatar1 from "../assets/images/avatar-1.jpg";
import avatar2 from "../assets/images/avatar-2.jpg";
import avatar3 from "../assets/images/avatar-3.jpg";

export const personalInfo = {
  name: "Your Name",
  title: "Frontend Developer",
  bio: "I’m a passionate front-end developer focused on building clean, user-centered web experiences with React, TailwindCSS, and modern JavaScript frameworks.",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "your@email.com",
};


export const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: "Advanced" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: "Advanced" },
  { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E", level: "Advanced" },
  { name: "React.js", icon: FaReact, color: "#61DAFB", level: "Advanced" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "Intermediate" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", level: "Advanced" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063", level: "Intermediate" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D", level: "Intermediate" },
  { name: "Figma", icon: SiFigma, color: "#A259FF", level: "Intermediate" },
];

export const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Project Manager, favcon Agency",
    image:avatar1,
    message:
      "Working with you was an amazing experience! You delivered high-quality work on time and with great communication.",
  },
  {
    name: "Arif sheikh",
    role: "CEO, StartupHub",
    image:avatar2,
    message:
      "You brought our vision to life with stunning design and clean code. Absolutely recommend working with you!",
  },
  {
    name: "Fatima Khan",
    role: "Freelance Client",
    image:avatar3,
    message:
      "Your professionalism and attention to detail are unmatched. Every aspect of the project exceeded expectations.",
  },
];

// export const blogs = [
//   {
//     title: "Building Responsive Portfolios with React and TailwindCSS",
//     date: "Oct 20, 2025",
//     excerpt:
//       "Discover the techniques and tips I used to make my portfolio fully responsive using TailwindCSS and React components.",
//     image: "/images/blog1.jpg",
//     link: "#",
//   },
//   {
//     title: "Optimizing Performance in React Apps",
//     date: "Sep 10, 2025",
//     excerpt:
//       "Performance is key. Learn how to reduce bundle size and improve loading speed for React projects.",
//     image: "/images/blog2.jpg",
//     link: "#",
//   },
// ];
