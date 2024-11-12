import React from "react";

const SignaturePackages = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-28">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-8">
        Our Signature Packages
      </h2>

      <div className="text-center mb-10">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700">
          <a href="tel:+18884948492">CALL NOW (888) 746-1595</a>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Roomette */}
        <div className="">
          <img
            src="/package-1.jpg"
            alt="Roomette"
            className="w-full rounded-lg"
          />
          <h3 className="text-lg font-semibold text-gray-500 text-left">
            Private Space
          </h3>
          <h4 className="text-xl font-bold text-blue-700 mt-4">Roomette</h4>
          <p className="text-gray-600 mt-3">
            The roomette provides exclusive, private space for one or two
            passengers, ensuring comfort and privacy throughout the journey.
            High-quality linens, pillows, and a plush mattress ensure a restful
            sleep experience.
          </p>
        </div>

        {/* Coach Class */}
        <div className="">
          <img
            src="/package-2.jpg"
            alt="Coach Class"
            className="w-full  rounded-lg"
          />
          <h3 className="text-lg font-semibold text-gray-500 text-left">
            Reclining Seats
          </h3>
          <h4 className="text-xl font-bold text-blue-700 mt-4">Coach Class</h4>
          <p className="text-gray-600 mt-3">
            Seats designed for comfort with adjustable recline, headrest, and
            ample legroom, allowing passengers to relax during the journey.
            Temperature-controlled environment with adjustable air vents to
            ensure comfort regardless of external weather conditions.
          </p>
        </div>

        {/* Family Bedrooms */}
        <div className="">
          <img
            src="/package-3.jpg"
            alt="Family Bedrooms"
            className="w-full rounded-lg"
          />
          <h3 className="text-lg font-semibold text-gray-500 text-left">
            Luxurious Bedding
          </h3>
          <h4 className="text-xl font-bold text-blue-700 mt-4 text-left">
            Family Bedrooms
          </h4>
          <p className="text-gray-600 mt-3 text-left">
            Typically includes multiple beds or sleeping berths to accommodate
            several family members or group travelers comfortably. High-quality
            mattresses, linens, and pillows ensuring a restful sleep experience
            for all occupants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignaturePackages;
