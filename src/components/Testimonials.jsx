import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/portfolioData";
import { fadeInUp } from "../animations/motionVariants";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {

const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

React.useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  return (
    <section
      id="testimonials"
      className="py-20 bg-white dark:bg-[#0f172a] relative overflow-hidden"
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900 blur-3xl rounded-full opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 dark:bg-purple-900 blur-3xl rounded-full opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-bold text-center mb-12"
        >
          Testimonials
        </motion.h2>

        {/* 🟣 Mobile: Swiper Slider */}
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
          >
            {testimonials.map((test, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 text-center"
                >
                  <FaQuoteLeft className="text-3xl text-blue-500 mx-auto mb-4 opacity-70" />
                  <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                    “{test.message}”
                  </p>

                  <div className="flex flex-col items-center">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 mb-3"
                    />
                    <h3 className="font-semibold text-lg">{test.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {test.role}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          /* 💠 Desktop: Static Grid */
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 text-center"
              >
                <FaQuoteLeft className="text-3xl text-blue-500 mx-auto mb-4 opacity-70 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  “{test.message}”
                </p>

                <div className="flex flex-col items-center">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 mb-3"
                  />
                  <h3 className="font-semibold text-lg">{test.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {test.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
