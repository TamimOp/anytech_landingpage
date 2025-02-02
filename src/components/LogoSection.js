"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: ">20", label: "Years of Experience" },
  { value: "40+", label: "Financial Institutions" },
  { value: ">200m", label: "Customers Each" },
];

const logos = [
  "/Assets/logo/bank1.webp",
  "/Assets/logo/bank2.webp",
  "/Assets/logo/bank3.webp",
  "/Assets/logo/bank4.webp",
  "/Assets/logo/bank5.webp",
  "/Assets/logo/bank6.webp",
  "/Assets/logo/bank7.webp",
  "/Assets/logo/bank8.webp",
  "/Assets/logo/bank9.webp",
  "/Assets/logo/bank10.webp",
  "/Assets/logo/bank11.webp",
  "/Assets/logo/bank12.webp",
  "/Assets/logo/bank13.webp",
  "/Assets/logo/bank14.webp",
  "/Assets/logo/bank15.webp",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function LogoSection() {
  return (
    <section className="mb-4 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container"
      >
        <motion.h6
          variants={itemVariants}
          className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4"
        >
          TRUSTED BY THE BEST
        </motion.h6>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xl:mx-28 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center border-blue-highlight pb-2"
            >
              <h2 className="text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-600 to-[#0057BB] text-transparent bg-clip-text">
                {stat.value}
              </h2>
              <p className="text-lg text-[#151D2F]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-[100px] grid grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="flex items-stretch bg-cover object-contain"
            >
              <Image
                src={logo}
                alt={`bank${index + 1}`}
                height={87}
                width={132}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default LogoSection;
