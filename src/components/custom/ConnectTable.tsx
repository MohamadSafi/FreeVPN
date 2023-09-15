"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function ConnectTable() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log(typeof `${searchParams}`);
  return (
    <main>
      <p>
        Download the file and use{" "}
        <a
          className="text-blue-400 hover:underline"
          href="https://openvpn.net/"
          target="_blank"
        >
          open vpn
        </a>{" "}
        client to connect.
      </p>
      {`${searchParams}` === "US=" ? (
        <p>US</p>
      ) : `${searchParams}` === "UK=" ? (
        <p>UK</p>
      ) : `${searchParams}` === "NL=" ? (
        <p>NL</p>
      ) : `${searchParams}` === "RU=" ? (
        <p>RU</p>
      ) : `${searchParams}` === "FR=" ? (
        <p>FR</p>
      ) : (
        <p>Error</p>
      )}
    </main>
  );
}
