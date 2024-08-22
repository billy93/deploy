import Image from "next/image";
import React from "react";
import RenderTag from "./RenderTag";
const hotNetworkList = [
  {
    title:
      "Would it be appropriate to point out an error in another paper during a referee report?",
    content: "empty",
  },
  { title: "How can an airconditioning machine exist?", content: "empty" },
  {
    title: "Interrogated every time crossing UK Border as citizen",
    content: "empty",
  },
  { title: "Low digit addition generator", content: "empty" },
  {
    title: "What is an example of 3 numbers that do not make up a vector?",
    content: "empty",
  },
];
const popularTags = [
  { _id: "1", name: "javascript", totalQuestions: 5 },
  { _id: "2", name: "react", totalQuestions: 5 },
  { _id: "3", name: "next", totalQuestions: 5 },
  { _id: "4", name: "vue", totalQuestions: 2 },
  { _id: "5", name: "redux", totalQuestions: 10 },
];

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 text-dark500_light700 sticky right-0 top-0 flex h-screen w-[330px] flex-col gap-3 px-12 pt-36 font-inter max-xl:hidden ">
      <div className=" flex flex-col gap-4">
        <h1 className="h3-bold">Hot Network</h1>
        {hotNetworkList.map((item) => {
          return (
            <div
              key={item.title}
              className="body-medium flex items-center justify-between gap-3 "
            >
              <h1>{item.title}</h1>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                height={18}
                width={18}
                alt="right icons"
                className="invert-colors"
              />
            </div>
          );
        })}
      </div>
      <div className="py-6">
        <h1 className="h3-bold my-6">Tags</h1>
        <div className="flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
