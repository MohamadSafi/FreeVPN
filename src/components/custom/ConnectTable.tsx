"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function ConnectTable() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log(typeof `${searchParams}`);
  return (
    <main className="w-2/6 border-2">
      <p className="text-center">
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
      <p className="text-center">
        Be aware that the PIN will change every 12 hours to avoid any misuse to
        our servers.
      </p>
      <div className=" border-2 border-x-0 border-sky-300 m-6">
        {`${searchParams}` === "US=" ? (
          <div>
            File:{" "}
            <a href="/" className="text-blue-400 hover:underline">
              UDP
            </a>{" "}
            |{" "}
            <a href="/" className="text-blue-400 hover:underline">
              TCP
            </a>
          </div>
        ) : `${searchParams}` === "UK=" ? (
          <div>
            File:{" "}
            <a href="/" className="text-blue-400 hover:underline">
              UDP
            </a>{" "}
            |{" "}
            <a href="/" className="text-blue-400 hover:underline">
              TCP
            </a>
          </div>
        ) : `${searchParams}` === "NL=" ? (
          <div>
            File:{" "}
            <a href="/" className="text-blue-400 hover:underline">
              UDP
            </a>{" "}
            |{" "}
            <a href="/" className="text-blue-400 hover:underline">
              TCP
            </a>
          </div>
        ) : `${searchParams}` === "RU=" ? (
          <div>
            File:{" "}
            <a href="/" className="text-blue-400 hover:underline">
              UDP
            </a>{" "}
            |{" "}
            <a href="/" className="text-blue-400 hover:underline">
              TCP
            </a>
          </div>
        ) : `${searchParams}` === "FR=" ? (
          <p>FR</p>
        ) : (
          <div>
            File:{" "}
            <a href="/" className="text-blue-400 hover:underline">
              UDP
            </a>{" "}
            |{" "}
            <a href="/" className="text-blue-400 hover:underline">
              TCP
            </a>
          </div>
        )}
        <p>username: FreeMeVPN</p>
        <p>PIN: 123456789</p>
      </div>
      <p className="text-center">
        Note: when the vpn server stops working come back to this page and check
        the PIN code.
      </p>
    </main>
  );
}
