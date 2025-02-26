"use client";
import BASE_URI from "@/constant";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Chatbox } from "@talkjs/react"; // Import TalkJS Chatbox component

interface Params {
  id: string;
}

interface Book {
  _id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  availableCopies: number;
  borrowedCount: number;
  isbn: string;
  price: number;
  publisher: string;
  quantity: number;
  dateReceived: string;
}

const Page = ({ params }: { params: Params }) => {
  const { id } = React.use(params);
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [borrowed, setBorrowed] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${BASE_URI}/api/books/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBook(response.data?.data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleBorrow = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${BASE_URI}/api/books/${id}/borrow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBorrowed(true);
    } catch (error) {
      console.error("Error borrowing book:", error);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!book) {
    return (
      <div className="h-screen flex items-center justify-center">
        Book not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div className="w-full  bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="">
          <div className="md:flex-shrink-0">
            <Image
              src={book.cover}
              alt={book.title}
              className="h-32 rounded-2xl w-full md:h-full "
              width={1000}
              height={1000}
            />
          </div>
          <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-900"><strong className="text-gray-400">Title: </strong>{book.title}</h1>
            <p className="mt-2 text-gray-600"><strong>By: </strong> {book.author}</p>
            <p className="mt-4 text-gray-700"><strong>--: </strong>{book.description}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <strong>Publisher:</strong> {book.publisher}
              </p>
              <p className="text-sm text-gray-600">
                <strong>ISBN:</strong> {book.isbn}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Price:</strong> ${book.price}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Available Copies:</strong> {book.availableCopies}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Borrowed Count:</strong> {book.borrowedCount}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Quantity:</strong> {book.quantity}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date Received:</strong>{" "}
                {new Date(book.dateReceived).toLocaleDateString()}
              </p>
            </div>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={handleBorrow}
                className={`px-4 py-2 rounded ${
                  borrowed
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700"
                } text-white`}
                disabled={borrowed}
              >
                {borrowed ? "Borrowed" : "Borrow"}
              </button>
              <button
                onClick={() => {
                  // Logic to open chat widget or initiate chat with admin
                }}
                className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded"
              >
                Chat with Admin
              </button>
            </div>
            {/* Chatbox component */}
            <div className="mt-6">
              <Chatbox
                conversationId={`book_${book._id}_admin`}
                className="chatbox"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
