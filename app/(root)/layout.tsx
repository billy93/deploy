"use client";
import LeftSideBar from "@/components/shared/LeftSideBar";
import Navbar from "@/components/shared/navbar/Navbar";
import RightSideBar from "@/components/shared/RightSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log(process.env.ana);
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto size-full max-w-5xl  ">
            {" "}
            {process.env.ana}
            {children}
          </div>
        </section>
        <RightSideBar />
      </div>
    </main>
  );
};

export default Layout;
