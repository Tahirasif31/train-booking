import React from "react";

const PlanYourJourney = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="mb-8">
        <h4 className="text-lg text-gray-600">Family-Friendly Adventures</h4>
        <h2 className="text-3xl font-bold text-blue-700">Plan Your Journey</h2>
        <p className="text-gray-600 mt-2">
          Customize your itinerary with our expert guidance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Coast Starlight */}
        <div className="flex flex-col">
          <img
            src="path_to_image/coast_starlight.jpg"
            alt="Coast Starlight"
            className="w-full mb-4 rounded-lg"
          />
          <h4 className="text-gray-600">
            Coast Starlight: Seattle - Portland - Sacramento - Los Angeles
          </h4>
        </div>

        {/* Southwest Chief */}
        <div className="flex flex-col">
          <img
            src="path_to_image/southwest_chief.jpg"
            alt="Southwest Chief"
            className="w-full mb-4 rounded-lg"
          />
          <h4 className="text-gray-600">
            Southwest Chief: Chicago - Kansas City - Flagstaff - Los Angeles
          </h4>
        </div>

        {/* Crescent */}
        <div className="flex flex-col">
          <img
            src="path_to_image/crescent.jpg"
            alt="Crescent"
            className="w-full mb-4 rounded-lg"
          />
          <h4 className="text-gray-600">
            Crescent: New York - Atlanta - New Orleans
          </h4>
        </div>

        {/* Cardinal */}
        <div className="flex flex-col">
          <img
            src="path_to_image/cardinal.jpg"
            alt="Cardinal"
            className="w-full mb-4 rounded-lg"
          />
          <h4 className="text-gray-600">
            Cardinal: New York - Washington - Charlottesville - Cincinnati
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PlanYourJourney;
