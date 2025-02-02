"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function FutureFinance() {
  return (
    <div className="container mx-auto mt-[62px]">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[50px] relative items-center">
        <div className="md:space-y-sm space-y-6">
          <h6 className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
            POWERING THE FUTURE OF FINANCE
          </h6>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.15]">
            Uncovering new
            <br />
            ways to delight
            <br />
            customers
          </h2>

          <div className="!my-[60px] md:hidden block relative h-fit lg:text-clip">
            <div className="block md:hidden relative h-fit lg:text-clip">
              <motion.figure
                className="w-[76%] mx-auto"
                style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/Assets/FutureSectionBg.avif"
                  height={415}
                  width={342}
                  alt="Future of Finance"
                  className="object-cover w-full h-full"
                />
              </motion.figure>

              <div>
                <motion.figure
                  className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
                  style={{ "--motion-translateX": "50%" }}
                  animate={{
                    y: [0, -15, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Image
                    src="/Assets/icons/icon1.svg"
                    alt="icon1"
                    height={115}
                    width={116}
                    className="object-contain w-full h-full"
                  />
                </motion.figure>

                <motion.figure
                  className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
                  animate={{
                    y: [0, 15, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 3.5,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Image
                    src="/Assets/icons/icon2.svg"
                    alt="icon2"
                    height={88}
                    width={89}
                    className="object-contain w-full h-full"
                  />
                </motion.figure>

                <motion.figure
                  className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
                  style={{ "--motion-translateX": "-50%" }}
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Image
                    src="/Assets/icons/icon3.svg"
                    alt="icon3"
                    height={75}
                    width={74}
                    className="object-contain w-full h-full"
                  />
                </motion.figure>
              </div>

              <motion.figure
                className="absolute inset-0 w-full h-full -z-10"
                initial={{ y: "-2%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 2.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Image
                  src="/Assets/backgrounds/FFbackground.svg"
                  height={415}
                  width={449}
                  alt="background"
                  className="object-cover w-full h-full"
                />
              </motion.figure>

              <motion.figure
                className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
                initial={{ y: "0.8%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 2.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Image
                  src="/Assets/backgrounds/foreground.png"
                  height={207}
                  width={225}
                  alt="foreground"
                  className="object-cover w-full h-full"
                />
              </motion.figure>
            </div>
          </div>

          <div className="lg:pt-2">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg">
                <strong>
                  AnyTech is revolutionising financial technology by introducing
                  innovative and real-time transaction account processing
                  capabilities, specifically designed for retail financial
                  services.
                </strong>
              </p>
              <p className="mt-4 text-lg">
                Our modern approach surpasses traditional banking and card
                processing systems, empowering you with the most advanced
                technology for lasting success.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="hidden md:block relative h-fit lg:text-clip">
          <motion.figure
            className="w-[76%] mx-auto"
            style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/Assets/FutureSectionBg.avif"
              height={415}
              width={342}
              alt="Future of Finance"
              className="object-cover w-full h-full"
            />
          </motion.figure>

          <div>
            <motion.figure
              className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
              style={{ "--motion-translateX": "50%" }}
              animate={{
                y: [0, -15, 0],
                transition: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/Assets/icons/icon1.svg"
                alt="icon1"
                height={115}
                width={116}
                className="object-contain w-full h-full"
              />
            </motion.figure>

            <motion.figure
              className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
              animate={{
                y: [0, 15, 0],
                transition: {
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/Assets/icons/icon2.svg"
                alt="icon2"
                height={88}
                width={89}
                className="object-contain w-full h-full"
              />
            </motion.figure>

            <motion.figure
              className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
              style={{ "--motion-translateX": "-50%" }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/Assets/icons/icon3.svg"
                alt="icon3"
                height={75}
                width={74}
                className="object-contain w-full h-full"
              />
            </motion.figure>
          </div>

          <motion.figure
            className="absolute inset-0 w-full h-full -z-10"
            initial={{ y: "-2%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 2.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Image
              src="/Assets/backgrounds/FFbackground.svg"
              height={415}
              width={449}
              alt="background"
              className="object-cover w-full h-full"
            />
          </motion.figure>

          <motion.figure
            className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
            initial={{ y: "0.8%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 2.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Image
              src="/Assets/backgrounds/foreground.png"
              height={207}
              width={225}
              alt="foreground"
              className="object-cover w-full h-full"
            />
          </motion.figure>
        </div>
      </div>
    </div>
  );
}

export default FutureFinance;
