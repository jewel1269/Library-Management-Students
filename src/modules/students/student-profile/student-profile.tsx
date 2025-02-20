'use client'
import useAuth from "@/auth/auth-students/useAuth";
import React, { use } from "react";

const StudentProfile = () => {
    const {user} = useAuth();
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        <div className="bg-blue-500 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Student Profile</h2>
          <p className="text-sm">View Profile</p>
        </div>

        <div className="p-6 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold">{user?.name}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Personal details</h4>
            <div className="flex items-center">
                <strong>Email: </strong>
                <p>{user?.email}</p>
            </div>
            <p>
              <strong>Gender:</strong> Male
            </p>
            <p>
              <strong>Birth Date:</strong> 15th July 2011
            </p>
            <p>
              <strong>Address:</strong>
            </p>
            <p className="text-sm text-gray-600">
              Lot PT24045 K, Taman Tanjung Damai, 21300, Kuala Terengganu,
              Terengganu.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Class details</h4>
            <p><strong>ID: </strong> {user?._id?.slice(0, 12).toUpperCase()}</p>
            <p>
              <strong>Classroom:</strong> 1 Bestari
            </p>
            <p>
              <strong>Date of entry:</strong> 1 January 2018
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="bg-green-500 text-white px-2 rounded">
                Active
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-between px-6 pb-6">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2">
            📋 View Reports
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
