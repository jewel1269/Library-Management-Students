"use client";
import BASE_URI from "@/constant";
import { useGetBooksQuery } from "@/modules/redux/features/api/api-slice";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaHeadphones,
  FaNewspaper,
  FaChild,
  FaEllipsisV,
  FaHeart,
  FaComment,
  FaShare,
  FaBookmark,
} from "react-icons/fa";

// Book categories with icons
const categories = [
  {
    name: "All",
    description: "All available books.",
    icon: <FaBook className="w-10 h-10 text-gray-700" />,
  },
  {
    name: "Ebooks",
    description:
      "An electronic version of a printed book that can be read on a computer.",
    icon: <FaBook className="w-10 h-10 text-gray-700" />,
  },
  {
    name: "Audiobooks",
    description:
      "An audiobook recording of a reading of a book, typically a novel.",
    icon: <FaHeadphones className="w-10 h-10 text-gray-700" />,
  },
  {
    name: "Magazines",
    description:
      "A periodical publication containing articles and illustrations.",
    icon: <FaNewspaper className="w-10 h-10 text-gray-700" />,
  },
  {
    name: "Teens & Kids",
    description: "Books for kids and teenagers from 13 to 19 years old.",
    icon: <FaChild className="w-10 h-10 text-gray-700" />,
  },
];

const BookCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const {jewel} = useGetBooksQuery()
  console.log(jewel, "jewel");

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("token");
          if (token) {
            const response = await axios.get(`${BASE_URI}/api/books/`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setBooks(response.data?.data);
            console.log(response);
          } else {
            console.log("No token found in localStorage.");
          }
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getAllBooks();
  }, []);

  const filteredBooks =
    selectedCategory === "All" ? books : "No Data Available in this category";

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">Welcome To The Library</h2>
      <p className="text-gray-600 text-center mb-8">
        Explore a wide range of books by category
      </p>

      {/* Category Selection */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category.name)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedCategory === category.name
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {category.icon}
            {category.name}
          </button>
        ))}
      </div>

      <hr className="mb-5 text-gray-200" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
    {filteredBooks.length > 0 ? (
        filteredBooks.map((book, index) => (
          <div
            key={index}
            className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md  mb-6"
          >
            <Image
              className="object-cover w-full h-64"
              width={720}
              height={400}
              src={book?.cover}
              alt="Article"
            />

            <div className="p-6">
              <div>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  book
                </span>
                <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline">
                 <span className="text-gray-500"> Title:  </span>{book?.title}
                </p>
                <p><span className="text-gray-500">Author:  </span> {book?.author}</p>
                <p><span className="text-gray-500">Publisher:  </span> {book?.publisher}</p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                 <span className="text-sm text-gray-600">Description: </span>{book?.description.substring(0, 60)}......
                </p>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Image
                      
                      width={40}
                      height={40}
                      className="object-cover h-10 rounded-full"
                      src={book?.cover}
                      alt="Avatar"
                    />
                    <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
                      Jone Doe
                    </p>
                  </div>
                  <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    21 SEP 2015
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">
          No Data Available in this category
        </p>
      )}
    </div>
    </div>
  );
};

const LibraryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BookCategories />
    </div>
  );
};

export default LibraryPage;
