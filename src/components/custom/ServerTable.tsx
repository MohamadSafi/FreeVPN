import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import "node_modules/flag-icons/css/flag-icons.min.css";
import { Progress } from "@/components/ui/progress";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";

export default function ServerTable() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <main
      className="pb-16 md:w-full lg:w-full xl:w-full 2xl:w-full"
      id="servers"
    >
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <Table>
            <TableCaption>
              Choose a country and download the .ovpn file to connect
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
                  Health
                </TableHead>
                <TableHead className="text-right">Get Access</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-4">
                  <span className="fi fi-us p-3"></span>
                  <p className="font-medium">United States</p>
                </TableCell>
                <TableCell className="text-green-600 font-bold">
                  ONLINE
                </TableCell>
                <TableCell className="items-center gap-4 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
                  90%
                  <Progress
                    value={90}
                    className="bg-gray-300 text-green-600 w-24 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Link
                    href={{ pathname: "/server", query: "US" }}
                    className="hover:underline"
                  >
                    Click here
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium flex items-center gap-4">
                  <span className="fi fi-de p-3"></span>
                  <p className="font-medium">Germany</p>
                </TableCell>
                <TableCell className="text-green-600 font-bold">
                  ONLINE
                </TableCell>
                <TableCell className="items-center gap-4 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
                  75%
                  <Progress
                    value={75}
                    className="bg-gray-300 text-green-600 w-24 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Link
                    href={{ pathname: "/server", query: "DE" }}
                    className="hover:underline"
                  >
                    Click here
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium flex items-center gap-4">
                  <span className="fi fi-nl p-3"></span>
                  <p className="font-medium">Netherlands</p>
                </TableCell>
                <TableCell className="text-green-600 font-bold">
                  ONLINE
                </TableCell>
                <TableCell className="items-center gap-4 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
                  85%
                  <Progress
                    value={80}
                    className="bg-gray-300 text-green-600 w-24 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Link
                    href={{ pathname: "/server", query: "NL" }}
                    className="hover:underline"
                  >
                    Click here
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium flex items-center gap-4">
                  <span className="fi fi-ru p-3"></span>
                  <p className="font-medium">Russia</p>
                </TableCell>
                <TableCell className="text-red-600 font-bold">
                  OFFLINE
                </TableCell>
                <TableCell className="items-center gap-4 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
                  0%
                  <Progress
                    value={0}
                    className="bg-gray-300 text-green-600 w-24 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Link
                    href={{ pathname: "/server", query: "RU" }}
                    // className="hover:underline"
                    onClick={(event) => event.preventDefault()}
                  >
                    Click here
                  </Link>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium flex items-center gap-4 ">
                  <span className="fi fi-fr p-3"></span>
                  <p className="font-medium">France</p>
                </TableCell>
                <TableCell className="text-red-600 font-bold">
                  OFFLINE
                </TableCell>
                <TableCell className="items-center gap-4 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
                  0%
                  <Progress
                    value={0}
                    className="bg-gray-300 text-green-600 w-24 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Link
                    href={{ pathname: "/server", query: "FR" }}
                    // className="hover:underline"
                    onClick={(event) => event.preventDefault()}
                  >
                    Click here
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </motion.div>
      </ScrollAnimationWrapper>
    </main>
  );
}
