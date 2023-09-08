import Image from "next/image";
import language from "../../public/language_icon.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav
        className="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10"
      >
        <div className="flex items-center">
          <a className="cursor-pointer">
            <h3 className="text-2xl font-medium text-blue-500">Free VPN</h3>
          </a>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          <a
            className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
          >
            Home
          </a>

          <a
            className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
          >
            Themes
          </a>

          <a
            className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
          >
            Developers
          </a>

          <a
            className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
          >
            Pricing
          </a>

          <a
            className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
          >
            Blog
          </a>

          <a
            className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
          >
            About Us
          </a>
        </div>

        <div className="flex items-center cursor-pointer space-x-5 hover:opacity-25">
          <Image
            priority
            src={language}
            height={24}
            width={24}
            alt="Change Language"
          />
        </div>
      </nav>
    </main>
  );
}
