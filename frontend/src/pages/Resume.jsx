import React from 'react'
import Footer from '../components/Footer'

const Resume = () => {
  return (
<>
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <section className="max-w-xl w-full p-8 bg-gray-800 rounded-2xl shadow-xl text-center 
                          transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-1200">
        <h1 className="text-4xl font-bold text-white mb-2">Sujal Karki</h1>
        <h2 className="text-xl text-gray-300 mb-4">
          Full-Stack Developer & Computer Engineering Student
        </h2>
        <p className="text-gray-300 mb-6">
          Computer Engineering student with expertise in <strong>frontend and backend development</strong>, building <strong>scalable web applications and intelligent solutions</strong>. Passionate about coding, problem-solving, and contributing to open-source and innovative projects.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6 text-gray-300">
          <p>📍 Nepal</p>
          <p>📧 sujalkarki1904@gmail.com</p>
          <p>📱 +977-9767384075</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/images/Copy of CV.pdf" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            download
          >
            Download CV
          </a>
          <a
            href="/images/Copy of CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            View Online
          </a>
        </div>
      </section>
    </div>
<Footer/>

</>
  )
}

export default Resume
