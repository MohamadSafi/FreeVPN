"use client";
import React, { useMemo } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InstructionHero() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <main className="lg:h-[95vh] xl:h-[95vh] 2xl:h-[95vh] mt-20 text-center">
      <ScrollAnimationWrapper>
        <div>
          <motion.h1
            variants={scrollAnimation}
            className="text-lg sm:text-xl lg:text-2xl font-medium text-black-600 leading-relaxed w-full mx-auto text-center my-4 mb-10s"
          >
            How to Install and configure OpenVPN client
          </motion.h1>
        </div>
        <motion.div
          variants={scrollAnimation}
          className="flex justify-center w-full xl:w-full m-auto"
        >
          <Image
            src="/assets/Connect-OpenVpn.svg"
            alt="Free me VPN"
            quality={100}
            width={100}
            height={100}
            layout="responsive"
          />
        </motion.div>
      </ScrollAnimationWrapper>
    </main>
  );
}
