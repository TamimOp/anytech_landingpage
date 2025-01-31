"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

function Hero() {
  return (
    <div className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] svelte-n9olsd bg-blue-600">
      <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
        <div className="h-fit lg:flex-[65] xl:flex-[75]">
          <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
            <h1 className="lg:max-w-max lg:whitespace-pre-line lg:text-head-1 font-Montserrat text-res-head-1 text-white">
              Embrace the future of finance
            </h1>
            <h5 className="!text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </h5>
          </header>
          <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
            <a
              className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main false"
              href="#"
            >
              <motion.span
                style={{ "--motion-translateX": "0px" }}
                animate={{
                  translateX: "var(--motion-translateX)",
                  "--motion-translateX": "100px",
                }}
                transition={{ duration: 1 }}
              >
                Reach Out to Us
              </motion.span>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none svelte-1lc7tvy">
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
            className="h-full w-full object-cover"
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
      <Image
        src="/Assets/backgrounds/WaveLinesDesktop1.svg"
        alt="BG Logo"
        width={1920}
        height={929}
        className="hidden lg:block absolute h-full w-full object-cover inset-0 "
      />
      <Image
        src="/Assets/backgrounds/WaveLinesDesktop2.svg"
        alt="BG Logo"
        width={1920}
        height={929}
        className="absolute top-0 left-0 "
      />
      <Image
        src="/Assets/backgrounds/WaveLinesDesktop3.svg"
        alt="BG Logo"
        width={1920}
        height={929}
        className="absolute top-0 left-0 "
      />
      <Image
        src="/Assets/backgrounds/WaveLinesDesktop4.svg"
        alt="BG Logo"
        width={1920}
        height={929}
        className="absolute top-0 left-0 "
      />
    </div>
  );
}

export default Hero;
