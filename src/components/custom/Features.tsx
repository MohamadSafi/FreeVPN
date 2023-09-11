import React, { useMemo } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  "● Always will be FREE",
  "● Adding more contries.",
  "● Providing more servers.",
  "● Free VPN Mobile application.",
  "● No specific time limits.",
];

export default function Features() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <main className="py-16 w-full">
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-full mx-auto text-center"
        >
          We are Trying to expand our services
        </motion.h3>
        <motion.p
          className="leading-normal mb-4 mx-auto my-2 w-full text-center"
          variants={scrollAnimation}
        >
          So we need your help either by support or by using our services until
          we grow to match our plans!
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="flex justify-center">
        <motion.div
          className="pt-12 w-9/12 h-7/12 px-8"
          variants={scrollAnimation}
        >
          <Image
            src="/assets/HugeGlobal.svg"
            alt="Free VPN"
            quality={100}
            width={612}
            height={383}
            layout="responsive"
          />
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div
          className="flex flex-row justify-center gap-24"
          variants={scrollAnimation}
        >
          <Image
            width="150"
            height="150"
            src="/assets/Icon/app-store.svg"
            alt="google-play"
            className="opacity-50"
          />
          <Image
            width="150"
            height="150"
            src="/assets/Icon/google-play.svg"
            alt="apple-app-store--v1"
            className="opacity-50"
          />
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 items-center y-8 my-12">
        <ScrollAnimationWrapper className="pt-16">
          <motion.h3
            variants={scrollAnimation}
            className="text-4xl font-bold text-black-600 leading-relaxed w-full mx-auto text-start"
          >
            What is our plans in the future?
          </motion.h3>

          <div className="flex justify-start py-6">
            <ul className="text-black-500 list-inside ml-8 ">
              {features.map((feature, index) => (
                <motion.li
                  className="relative custom-list text-start text-lg"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="w-10/12 h-10/12" variants={scrollAnimation}>
            <Image
              src="/assets/plans.jpg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-full mx-auto text-center"
        >
          How You can support us to grow?
        </motion.h3>
        <motion.p
          className="leading-normal mb-4 mx-auto my-2 w-full text-center"
          variants={scrollAnimation}
        >
          Our services will always be free but if you like what we are doing and
          want us to continue please consider donation.
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="flex justify-center py-8"
        >
          <button
            className={
              "py-2 lg:py-4 ml-4 px-12 lg:px-16 font-semibold rounded-lg bg-orange-400 hover:shadow-lg hover:shadow-orange-400 hover:text-lg"
            }
          >
            Donate{" "}
          </button>
        </motion.div>
      </ScrollAnimationWrapper>
    </main>
  );
}
