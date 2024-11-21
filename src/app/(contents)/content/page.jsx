import Link from "next/link";
import React from "react";
import Image from "next/image";

const ContentPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-5 p-5 max-w-md">
        <div className="relative">
          
        </div>
        <h1 className="text-2xl font-bold text-center mb-1">About Me</h1>
        <Image
            src="/images/image.jpg"
            alt="Profile Picture"
            width={100}
            height={80}
            className="rounded-sml shadow-lg hover:scale-105 transition duration-300"
          />
        <p className="text-xl text-gray-600">
          Shi Uesugi
        </p>
        <p className="text-lg text-gray-600">
          Hello, I’m Shi. I’m a software engineer and a translator (English/Japanese). You can contact me on Twitter.
        </p>
        <p className="text-lg text-gray-600">
          (This is a sample website - you’ll be building a site like this in our <Link href="https://nextjs.org/docs/getting-started" className="underline hover:text-blue-500">Next.js tutorial</Link>.)
        </p>
        <div className="flex justify-center gap-4">
          <Link href="https://twitter.com/shuuesugi" target="_blank" rel="noopener noreferrer" >
            <button className="bg-blue-500 text-white hover:bg-blue-400 rounded-lg text-lg font-bold p-5">
              Follow me on Twitter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;