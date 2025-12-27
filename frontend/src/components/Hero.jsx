const Hero = () => {
  return (
    <section className="bg-black text-white flex flex-col items-start pt-26 pb-26 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between">

        {/* Left */}
<div className="md:w-1/2 mb-10 md:mb-0">
  <h1 className="text-5xl md:text-7xl font-extrabold">
    <span className="bg-grey-800 text-white px-1 mr-2 ">Sujal</span>
    <span className="bg-grey-400 text-white px-1">Karki</span>
  </h1>

  <p className="text-lg md:text-xl text-gray-400 mt-4">
    I am a web developer and a student at IOEPC. I enjoy building modern web applications and am eager to learn Machine Learning and AI.
  </p>

  {/* Buttons */}
  <div className="mt-6 flex gap-4">
    <button
      onClick={() => {
        const section = document.getElementById("projects");
        section?.scrollIntoView({ behavior: "smooth" });
      }}
      className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
    >
      View Projects
    </button>

    <a
      href="/resume"
      className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
    >
      Resume
    </a>
  </div>
</div>


        {/* Right */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <img
            src="image/20250126_082308_watermarked.jpg"
            alt="Sujal Karki"
            className="w-80 h-80 object-cover rounded-xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
