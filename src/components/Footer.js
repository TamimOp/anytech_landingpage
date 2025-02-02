import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-[#002045]">
        <div className="container flex flex-col items-center lg:flex-row lg:justify-between justify-center py-11 text-center lg:text-left">
          <a href="#" className="flex">
            <div className="flex items-stretch bg-cover">
              <Image
                src="/Assets/AnyTechLogo.svg"
                width={217}
                height={127}
                alt="logo"
              />
            </div>
          </a>

          <div className="hidden lg:flex items-center text-[#00E9EA] mt-6 lg:mt-0">
            <p className="border-r border-blue-900 px-6 py-4 font-semibold">
              Our Solutions
            </p>
            <ul className="flex items-center">
              {["AnyCaaS", "AnyBaaS", "AnyPaaS"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="px-6 py-4 duration-300 last:pr-0 hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#00152D]">
        <div className="container flex flex-col items-center justify-center py-6 text-blue-600 lg:flex-row lg:justify-between text-center lg:text-left">
          <p>
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>

          <div className="mt-4 lg:mt-0">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-blue-50"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
