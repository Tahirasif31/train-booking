import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen md:h-[650px] "
      style={{ backgroundImage: `url('/hero-bg-new.jpg')` }}
    >
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="mt-12 justify-center text-center md:text-left px-4 md:px-8 basis-2/5">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
            Explore Amazing Sightseeing with Am Train Trac
          </h1>
          <p className="text-gray-700 mb-8">
            Experience a new level of relaxation and privacy as you journey to
            your destination in style
          </p>
          <a
            href="tel:+18884109371"
            className="bg-blue-600 text-white px-6 py-2 rounded-full inline-block hover:bg-blue-700 transition"
          >
            CALL NOW (888) 410-9371
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4">
          <img
            src="/hero-train.jpg"
            alt="Train Compartment"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
