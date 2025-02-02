import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-transparent text-white max-lg:bg-blue-500 max-lg:py-4 top-0 lg:absolute w-full lg:pt-[17px] lg:pb-[25px] z-[9999]">
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
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div
            className={`${
              isOpen
                ? "max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:right-0 max-lg:bg-blue-500 max-lg:px-4 max-lg:py-6"
                : "max-lg:hidden"
            } lg:flex items-center w-full lg:w-auto`}
          >
            <ul className="flex max-lg:flex-col lg:flex-row max-lg:w-full">
              <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer !border-none max-lg:py-3">
                <span className="flex items-center justify-between">
                  <span>Solutions</span>
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </span>
              </li>
              <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer max-lg:py-3">
                <span>Services</span>
              </li>
              <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer max-lg:py-3">
                <span>About Us</span>
              </li>
              <div className="ml-6 my-auto max-lg:ml-0 max-lg:mt-4">
                <div className="relative lg:block">
                  <button className="rounded-[132px] flex items-center justify-center space-x-[8px] border px-[14px] py-[8px] lg:text-body-p1 text-res-body-p0 text-white border-white max-lg:w-full max-lg:justify-center">
                    <span>EN</span>
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </ul>
          </div>

          <button className="border border-white bg-transparent hover:bg-white hover:text-blue-600 hidden max-lg:w-full max-lg:justify-center max-lg:mt-4 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs">
            <p className="font-bold">Contact Us</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
