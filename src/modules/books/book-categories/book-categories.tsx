"use client";
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
  const [books, setBooks] = useState<{ category: string; title: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Simulate API call
  useEffect(() => {
    setTimeout(() => {
      setBooks([
        { category: "Ebooks", title: "The Great Gatsby" },
        { category: "Ebooks", title: "1984 by George Orwell" },
        { category: "Audiobooks", title: "Atomic Habits" },
        { category: "Magazines", title: "Forbes Magazine" },
        { category: "Teens & Kids", title: "Harry Potter" },
        { category: "Ebooks", title: "The Great Gatsby" },
        { category: "Ebooks", title: "1984 by George Orwell" },
        { category: "Audiobooks", title: "Atomic Habits" },
        { category: "Magazines", title: "Forbes Magazine" },
        { category: "Teens & Kids", title: "Harry Potter" },
        { category: "Ebooks", title: "The Great Gatsby" },
        { category: "Ebooks", title: "1984 by George Orwell" },
        { category: "Audiobooks", title: "Atomic Habits" },
        { category: "Magazines", title: "Forbes Magazine" },
        { category: "Teens & Kids", title: "Harry Potter" },
        { category: "Ebooks", title: "The Great Gatsby" },
        { category: "Ebooks", title: "1984 by George Orwell" },
        { category: "Audiobooks", title: "Atomic Habits" },
        { category: "Magazines", title: "Forbes Magazine" },
        { category: "Teens & Kids", title: "Harry Potter" },
        { category: "Ebooks", title: "The Great Gatsby" },
        { category: "Ebooks", title: "1984 by George Orwell" },
        { category: "Audiobooks", title: "Atomic Habits" },
        { category: "Magazines", title: "Forbes Magazine" },
        { category: "Teens & Kids", title: "Harry Potter" },
        { category: "Ebooks", title: "The Great Gatsby" },
        { category: "Ebooks", title: "1984 by George Orwell" },
        { category: "Audiobooks", title: "Atomic Habits" },
        { category: "Magazines", title: "Forbes Magazine" },
        { category: "Teens & Kids", title: "Harry Potter" },
      ]);
    }, 1000);
  }, []);

  // Filtered books based on selected category
  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

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
            {category.name}
          </button>
        ))}
      </div> 

      <hr className="mb-5 text-gray-200"/>

      {/* Books Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-20">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div key={index} className="rounded-md shadow-md  sm:w-96 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex items-center mt-3 justify-between p-3">
              <div className="flex items-center space-x-2">
                <Image
                  height={50}
                  width={50}
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt=""
                  className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
                />
                <div className="-space-y-1">
                  <h2 className="text-sm font-semibold leading-none">leroy_jenkins72</h2>
                  <span className="inline-block text-xs leading-none dark:text-gray-600">
                    Somewhere
                  </span>
                </div>
              </div>
              <button title="Open options" type="button">
                <FaEllipsisV className="w-5 h-5" />
              </button>
            </div>
            <Image
            height={300}
            width={300}
              src="https://source.unsplash.com/301x301/?random"
              alt=""
              className="object-cover object-center w-full h-72 dark:bg-gray-500"
            />
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button type="button" title="Like post" className="flex items-center justify-center">
                    <FaHeart className="w-5 h-5" />
                  </button>
                  <button type="button" title="Add a comment" className="flex items-center justify-center">
                    <FaComment className="w-5 h-5" />
                  </button>
                  <button type="button" title="Share post" className="flex items-center justify-center">
                    <FaShare className="w-5 h-5" />
                  </button>
                </div>
                <button type="button" title="Bookmark post" className="flex items-center justify-center">
                  <FaBookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">
            No books found in this category.
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
