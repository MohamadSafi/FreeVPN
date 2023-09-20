"use client";
import React, { useMemo } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import ServerTable from "./ServerTable";
export default function InstructionSteps() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <main className=" mx-auto">
      <h2 className="w-full text-md sm:text-xl lg:text-2xl font-medium text-black-600 leading-relaxed mx-auto my-4 mb-10s">
        Step 1: Install OpenVpn client for your operating system.
      </h2>
      <div className="m-4">
        {/* Mac OS */}
        <h3>
          MacOS: OpenVPN Client{" "}
          <a
            href="https://openvpn.net/client-connect-vpn-for-mac-os/"
            className="text-blue-400 hover:underline"
          >
            Download
          </a>
          . How to{" "}
          <a
            href="https://openvpn.net/vpn-server-resources/installation-guide-for-openvpn-connect-client-on-macos/"
            className="text-blue-400 hover:underline"
          >
            Install?
          </a>
        </h3>
        {/* Windows */}
        <h3>
          Windows: OpenVPN Client{" "}
          <a
            href="https://openvpn.net/client/client-connect-vpn-for-windows/"
            className="text-blue-400 hover:underline"
          >
            Download
          </a>
          . How to{" "}
          <a
            href="https://openvpn.net/vpn-server-resources/installation-guide-for-openvpn-connect-client-on-windows/"
            className="text-blue-400 hover:underline"
          >
            Install?
          </a>
        </h3>
        {/* Linux */}
        <h3>
          Linux: OpenVPN Client{" "}
          <a
            href="https://bidb.iyte.edu.tr/en/installing-openvpn-client-on-linux/"
            className="text-blue-400 hover:underline"
          >
            Download & Install
          </a>
        </h3>
        {/* Iphone */}
        <h3>
          iOS iPhone, iPod, iPad:{" "}
          <a
            href="https://apps.apple.com/us/app/openvpn-connect-openvpn-app/id590379981"
            className="text-blue-400 hover:underline"
          >
            Download
          </a>
          .
        </h3>
        {/* Android */}
        <h3>
          Android:{" "}
          <a
            href="https://play.google.com/store/apps/details?id=de.blinkt.openvpn&hl=en&gl=US"
            className="text-blue-400 hover:underline"
          >
            Download
          </a>
          .
        </h3>
      </div>
      <h2 className="w-full text-md sm:text-xl lg:text-2xl font-medium text-black-600 leading-relaxed mx-auto my-4 mb-10s">
        Step 2: Download and import configuration files.
      </h2>
      <h3 className="mb-6">
        You need to Choose the server that you want. and download the UDP | TCP
        file.
      </h3>
      <ServerTable />
      <h3 className="text-sm mb-14">
        For those who does not know: UDP and TCP are communication protocols.
        UDP is faster but consumes more energy on mobile devices and may not be
        available in some networks. TCP could be a bit slower but has ability to
        connect to proxy-servers and is widely available.
      </h3>
      <h3 className="text-lg">
        Next, Try to Import the downloaded .ovpn files:
      </h3>
      <h3>
        <strong>For Windows:</strong> Click on the plus button in the openvpn
        client, choose upload file then find the .ovpn file.
      </h3>
      <h3>
        <strong>For Android, iOS, Mac OS:</strong> click on files .ovpn in the
        file manager and they will get imported.
      </h3>
      <h3>
        <strong>For Linux:</strong> Run this command sudo openvpn /path to the
        .ovpn file .
      </h3>
      <h2 className="w-full text-md sm:text-xl lg:text-2xl font-medium text-black-600 leading-relaxed mx-auto my-4 mb-10s">
        Step 3: Enter the Username and PIN code.
      </h2>
      <h3>
        You need to enter a PIN code to connect throgh OpenVPN client this PIN
        code will be in the website in the server page ad it will be{" "}
        <strong>updated every 12 hours.</strong> This is important for us to
        avoid any misuse of our technology.
      </h3>
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="flex justify-center pt-20"
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
