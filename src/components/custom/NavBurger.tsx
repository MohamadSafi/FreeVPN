"use client";
import Image from "next/image";
import burger from "../../../public/navbar-burger.svg";
import "node_modules/flag-icons/css/flag-icons.min.css";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import LangDropDown from "./LangDropDown";

export default function NavBurger() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          priority
          src={burger}
          height={24}
          width={24}
          alt="Change Language"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuLabel className="text-blue-600">
          Free VPN
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className=" sm:text-lg">Home</DropdownMenuItem>
        <DropdownMenuItem className=" sm:text-lg">Features</DropdownMenuItem>
        <DropdownMenuItem className=" sm:text-lg">
          How to connect
        </DropdownMenuItem>
        <DropdownMenuItem className=" sm:text-lg">About Us</DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span className="justify-center sm:text-lg">Language</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem className="justify-center">
                <span className="fi fi-us p-3 rounded-full"></span>
              </DropdownMenuItem>
              <DropdownMenuItem className="justify-center">
                <span className="fi fi-ru p-3 rounded-full"></span>
              </DropdownMenuItem>
              <DropdownMenuItem className="justify-center">
                <span className="fi fi-sa p-3 rounded-full"></span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
