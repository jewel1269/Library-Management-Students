"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import BASE_URI from './../../constant';
import Image from "next/image";
import Link from "next/link";


type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(`${BASE_URI}/api/admin/login`, data);
      console.log(response.data);

      if (!response.data.success) {
        toast.error("Invalid Admin");
        return;
      }

      localStorage.setItem("token", response.data.data.token);
      toast.success("Admin Logged In Successfully");

      setTimeout(() => {
        router.push("/dashboard/home");
      }, 2000);
    } catch (error) {
      toast.error("Invalid Admin");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#0D2B2F] text-white">
      {/* Left Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <div className="text-center">
          <Image
            height={200}
            width={200}
            src="https://i.ibb.co.com/zVYWPZXd/library-background-design-1300-221-removebg-preview.png"
            alt="Library Admin"
            className="h-64 w-auto mx-auto"
          />
          <h1 className="text-3xl font-semibold mt-4">Welcome To Students Panel</h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center border-l border-gray-500 p-6">
        <div className="w-full max-w-xl">
          <h2 className="text-2xl font-semibold text-center">Welcome</h2>
          <p className="text-center text-gray-400 mb-6">
            Please login to Students Panel.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-2xl border border-[#25545a] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-2xl border border-[#25545a] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
            >
              LOGIN
            </button>
          </form>

         <div className="flex items-center mt-4 justify-between">
         <p className="text-center text-sm  text-gray-400 hover:underline cursor-pointer">
            Forgotten Your Password?
          </p>
         <Link href={"/register"}>
         <h1 className="text-center text-sm  text-gray-400 hover:underline cursor-pointer">Register</h1>
         </Link>
         </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
