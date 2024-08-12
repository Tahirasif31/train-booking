import React from "react";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Train Booking</h2>
        <p className="text-gray-700 mb-4">Book Your Train Now!</p>
        <a
          href="tel:+18336489287"
          className="bg-pink-500 text-white mx-6 px-6 py-2 rounded-full hidden md:block mb-5"
        >
          TOLL FREE (833) 6489287
        </a>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
