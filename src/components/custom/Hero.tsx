"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import { useTranslation } from "next-i18next";

const Hero = ({
  listUser = [
    {
      name: "Locations",
      number: "5",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-full lg:px-8 2xl:px-16 xl:pb-16 pb-8 xl:px-16 mx-auto"
      id="home"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-6"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Welcome to <strong>Free me VPN</strong>
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Make sure you understand how to connect to open vpn using our
              servers and keep your eyes on the PIN code.
            </p>
          </div>
          <div className="flex w-full">
            <motion.div
              className="w-full h-full sm:h-auto"
              variants={scrollAnimation}
            >
              <Image
                src="/assets/Illustration1.jpg"
                alt="Free me VPN"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex pt-16">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 pb-9 pt-2 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <Image
                    src={listUsers.icon}
                    className="h-6 w-6"
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div variants={scrollAnimation}>
            <Link href="/donate">
              {/* <p className="text-orange-500  mb-6 mt-6 ml-2 text-center text-xl bg-orange-100 max-w-full hover:underline hover:bg-orange-50 rounded-xl">
                Help us for providing more Locations and Servers !
              </p> */}
              <button
                className={
                  "py-2 lg:py-4 ml-4 px-12 lg:px-16 font-semibold rounded-lg bg-orange-400 hover:shadow-lg hover:shadow-orange-300 text-sm"
                }
              >
                Help us for providing more Locations and Servers !
              </button>
            </Link>
          </motion.div>
        </ScrollAnimationWrapper>

        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
