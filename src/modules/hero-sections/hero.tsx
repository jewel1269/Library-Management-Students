'use client'
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  const text: string = "to the Library System";

  return (
    <div className="relative w-full h-[38rem]">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs"
        style={{
          backgroundImage:
            "url('https://www.voicesofruralindia.org/wp-content/uploads/2020/11/ylswjsy7stw-scaled.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/40"></div>

      {/* Content (No Blur Effect) */}
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="text-center px-6">
          <div className="text-3xl flex gap-2 font-semibold text-white lg:text-4xl">
            <p className="text-yellow-500">Welcome</p>
            <Typewriter
              words={[text]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </div>
          <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Start Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
