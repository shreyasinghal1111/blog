import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-5">Welcome to my blog!</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is a sample blog built with Next.js and Tailwind CSS. You can find more information about the posts below.
      </p>
      <button className="bg-blue-500 text-white hover:bg-blue-400 p-4 rounded-lg text-lg font-bold">
        <Link href="/posts/first-post">Read my first post</Link>
      </button>
     
    </div>
  );
}