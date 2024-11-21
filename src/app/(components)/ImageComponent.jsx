"use client";
import React from "react";
import Image from "next/image";

const ImageComponent = () => {
  return (
    <div>
      
      <Image
        src="/images/image.jpg"
        alt="Random Image"
        width={150}
        height={150}
        className="mt-2 rounded-lg shadow-lg hover:scale-105 transition duration-300"
      />
    </div>
  );
};

export default ImageComponent;