import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full py-16 px-6">

      <div className="max-w-4xl mx-auto transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-1200">
        {/* Blog Card */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How to Setup Tailwind CSS v4 in a React + Vite Project
          </h1>

          <p className="text-gray-300 leading-relaxed mb-6">
            Tailwind CSS v4 makes styling modern React apps faster and easier.
            In this guide, you will learn how to properly install and configure
            Tailwind CSS with a Vite-powered React project in just a few minutes.
          </p>

          <button className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white font-semibold">
            <Link to="/blogs/tailwind-v4">
              Read More →
            </Link>
          </button>

        </div>
      </div>

    </div>
  );
};

export default Blogs;
