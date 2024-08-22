"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

const LeftSideBar = () => {
  const currentPath = usePathname();
  return (
    <div className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 hidden h-screen flex-col  overflow-y-auto border-r p-6 pt-36 shadow-light-300   dark:shadow-none sm:flex lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6  ">
        {sidebarLinks.map((item) => {
          const active =
            (currentPath.includes(item.route) && item.route.length > 1) ||
            currentPath === item.route;

          return (
            <Link
              href={item.route}
              key={item.label}
              className={`base-medium flex  items-center gap-4 rounded-lg   p-4  ${active && "primary-gradient "}`}
            >
              <Image
                width={20}
                height={20}
                src={item.imgURL}
                alt={item.label}
                className={`${active ? "" : "invert-colors"}`}
              />
              <p className="text-dark100_light900 max-md:hidden ">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex  flex-col gap-3 ">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              {" "}
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
              <Image
                src="/assets/icons/account.svg"
                width={20}
                height={20}
                alt="sign-up"
                className="invert-colors lg:hidden "
              />
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              {" "}
              <span className="primary-text-gradient max-lg:hidden">
                Sign-up
              </span>
              <Image
                src="/assets/icons/sign-up.svg"
                width={20}
                height={20}
                alt="sign-up"
                className="invert-colors lg:hidden "
              />
            </Button>
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default LeftSideBar;
