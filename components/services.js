import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around text-center py-10 bg-gray-100 md:px-28">
      {/* Luxurious Itineraries */}
      <div className="flex flex-col items-center p-6">
        <div className="text-4xl text-blue-500 mb-4">
          <i className="fas fa-suitcase"></i> {/* suitcase icon */}
        </div>
        <h3 className="text-xl font-semibold mb-2">Luxurious Itineraries</h3>
        <p className="text-gray-600">
          Experience tailor-made journeys crafted to indulge your every desire,
          ensuring an exclusive and opulent travel experience.
        </p>
      </div>

      {/* 24/7 Concierge Service */}
      <div className="flex flex-col items-center p-6">
        <div className="text-4xl text-blue-500 mb-4">
          <i className="fas fa-clock"></i> {/* clock icon */}
        </div>
        <h3 className="text-xl font-semibold mb-2">24/7 Concierge Service</h3>
        <p className="text-gray-600">
          Our dedicated team of concierge experts is at your service day and
          night, ensuring seamless assistance throughout your luxury train
          journey.
        </p>
      </div>

      {/* Exclusive Partnerships */}
      <div className="flex flex-col items-center p-6">
        <div className="text-4xl text-blue-500 mb-4">
          <i className="fas fa-check-circle"></i> {/* check-circle icon */}
        </div>
        <h3 className="text-xl font-semibold mb-2">Exclusive Partnerships</h3>
        <p className="text-gray-600">
          We have forged partnerships with prestigious local providers to offer
          you the finest accommodations, expert guides, and unforgettable
          experiences.
        </p>
      </div>
    </div>
  );
};

export default Services;
