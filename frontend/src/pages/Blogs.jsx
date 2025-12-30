import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Blogs = () => {
  const blogPosts = [
    {
      title: "How to Setup Tailwind CSS v4 in a React + Vite Project",
      description:
        "Tailwind CSS v4 makes styling modern React apps faster and easier. In this guide, you will learn how to properly install and configure Tailwind CSS with a Vite-powered React project in just a few minutes.",
      link: "/blogs/tailwind-v4",
    },
    {
      title: "How to Add Icons in React",
      description:
        "You can add icons in React using the react-icons library.",
      link: "/blogs/addicons",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full py-16 px-6 space-y-8">
      {blogPosts.map((post, index) => (
        <Link
          to={post.link}
          key={index}
          className="block max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02]"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {post.title}
          </h1>
          <p className="text-gray-300 leading-relaxed mb-6">{post.description}</p>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white font-semibold cursor-pointer">
            Read More
            <FaArrowRight className="text-lg" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
