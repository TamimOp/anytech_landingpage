import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <div className=" bg-transparent text-white max-lg:bg-blue-main max-lg:py-8 top-0 lg:absolute w-full lg:pt-[17px] lg:pb-[25px] text-res-body-p1 lg:text-body-p1 z-[9999]">
        <div className="relative z-[9999]">
          <div className="container flex items-center flex-wrap justify-between">
            <h1>
              <a className="block w-[12rem] xl:mr-8" href="#hero">
                <Image
                  src="/Assets/AnyTechLogo.svg"
                  alt="AnyTech Logo"
                  width={170}
                  height={32}
                />
              </a>
            </h1>
            <div className="flex items-center">
              <ul className="flex">
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer !border-none">
                  <span className="flex items-center justify-between">
                    <span>Solution</span>
                  </span>
                </li>
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                  <span>Services</span>
                </li>
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                  <span>About Us</span>
                </li>
                <div className="ml-6 my-auto">
                  <div className="relative lg:block hidden">
                    <button className="rounded-[132px] flex items-center justify-center space-x-[8px] border px-[14px] py-[8px] lg:text-body-p1 text-res-body-p0 text-white border-white">
                      <span>EN</span>
                    </button>
                  </div>
                </div>
              </ul>
            </div>
            <button className="border border-white bg-transparent hover:bg-white hover:text-blue-600 hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs">
              <p className="font-bold">Contact Us</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
