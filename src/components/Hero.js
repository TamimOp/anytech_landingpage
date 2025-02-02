"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

function Hero() {
  return (
    <div className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] bg-blue-600 bg-clip-2 ">
      <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
        <div className="h-fit lg:flex-[65] xl:flex-[75] ">
          <motion.header
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 mb-12"
          >
            <h1 className="text-6xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Embrace the
              <br />
              future of finance
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl max-w-2xl opacity-90">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </p>
          </motion.header>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#"
              className="inline-flex items-center bg-orange-500 px-12 py-4 rounded-sm shadow-lg 
              hover:bg-orange-600 transition-colors text-lg font-medium mb-4"
            >
              Reach Out to Us
              <svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none">
        <motion.figure
          className="h-[115%] w-[115%] object-cover"
          initial={{ x: "-12%", y: "0.126%" }}
          animate={{ x: "0%", y: "0%" }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <MotionImage
            src="/Assets/HeroImage.avif"
            alt="HeroImage"
            width={5304}
            height={7952}
            className="h-full w-full object-cover rotate-[20deg] scale-[1.1]"
            sizes="55vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAYIB//EACIQAAEDBAICAwAAAAAAAAAAAAECAwQABQYREiEHURUiYf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAAMBAQEAAAAAAAAAAAAAAAABEQIhMf/aAAwDAQACEQMRAD8AfPDd6iybe40tKj2hKj2BTLl9/huuw0Rll0LJHJA7A/ahC+zl463MLy/qSVN76Vr3TOG+GLPSi4U+KmK2HH20q12CaKm9PlqeEgfGRDoa2SSaKVlP/9k="
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9],
              },
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.figure>
      </div>

      <div className="absolute inset-0 z-0">
        {[1, 2, 3, 4].map((num) => (
          <Image
            key={num}
            src={`/Assets/backgrounds/WaveLinesDesktop${num}.svg`}
            alt="Wave pattern"
            width={1920}
            height={929}
            className={`absolute inset-0 w-full h-full ${
              num === 1 ? "hidden lg:block" : ""
            }`}
            style={{ zIndex: -num }}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
