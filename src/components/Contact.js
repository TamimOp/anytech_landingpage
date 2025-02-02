import React from "react";

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

        <div className="container mx-auto flex flex-col items-start justify-center h-full relative z-10 px-auto gap-6">
          <h2 className="text-5xl font-bold">Legacy no longer</h2>
          <p className="mt-2 text-lg">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>

          <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
            <a
              className="md:py-[15.5px] py-[14px] px-[42px] rounded-sm shadow-lg text-white flex items-center justify-center space-x-[8px] bg-orange-500"
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
