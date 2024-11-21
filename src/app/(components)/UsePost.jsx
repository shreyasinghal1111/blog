"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const UsePost = ({ data }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="p-4 space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-lg">
          <h2 className="text-xl font-bold">Title: {post.title}</h2>
          <p className="text-gray-600"> Description: {post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UsePost;