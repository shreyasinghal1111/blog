import ImageComponent from "@/app/(components)/ImageComponent";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-8 p-8 max-w-md">
        <h1 className="text-4xl font-bold text-center">First Post</h1>
        <ImageComponent />
        <p className="text-md text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 text-white hover:bg-blue-400 rounded-lg text-md font-bold p-3">
            <Link href="/content">See More</Link>
          </button>
          <button className="bg-blue-500 text-white hover:bg-blue-400 rounded-lg text-md font-bold p-3">
            <Link href="/posts/information">Show Information</Link>
          </button>
          <button className="bg-blue-500 text-white hover:bg-blue-400 rounded-lg text-md font-bold p-3">
            <Link href="/">Back to Home</Link>
          </button>
          
        </div>
       
      </div>
    </div>
  );
};

export default page;