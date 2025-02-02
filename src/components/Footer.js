import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-[#002045]">
        <div className="container flex items-center justify-between py-11">
          <a href="#">
            <div className="flex items-stretch bg-cover">
              <Image
                src="/Assets/AnyTechLogo.svg"
                width={217}
                height={127}
                alt="logo"
              />
            </div>
          </a>
          <div className="hidden items-center text-[#00E9EA] lg:flex">
            <p className="border-r border-blue-900 px-6 py-4 font-semibold">
              Our Solutions
            </p>
            <ul className="flex items-center">
              <li>
                <a
                  href="#"
                  className="px-6 py-4 duration-300 last:pr-0 hover:text-blue-600"
                >
                  AnyCaaS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-6 py-4 text-res-body-p1 duration-300 last:pr-0 hover:text-blue-600"
                >
                  AnyBaaS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-6 py-4 duration-300 last:pr-0 hover:text-blue-600"
                >
                  AnyPaaS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#00152D]">
        <div className="container flex flex-col items-center justify-between py-6 text-blue-600 lg:flex-row ">
          <p>
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <div className="flex items-center gap-[14px] max-lg:mt-4">
            <a
              href=""
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
