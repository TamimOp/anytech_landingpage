import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="hidden lg:block absolute h-full w-full object-cover inset-0">
      <Image
        src="/Assets/backgrounds/WaveLinesDesktop1.svg"
        alt="BG Logo"
        width={1920}
        height={929}
        className="bg-blue-600"
      />
    </div>
  );
}

export default Hero;
