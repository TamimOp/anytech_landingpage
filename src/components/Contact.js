"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Contact() {
  return (
    <>
      <section className="relative h-[60vh] lg:h-[530px] w-full text-white overflow-hidden bg-gradient-to-r from-[#007BFF] to-[#0057BB]">
        <div className="absolute inset-0 bg-[url('/Assets/backgrounds/ctaMobileWaveLines.svg')] bg-cover bg-center opacity-100" />
        <div className="absolute inset-0 bg-[url('/Assets/backgrounds/foreground.png')] bg-cover bg-center opacity-100" />
        <div className="absolute inset-0 bg-[url('/Assets/backgrounds/WaveLinesDesktop1.svg')] bg-cover bg-center opacity-100" />
        <div className="absolute inset-0 bg-[url('/Assets/backgrounds/WaveLinesDesktop2.svg')] bg-cover bg-center opacity-100 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[url('/Assets/backgrounds/WaveLinesDesktop3.svg')] bg-cover bg-center opacity-100 " />
        <div className="absolute inset-0 bg-[url('/Assets/backgrounds/WaveLinesDesktop4.svg')] bg-cover bg-center opacity-100 " />
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-white clip-slant" />

        <div className="container flex flex-col items-start justify-center h-full relative z-10 px-auto gap-4">
          <h2 className="text-5xl font-bold">Legacy no longer</h2>
          <p className="mt-2 text-lg">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>

          <div className="mt-6">
            <a
              className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-sm shadow-lg hover:bg-orange-600 transition"
              href="#"
            >
              Contact Us ›
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
