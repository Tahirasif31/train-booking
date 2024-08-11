import React from "react";

const LuxuryRailExperiences = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between p-8 bg-white md:mx-28">
      {/* Text Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
          Luxury Rail Experiences
        </h2>
        <p className="text-lg lg:text-xl text-gray-700">
          Welcome to On the Go Bookings, your gateway to unforgettable train
          travel experiences. Discover our exclusive offerings of luxurious
          bedroom suites, private business class rooms, and curated train travel
          packages that redefine your journey. Whether you’re seeking adventure
          or relaxation, On the Go Bookings ensures every mile is a masterpiece
          of comfort and elegance.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        <img
          src="/rail.jpg"
          alt="Luxurious bedroom"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default LuxuryRailExperiences;
