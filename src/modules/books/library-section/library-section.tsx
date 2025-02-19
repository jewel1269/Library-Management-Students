

import React from "react";
import { FaBook, FaHeadphones, FaNewspaper, FaUsers } from "react-icons/fa";

const LibrarySection: React.FC = () => {
  const features = [
    {
      icon: <FaBook className="text-4xl text-gray-600" />,
      title: "EBOOKS",
      description:
        "An electronic version of a printed book that can be read on a computer.",
    },
    {
      icon: <FaHeadphones className="text-4xl text-gray-600" />,
      title: "AUDIOBOOKS",
      description:
        "An audiobook or CD recording of a reading of a book, typically a novel.",
    },
    {
      icon: <FaNewspaper className="text-4xl text-yellow-500" />,
      title: "MAGAZINE",
      description:
        "A periodical publication containing articles and illustrations information.",
    },
    {
      icon: <FaUsers className="text-4xl text-gray-600" />,
      title: "TEENS & KIDS",
      description:
        "The year of a person's age from 13 to 19 and the kids and teens.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome To Our Service 🎯
        </h2>
        <p className="text-gray-600 mt-2">
          Welcome to the Most Popular Library Today
        </p>
        <div className="mt-1 text-gray-600 text-2xl">📖</div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              <a
                href="#"
                className="text-blue-600 font-medium mt-4 inline-block hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
