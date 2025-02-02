"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Customer focused",
    subtitle: "Purpose-built financial services",
    content: [
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    ],
    image: "/Assets/techSection1.avif",
  },
  {
    title: "Agile and adaptable",
    subtitle: "Agile and adaptable for growth",
    content: [
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    ],
    image: "/Assets/techSection2.avif",
  },
  {
    title: "Compliance ready",
    subtitle: "Manage compliance with ease",
    content: [
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    ],
    image: "/Assets/techSection3.avif",
  },
  {
    title: "Secure and safe",
    subtitle: "Highly secure and safe",
    content: [
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      "Join over 40 esteemed FIs, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    ],
    image: "/Assets/techSection4.avif",
  },
];

function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <section className="container py-16 md:py-24">
      <motion.header
        className="text-center mb-12 md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h6 className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
          TECHNOLOGY BUILT FOR YOU
        </h6>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The future of finance
        </h2>
      </motion.header>

      <div className="flex flex-wrap gap-4 justify-center mb-8 md:mb-16">
        {slides.map((slide, index) => (
          <motion.button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              activeIndex === index
                ? "bg-blue-600 text-white"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {slide.title}
          </motion.button>
        ))}
      </div>

      <div className="relative shadow-xl rounded-2xl overflow-hidden">
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="rounded-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid lg:grid-cols-2 gap-8 p-6 md:p-12 lg:p-16 bg-white min-h-[500px]"
              >
                <div className="flex flex-col justify-center space-y-6">
                  <motion.header
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="space-y-4"
                  >
                    <h6 className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
                      {slide.title}
                    </h6>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {slide.subtitle}
                    </h3>
                  </motion.header>

                  <div className="space-y-4">
                    {slide.content.map((paragraph, pIndex) => (
                      <motion.p
                        key={pIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: pIndex * 0.1 + 0.2 }}
                        className="text-gray-600 text-base md:text-lg"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </div>

                <motion.figure
                  className="hidden md:block relative h-full w-full rounded-xl overflow-hidden"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </motion.figure>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Technology;
