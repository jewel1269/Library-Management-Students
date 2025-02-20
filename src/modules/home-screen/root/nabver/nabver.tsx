"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX, FiBell } from "react-icons/fi";
import Link from "next/link";
import useAuth from "@/auth/auth-students/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user } = useAuth();

  const Logout = () => {
    localStorage.removeItem("token");
    toast.success("Logged Out Successfully");
    window.location.href = "/common/login";
  }

  return (
    <nav className="w-full bg-[#0D2B2F] fixed shadow-md dark:bg-gray-800 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <h1 className="lg:text-xl text-md font-bold text-white">Digital Library</h1>
            <input
              type="search"
              placeholder="Search"
              className="px-3 py-1 w-32 sm:w-52 md:w-64 lg:w-96 border border-white placeholder:text-amber-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="toggle menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>

          {/* Menu Items */}
          <div
            className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#0D2B2F] lg:bg-transparent transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {(user
              ? [
                  { name: "Home", path: "/" },
                  { name: "Borrow Book", path: "/private/borrow" },
                  { name: "Article", path: "/common/news" },
                ]
              : [
                  { name: "Home", path: "/" },
                  { name: "Login/Register", path: "/common/login" },
                ]
            ).map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block lg:inline-block px-3 py-2 text-white hover:text-orange-500 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section: Notifications & Profile */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white hidden lg:block" aria-label="show notifications">
              <FiBell className="w-6 h-6" />
            </button>

            {/* Profile Section */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center space-x-2 focus:outline-none"
                aria-label="toggle profile dropdown"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <Image
                    width={32}
                    height={32}
                    src="https://i.ibb.co/35fGxBzL/profile-removebg-preview.png"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link href="/private/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Profile
                  </Link>
                  <h1 onClick={Logout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Logout
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
