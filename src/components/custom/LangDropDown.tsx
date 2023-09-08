"use client";
import Image from "next/image";
import language from "../../../public/language_icon.svg";
import "node_modules/flag-icons/css/flag-icons.min.css";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LangDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          priority
          src={language}
          height={24}
          width={24}
          alt="Change Language"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center">
          <span className="fi fi-us p-5 rounded-full"></span>
        </DropdownMenuItem>
        <DropdownMenuItem className="justify-center">
          <span className="fi fi-ru p-5 rounded-full"></span>
        </DropdownMenuItem>
        <DropdownMenuItem className="justify-center">
          <span className="fi fi-sa p-5 rounded-full "></span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
