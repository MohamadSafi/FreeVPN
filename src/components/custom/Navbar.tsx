import LangDropDown from "@/components/custom/LangDropDown";
import NavBurger from "@/components/custom/NavBurger";

export default function Navbar() {
  return (
    <nav
      className="flex md:justify-around lg:justify-around xl:justify-around 2xl:justify-around justify-between py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-20"
    >
      <div className="flex items-center sm: justify-center">
        <a className="cursor-pointer ">
          <h3 className="text-2xl font-medium text-orange-500 ml-5">
            Free VPN
          </h3>
        </a>
      </div>

      <div className="items-center hidden space-x-8 md:flex">
        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        >
          Home
        </a>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        >
          Features
        </a>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        >
          How to connect
        </a>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        ></a>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        ></a>

        <a
          className="flex text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        >
          About Us
        </a>
      </div>

      <div className=" items-center cursor-pointer space-x-5 hover:opacity-25 hidden md:flex">
        <LangDropDown />
      </div>

      <div className="flex curser-pointer hover:opacity-25 md:hidden lg:hidden xl:hidden 2xl:hidden mr-7">
        <NavBurger />
      </div>
    </nav>
  );
}
