import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-4xl mx-auto p-4 bg-gray-100">
      {/* First Image */}
      <div className="relative">
        <img
          src="/hero-bg-new.jpg"
          alt="Mountain View"
          className="w-full md:h-[500px] object-cover rounded-t-lg"
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
          About Us
        </h2>
      </div>

      {/* About Us Text */}
      <div className="bg-gray-100 pt-2 text-gray-700 leading-relaxed">
        <p>
          We are one of the reckoned train travel planners in the USA & Canada.
          We have a vision and clear approach to analyzing on behalf of
          customers and providing them with economical fares for their train
          travel. Our company has affiliate tie-ups with some of the leading
          train consolidators to provide you with optimum deals in your pocket
          budget & timing preference. With us, you can customize your train
          plans as per your requirements, our team is always ready to assist in
          your train travel-related queries.
        </p>
      </div>

      {/* Second Image */}
      <div>
        <img
          src="/about.jpg"
          alt="Traveler"
          className="w-[550px]  object-cover rounded-b-lg mt-8 text-center mx-auto"
        />
      </div>
    </section>
  );
};

export default AboutUs;
