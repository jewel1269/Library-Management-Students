import Footer from "@/modules/home-screen/footer/footer";
import Navbar from "@/modules/home-screen/root/nabver/nabver";
import React from "react";

const Main = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
