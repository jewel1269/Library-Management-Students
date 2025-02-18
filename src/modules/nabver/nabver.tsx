"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX, FiBell } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0D2B2F] fixed shadow-md dark:bg-gray-800">
      <div className="container px-6  mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Left Section */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-white">
              Library System
              </h1>
              <input
              type="search"
              placeholder="Search"
              className="px-3 py-1 w-96 border border-white placeholder:text-amber-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 bg-white dark:bg-gray-800 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full lg:opacity-100 lg:translate-y-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center">
              {[
                { name: "Home", path: "/" },
                { name: "Borrow Book", path: "/borrow" },
                { name: "Return Book", path: "/return" },
                { name: "Login", path: "/login" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="px-3 py-2 mx-3 text-white transition-colors hover:text-orange-500 duration-300 rounded-md dark:text-gray-200  dark:hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              ))} 
            </div>

            {/* Right Section: Notifications & Profile */}
            <div className="flex items-center mt-4 lg:mt-0">
              <button
                className="hidden mx-4 text-gray-600 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <FiBell className="w-6 h-6" />
              </button>

              {/* Profile Section */}
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <Image
                    width={32}
                    height={32}
                    src=""
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>
                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  Khatab Wedaa
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
