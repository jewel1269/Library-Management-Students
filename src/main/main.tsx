'use client'
import Footer from "@/modules/home-screen/footer/footer";
import Navbar from "@/modules/home-screen/root/nabver/nabver";
import { store } from "@/modules/redux/features/store/store";
import React from "react";
import { Provider } from "react-redux";

const Main = ({ children }: any) => {
  return (
    <div>
   <Provider store={store}>
   <Navbar />
      {children}
      <Footer />
   </Provider>
    </div>
  );
};

export default Main;
