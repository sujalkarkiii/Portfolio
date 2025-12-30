import React from 'react';
import { FaGithub, FaArrowLeft } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BlogDetail2 = () => {
    return (
        <div className="bg-black text-white min-h-screen py-16 px-6">
            <div className="max-w-4xl mx-auto">


                {/* Blog Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    How to Add Icons in React
                </h1>

                {/* Introduction */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Adding icons in React is simple and makes your UI more interactive.
                    The most popular way is to use the <span className="font-semibold">react-icons</span> library.
                </p>

                {/* Steps */}
                <div className="bg-gray-900 rounded-2xl p-8 shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Step-by-Step Guide:</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-300">
                        <li>
                            Install react-icons via npm:
                            <code className="bg-gray-800 p-1 rounded ml-2">npm install react-icons</code>
                        </li>
                        <li>
                            Visit the official React Icons website to choose your icon:{" "}
                            <a
                                href="https://react-icons.github.io/react-icons/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                https://react-icons.github.io/react-icons/
                            </a>
                        </li>
                        <li>
                            Import the icon you want in your component:
                            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm mt-2">
                                {`import { FaGithub } from "react-icons/fa6";`}
                            </pre>
                        </li>
                        <li>
                            Use the icon in your JSX where you want it to appear. Example:
                            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm mt-2">
                                {`import { FaGithub } from "react-icons/fa6";
                                
function MyComponent() {
  return (
    <div>
      <h1>My GitHub Icon:</h1>
      <FaGithub />
    </div>
  );
}`}
                            </pre>
                        </li>
                    </ol>
                </div>

                {/* Example Card */}
                <div className="bg-gray-900 rounded-2xl p-6 shadow-lg mb-6 flex flex-col items-center">
                    <h3 className="text-2xl font-semibold mb-4">Example:</h3>
                    <div className="flex gap-6 text-3xl text-gray-300">
                        <FaGithub className="hover:text-white transition cursor-pointer" />
                        <IoLogoLinkedin className="hover:text-blue-400 transition cursor-pointer" />
                        <MdOutlineEmail className="hover:text-green-400 transition cursor-pointer" />
                    </div>
                </div>

                {/* Read More / Back */}
                <div className="mt-6">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white font-semibold"
                    >
                        <FaArrowLeft className="text-lg" />
                        Back to Blogs
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BlogDetail2;
