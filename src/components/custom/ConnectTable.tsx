"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function ConnectTable() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onUDPClick = (country: String) => {
    fetch(`${country}-FreeMeVPN.ovpn`).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = `${country}-FreeMeVPN.ovpn`;
        alink.click();
      });
    });
  };

  const onTCPClick = (country: String) => {
    fetch(`${country}-FreeMe.ovpn`).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = `${country}-FreeMeVPN.ovpn`;
        alink.click();
      });
    });
  };

  return (
    <main className="w-auto sm: md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6 border-2 mx-1">
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
            <button
              className="text-blue-400 hover:underline"
              onClick={() => onUDPClick("US")}
            >
              UDP
            </button>{" "}
            |{" "}
            <button
              onClick={() => onTCPClick("US")}
              className="text-blue-400 hover:underline"
            >
              TCP
            </button>
          </div>
        ) : `${searchParams}` === "DE=" ? (
          <div>
            File:{" "}
            <button
              onClick={() => onUDPClick("DE")}
              className="text-blue-400 hover:underline"
            >
              UDP
            </button>{" "}
            |{" "}
            <button
              onClick={() => onTCPClick("DE")}
              className="text-blue-400 hover:underline"
            >
              TCP
            </button>
          </div>
        ) : `${searchParams}` === "NL=" ? (
          <div>
            File:{" "}
            <button
              onClick={() => onUDPClick("NL")}
              className="text-blue-400 hover:underline"
            >
              UDP
            </button>{" "}
            |{" "}
            <button
              onClick={() => onTCPClick("NL")}
              className="text-blue-400 hover:underline"
            >
              TCP
            </button>
          </div>
        ) : `${searchParams}` === "RU=" ? (
          <div>
            File:{" "}
            <button
              onClick={() => onUDPClick("RU")}
              className="text-blue-400 hover:underline"
            >
              UDP
            </button>{" "}
            |{" "}
            <button
              onClick={() => onTCPClick("RU")}
              className="text-blue-400 hover:underline"
            >
              TCP
            </button>
          </div>
        ) : `${searchParams}` === "FR=" ? (
          <p>FR</p>
        ) : (
          <div>
            File:{" "}
            <button
              onClick={() => onUDPClick("FR")}
              className="text-blue-400 hover:underline"
            >
              UDP
            </button>{" "}
            |{" "}
            <button
              onClick={() => onTCPClick("FR")}
              className="text-blue-400 hover:underline"
            >
              TCP
            </button>
          </div>
        )}
        <p>username: freemevpn</p>
        <p>PIN: 12345678</p>
      </div>
      <p className="text-center">
        Note: when the vpn server stops working come back to this page and check
        the PIN code.
      </p>
    </main>
  );
}
