"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Philosophy() {
  return (
    <section className="container py-16 md:py-24">
      <motion.header
        className="md:space-y-sm space-y-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h6 className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
          OUR PHILOSOPHY
        </h6>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Human-centred innovation
        </h2>
      </motion.header>

      <motion.div
        className="py-[32px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          src="/Assets/philosophyImage.avif"
          alt="Our Philosophy"
          width={914}
          height={301}
          className="h-full w-full hidden md:block"
          loading="lazy"
        />
        <Image
          src="/Assets/philosophyImageMobile.avif"
          alt="Our Philosophy Mobile"
          width={914}
          height={301}
          className="h-full w-full block md:hidden"
          loading="lazy"
        />
      </motion.div>

      <div className="">
        <ul className="grid lg:grid-cols-3 grid-cols-2 gap-[30px]">
          {[1, 2, 3].map((index) => (
            <motion.li
              key={index}
              className="bg-[#F8FCFF] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.figure
                className="w-fit rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={`/Assets/icons/phIcon${index}.${
                    index === 2 ? "png" : "svg"
                  }`}
                  alt={`phIcon${index}`}
                  width={50}
                  height={50}
                  className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px] mb-4"
                  loading="lazy"
                />
              </motion.figure>

              <h4 className="font-Montserrat text-gray-900 font-semibold text-res-head-4 lg:text-head-4 mb-4 text-lg">
                {index === 1 && "Full-suite solutions"}
                {index === 2 && "Simplify the complex"}
                {index === 3 && "Cutting-edge tech"}
              </h4>

              <p className="text-gray-600">
                {index === 1 &&
                  "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions."}
                {index === 2 &&
                  "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data."}
                {index === 3 &&
                  "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions."}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Philosophy;
