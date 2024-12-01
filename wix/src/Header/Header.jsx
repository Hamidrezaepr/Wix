import { useState } from "react";
import Dropdown from "./Dropdown";
import GetStartedButton from "./GetStartedButton";
import "boxicons";
import ax from "../assets/Capture1.JPG";
import ax1 from "../assets/Capture2.JPG";
import ax2 from "../assets/Desktop - Mobile Window Image.webp";
import ax3 from "../assets/Capture3.JPG";
import ax4 from "../assets/snapedit_1730892087105.png";
import ax5 from "../assets/image-removebg-preview.png";
import ax6 from "../assets/215.JPG";
import LanguageSelector from "./LanguageSelector";
import AccordionTransition from "./AccordionTransition";

function Header() {
  // State to control hamburger menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="">
      {/* Top header */}
      <div className="fixed top-0 left-0 w-full z-50 flex ps-10 bg-white border-b-gray-900">
        <div className="flex items-center gap-10 w-full h-16">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="30"
            fill="none"
          >
            <g fill="#000" clipPath="url(#Logo_svg__a)">
              <path d="M75 0h-4.142c-1.15 0-2.224.57-2.87 1.52l-5.54 8.174a.372.372 0 0 1-.615 0l-5.54-8.173A3.46 3.46 0 0 0 53.424 0h-4.143l9.87 14.56-9.815 14.477h4.143c1.149 0 2.223-.569 2.868-1.52l5.486-8.093a.372.372 0 0 1 .616 0l5.485 8.093a3.46 3.46 0 0 0 2.87 1.52h4.142L65.131 14.56zM40.758 2.97v26.067h1.98a2.97 2.97 0 0 0 2.97-2.97V0h-1.98a2.97 2.97 0 0 0-2.97 2.97M37.126 0h-1.762a4.15 4.15 0 0 0-4.051 3.233l-3.942 17.328-3.45-16.175c-.638-2.99-3.706-5.006-6.845-4.139-1.999.552-3.481 2.241-3.914 4.27L9.747 20.54 5.813 3.234A4.16 4.16 0 0 0 1.76 0H0l6.604 29.036h2.502a4.81 4.81 0 0 0 4.706-3.808l4.221-19.81a.54.54 0 0 1 .523-.424c.25 0 .471.178.523.423l4.226 19.812a4.81 4.81 0 0 0 4.706 3.807h2.51z"></path>
            </g>
            <defs>
              <clipPath id="Logo_svg__a">
                <path fill="#fff" d="M0 0h75v29.037H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <div className="w-10/12 ms-10 hidden md:hidden xl:block">
            <Dropdown />
          </div>
        </div>
        <div className="flex gap-2 pr-10 items-center">
          <div className="hidden md:hidden xl:block">
            <LanguageSelector></LanguageSelector>
          </div>
          <span className="border-l-2 border-gray-300 h-5 hidden md:hidden xl:block"></span>
          <button className="w-20 underline hover:text-indigo-700 hidden md:hidden xl:block">
            Log In
          </button>
          <button className="w-36 hover:bg-indigo-500 bg-indigo-700 rounded-full transform transition duration-200 ease-in-out text-white py-2 hidden md:hidden xl:block">
            Get Started
          </button>
        </div>
        {/* Hamburger Menu Icon - visible only on md and smaller */}
        <div className="flex gap-2 pr-10 items-center xl:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              // Close icon when menu is open
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full h-screen overflow-y-scroll bg-white shadow-lg border-t border-gray-200 xl:hidden">
            <AccordionTransition />
            <div className="border-t border-gray-300 p-4 flex flex-col fixed bottom-0 w-full bg-white">
              <div className="flex gap-2">
                <button className="w-32 text-black border border-[#000] rounded-full py-2">
                  Log In
                </button>

                <button className="w-32 bg-indigo-700 rounded-full text-white py-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Rest of header content goes here */}
      <div className="flex flex-col items-center w-full bg-indigo-700 pt-16 pb-28">
        <div className="flex flex-col items-center w-full h-auto">
          <h1 className="text-white text-center text-6xl md:text-7xl sm:w-[40rem] lg:w-[70rem] lg:text-6xl pt-10">
            Create a website without limits
          </h1>

          <p className="text-white text-xl sm:w-[20rem] lg:w-[40rem] text-center pt-8">
            Build and scale with confidence. From a powerful website builder to
            advanced business solutions—we’ve got you covered.
          </p>
          <div className="flex items-center justify-center pt-8">
            <div className="group">
              <GetStartedButton />
            </div>
          </div>
          <p className="text-white text-xs pt-2">
            Start for free. No credit card required.
          </p>
        </div>
        <div className="flex w-8/12 gap-6 pt-11">
          {/* left one */}
          <div className="flex flex-col gap-5">
            <div className="hidden lg:flex items-center bg-white bg-opacity-20 backdrop-blur-lg border border-white/50 rounded-full px-5 py-1">
              <box-icon name="lock-alt" type="solid" color="#ffffff"></box-icon>
              <span className="text-white text-xs">https://ciaodrinks.com</span>
            </div>
            <div className="relative hidden lg:flex items-center bg-white bg-opacity-20 backdrop-blur-lg border border-white/50 rounded-lg">
              <img
                className="absolute rounded-full border-none size-8 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                src={ax5}
                alt=""
              />
              <img className="size-52 rounded-lg" src={ax4} alt="" />
            </div>

            <div className="hidden lg:flex items-center bg-white bg-opacity-20 backdrop-blur-lg border border-white/50 rounded-lg">
              <img className="rounded-lg" src={ax6} alt="" />
            </div>
          </div>
          {/* Middle one */}
          <div>
            <div className="bg-white hidden lg:block bg-opacity-20 backdrop-blur-lg border w-[38rem] border-white/50 rounded-xl p-2">
              <img className="rounded-lg w-full h-full" src={ax} alt="" />
            </div>
          </div>
          {/* Last one */}
          <div className="flex flex-col gap-2">
            <div className="hidden lg:block bg-white bg-opacity-20 backdrop-blur-lg border border-white/50 rounded-lg px-2 py-2">
              <img className=" h-auto" src={ax1} alt="" />
            </div>
            <div className="hidden lg:block bg-opacity-20 backdrop-blur-lg border border-white/50 rounded-lg w-44 px-1.5 py-2 h-[19.5rem]">
              <img
                className="relative w-40 rounded-t-md h-48"
                src={ax2}
                alt=""
              />
              <img
                className="absolute w-40 top-48 rounded-b-md h-28"
                src={ax3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
