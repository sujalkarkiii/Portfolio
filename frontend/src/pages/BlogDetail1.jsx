import { Link } from "react-router-dom";
import { FaGithub, FaArrowLeft } from 'react-icons/fa6';

const BlogDetail1 = () => {
    return (
        <div className="bg-black text-white min-h-screen px-6 py-16">
            <div className="max-w-4xl mx-auto">

                {/* Back Button */}
                <div className="pb-4">

                <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white font-semibold "
                    
                    >
                        <FaArrowLeft className="text-lg" />
                        
                    Back to Blogs
                </Link>
                    </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
                    How to Setup Tailwind CSS v4 in a React + Vite Project
                </h1>

                {/* Meta */}
                <p className="text-gray-500 mb-8">
                    Published on Dec 30, 2025 · 5 min read
                </p>

                {/* Content */}
                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">

                    <p>
                        Tailwind CSS v4 is a powerful utility-first CSS framework that makes
                        building modern UIs fast and efficient. When combined with Vite and
                        React, it provides an extremely smooth development experience.
                    </p>

                    <h2 className="text-2xl font-semibold text-white">
                        1. Create a React + Vite Project
                    </h2>

                    <p>
                        First, create your React project using Vite by running:
                    </p>

                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                        npm create vite@latest
                        cd my-project
                        npm install
                    </pre>

                    <h2 className="text-2xl font-semibold text-white">
                        2. Install Tailwind CSS v4
                    </h2>

                    <p>
                        Install Tailwind CSS and its dependencies:
                    </p>

                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                        npm install tailwindcss @tailwindcss/vite
                    </pre>
                    <h2 className="text-2xl font-semibold text-white">
                        Step 3: Configure vite.config.js
                    </h2>

                    <p>
                        By default, your <span className="text-blue-400">vite.config.js</span> looks like this:
                    </p>

                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                        {`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});`}
                    </pre>

                    <p>
                        Now update it to enable Tailwind CSS:
                    </p>

                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                        {`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});`}
                    </pre>


                    <h2 className="text-2xl font-semibold text-white">
                        Step 4: Import Tailwind in index.css
                    </h2>

                    <p>
                        Open <span className="text-blue-400">src/index.css</span> and replace everything with:
                    </p>

                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                        {`@import "tailwindcss";`}
                    </pre>

                    <h2 className="text-2xl font-semibold text-white">
                        Final Step: Run Your Project
                    </h2>

                    <p>
                        Restart the dev server:
                    </p>

                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                        {`npm run dev`}
                    </pre>

                    <h2 className="text-2xl font-semibold text-white">
                        🧪 Test if Tailwind is Working
                    </h2>

                    <p>
                        Add this to any React component:
                    </p>

                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                        {`<h1 className="text-blue-500 text-3xl font-bold">
  Thank you 
</h1>`}
                    </pre>

                    <p>
                        Run <span className="text-blue-400">npm run dev</span> and your
                        Tailwind CSS v4 setup is complete 🎉
                    </p>

                    {/* Back Button */}
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

export default BlogDetail1;
