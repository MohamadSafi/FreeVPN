import React, { useMemo } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  "● Free Me VPN will always be FREE, SECURE, and FAST",
  "● Providing more free servers on Free Me VPN.",
  "● Adding more contries to Free Me VPN.",
  "● Free Me VPN Mobile application.",
  "● No limits with Free Me VPN.",
];

export default function Features() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <main
      className="am:py-16 md:py-16 lg:py-16 xl:py-16 2xl:py-16 w-full"
      id="feature"
    >
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-full mx-auto text-center"
        >
          We are Trying to expand our services in Free Me VPN
        </motion.h3>
        <motion.p
          className="leading-normal mb-4 mx-auto my-2 w-full text-center"
          variants={scrollAnimation}
        >
          So we need your help either by support or by using our services until
          we grow to match our plans!
        </motion.p>
        <motion.p
          className="leading-normal mb-4 mx-auto my-2 w-full text-center"
          variants={scrollAnimation}
        >
          Free Me VPN always promise you with the best fast and free vpn
          service.
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="flex justify-center">
        <motion.div
          className="pt-12 sm:w-9/12 sm:h-7/12 sm:px-8 md:w-9/12 md:h-7/12 md:px-8 lg:w-9/12 lg:h-7/12 lg:px-8 xl:w-9/12 xl:h-7/12 xl:px-8 2xl:w-9/12 2xl:h-7/12 2xl:px-8"
          variants={scrollAnimation}
        >
          <Image
            src="/assets/HugeGlobal.svg"
            alt="Free me VPN Best Fast Free Secure vpn"
            quality={100}
            width={612}
            height={383}
            layout="responsive"
          />
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div
          className="hidden flex-row justify-center gap-24 md:flex lg:flex xl:flex 2xl:flex"
          variants={scrollAnimation}
        >
          <Image
            width="150"
            height="150"
            src="/assets/Icon/app-store.svg"
            alt="Free me VPN Best Fast Free Secure vpn"
            className="opacity-50"
          />
          <Image
            width="150"
            height="150"
            src="/assets/Icon/google-play.svg"
            alt="Free me VPN Best Fast Free Secure vpn"
            className="opacity-50"
          />
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 items-center y-8 sm:my-12 md:my-12 lg:my-12 xl:my-12 2xl:my-12">
        <ScrollAnimationWrapper className="pt-16">
          <motion.h3
            variants={scrollAnimation}
            className="text-4xl font-bold text-black-600 leading-relaxed w-full mx-auto text-start"
          >
            What is our plans in Free Me VPN?
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
        <ScrollAnimationWrapper className="flex w-full justify-center sm:justify-end md:justify-end lg:justify-end xl:justify-end 2xl:justify-end">
          <motion.div className="w-10/12 h-10/12" variants={scrollAnimation}>
            <Image
              src="/assets/plans.jpg"
              alt="Free me VPN Best Fast Free Secure vpn"
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
          How You can support Free Me VPN to grow?
        </motion.h3>
        <motion.p
          className="leading-normal mb-4 mx-auto my-2 w-full text-center"
          variants={scrollAnimation}
        >
          Free Me VPN Promise you forever with the best free vpn FAST, FREE,
          SECURE !
        </motion.p>
        <motion.p
          className="leading-normal mb-4 mx-auto my-2 w-full text-center"
          variants={scrollAnimation}
        >
          Free Me VPN will always be free but if you like what we are doing and
          want Free Me VPN to continue please consider donation.
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="flex justify-center py-8"
        >
          <Link href={"/donate"}>
            <button
              className={
                "py-2 lg:py-4 ml-4 px-12 lg:px-16 font-semibold rounded-lg bg-orange-400 hover:shadow-lg hover:shadow-orange-400 hover:text-lg"
              }
            >
              Donate to Free Me VPN{" "}
            </button>
          </Link>
        </motion.div>
      </ScrollAnimationWrapper>
    </main>
  );
}
